'use strict';

/**
 * attendance controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { v4: uuidv4 } = require('uuid'); // For generating UID for attendance
const geolib = require('geolib'); // Using geolib to check if the point is within radius
const moment = require('moment'); // Use moment without timezone

module.exports = createCoreController('api::attendance.attendance', ({ strapi }) => ({
  // Existing checkLocation function (Check-In)
  async checkLocation(ctx) {
    const { latitude, longitude, uid } = ctx.request.body;

    // Fetch employee by UID
    const employee = await strapi.db.query('api::employee.employee').findOne({ where: { uid } });

    if (!employee) {
      return ctx.send({
        check_in: false,
        message: 'Employee not found.',
      });
    }

    // Find the latest attendance record for the employee where out_time is null
    const attendance = await strapi.db.query('api::attendance.attendance').findOne({
      where: {
        employee: employee.id,
        out_time: null,
      },
      orderBy: { createdAt: 'desc' }, // Assuming you have a createdAt field
      populate: {
        location: true, // Populate location to access it
      },
    });

    if (attendance) {
      // Get the location associated with the attendance
      const location = attendance.location;

      // Check if the employee is outside the location radius
      const isOutside = !geolib.isPointWithinRadius(
        { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
        { latitude: parseFloat(location.latitude), longitude: parseFloat(location.longitude) },
        location.radius
      );

      if (!isOutside) {
        return ctx.send({
          success: false,
          message: 'Employee is still within the project location. Cannot check out.',
        });
      }

      // Update the attendance record with the out_time
      const out_time = moment().format('HH:mm:ss'); // Use moment to get current time

      const updatedAttendance = await strapi.entityService.update(
        'api::attendance.attendance',
        attendance.id,
        {
          data: {
            out_time: out_time,
          },
        }
      );
    }

    // Fetch all active projects along with their associated location, members, and project managers
    const projects = await strapi.db.query('api::project.project').findMany({
      where: { is_deleted: false, status: 'Active' },
      populate: {
        location: true, // Populate location to access it in the query
        members: true, // Populate members to check if the employee is part of the project
        project_managers: true, // Populate project managers to check if the employee is managing the project
      },
    });

    let foundProject = null;

    // Iterate over all projects and check if the location matches
    for (const project of projects) {
      const location = project.location;

      if (location && location.latitude && location.longitude && location.radius) {
        const isInside = geolib.isPointWithinRadius(
          { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
          { latitude: parseFloat(location.latitude), longitude: parseFloat(location.longitude) },
          location.radius
        );

        if (isInside) {
          // Check if the employee is either a member or a project manager of the project
          const isMember = project.members.some((member) => member.id === employee.id);
          const isManager = project.project_managers.some((manager) => manager.id === employee.id);

          if (isMember || isManager) {
            foundProject = project;
            break; // If a match is found, break out of the loop
          }
        }
      }
    }

    // If a matching project location is found and the employee is part of the project, create attendance
    if (foundProject) {
      // Create attendance entry
      const attendance = await strapi.entityService.create('api::attendance.attendance', {
        data: {
          employee: employee.id, // Set employee reference
          in_time: moment().format('HH:mm:ss'), // Current time in HH:MM:SS without timezone
          date: moment().format('YYYY-MM-DD'), // Current date in 'YYYY-MM-DD' format
          uid: uuidv4(), // Generate new UID for attendance
          location: foundProject.location.id, // Set the location ID
          out_time: null, // Empty out_time initially
          shift: null, // No shift data for now
          attendance_type: null, // No attendance type initially
        },
      });

      return ctx.send({
        check_in: true,
        project: foundProject, // Return the project data
        attendance, // Return the attendance created
      });
    }

    // If no matching project location or employee is not part of the project
    return ctx.send({
      check_in: false,
      message: 'No project location found within range, or employee is not part of the project.',
    });
  },

  // New attendance-checkout function (Check-Out)
  async checkOut(ctx) {
    const { latitude, longitude, check_out, out_time, uid } = ctx.request.body;

    // Validate that check_out is true
    if (!check_out) {
      return ctx.send({
        success: false,
        message: 'check_out must be true.',
      });
    }

    // Fetch employee by UID
    const employee = await strapi.db
      .query('api::employee.employee')
      .findOne({ where: { uid } });

    if (!employee) {
      return ctx.send({
        success: false,
        message: 'Employee not found.',
      });
    }

    // Find the latest attendance record for the employee where out_time is null
    const attendance = await strapi.db.query('api::attendance.attendance').findOne({
      where: {
        employee: employee.id,
        out_time: null,
      },
      orderBy: { createdAt: 'desc' }, // Assuming you have a createdAt field
      populate: {
        location: true, // Populate location to access it
      },
    });

    if (!attendance) {
      return ctx.send({
        success: false,
        message: 'No attendance record found to check out.',
      });
    }

    // Get the location associated with the attendance
    const location = attendance.location;

    if (!location || !location.latitude || !location.longitude || !location.radius) {
      return ctx.send({
        success: false,
        message: 'Location information is incomplete.',
      });
    }

    // Check if the employee is outside the location radius
    const isOutside = !geolib.isPointWithinRadius(
      { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
      { latitude: parseFloat(location.latitude), longitude: parseFloat(location.longitude) },
      location.radius
    );

    if (!isOutside) {
      return ctx.send({
        success: false,
        message: 'Employee is still within the project location. Cannot check out.',
      });
    }

    let finalOutTime = out_time;

    if (!finalOutTime) {
      // If no out_time provided, use the current time
      finalOutTime = moment().format('HH:mm:ss'); // Current time without timezone
    }

    // Update the attendance record with the out_time
    const updatedAttendance = await strapi.entityService.update(
      'api::attendance.attendance',
      attendance.id,
      {
        data: {
          out_time: finalOutTime,
        },
      }
    );

    return ctx.send({
      success: true,
      message: 'Checked out successfully.',
      attendance: updatedAttendance, // Return the updated attendance record
    });
  },
  async totalAttendance(ctx) {
    const { start_date, end_date, employee_id } = ctx.query;

    // Validate date parameters
    if (!start_date || !end_date) {
      return ctx.throw(400, 'start_date and end_date are required as query parameters');
    }
    const start = moment(start_date, 'YYYY-MM-DD', true);
    const end = moment(end_date, 'YYYY-MM-DD', true);
    if (!start.isValid() || !end.isValid() || end.isBefore(start)) {
      return ctx.throw(400, 'Invalid date range');
    }

    // If employee_id is provided, calculate for that employee only
    if (employee_id) {
      const targetEmployeeId = parseInt(employee_id, 10);
      if (isNaN(targetEmployeeId)) {
        return ctx.throw(400, 'Invalid employee_id');
      }

      const records = await strapi.db.query('api::attendance.attendance').findMany({
        where: {
          employee: targetEmployeeId,
          date: {
            $gte: start.format('YYYY-MM-DD'),
            $lte: end.format('YYYY-MM-DD'),
          },
          in_time: { $notNull: true },
          out_time: { $notNull: true },
        },
        select: ['in_time', 'out_time', 'date'],
      });

      // Sum durations from records robustly and consistently
      const totalSeconds = records.reduce((acc, { in_time, out_time, date }) => {
        const inMoment = moment(in_time, 'HH:mm:ss', true);
        const outMoment = moment(out_time, 'HH:mm:ss', true);

        if (!inMoment.isValid() || !outMoment.isValid()) {
          console.warn(`Skipping record for ${date}: invalid time format (in_time: ${in_time}, out_time: ${out_time})`);
          return acc;
        }

        if (outMoment.isBefore(inMoment)) {
          console.warn(`Skipping record for ${date}: out_time (${out_time}) is before in_time (${in_time})`);
          return acc;
        }

        return acc + outMoment.diff(inMoment, 'seconds');
      }, 0);

      const totalHours = Math.floor(totalSeconds / 3600);
      const remainderSec = totalSeconds % 3600;
      const totalMins = Math.floor(remainderSec / 60);
      const totalSecs = remainderSec % 60;

      // Return the summarized attendance for the given employee
      return ctx.send({
        employee: targetEmployeeId,
        from: start.format('YYYY-MM-DD'),
        to: end.format('YYYY-MM-DD'),
        records: records.length,
        total: {
          hours: totalHours,
          minutes: totalMins,
          seconds: totalSecs,
        },
      });
    } else {
      // Calculate for all employees in the date range
      const records = await strapi.db.query('api::attendance.attendance').findMany({
        where: {
          date: {
            $gte: start.format('YYYY-MM-DD'),
            $lte: end.format('YYYY-MM-DD'),
          },
          in_time: { $notNull: true },
          out_time: { $notNull: true },
        },
        populate: { employee: true },
        select: ['in_time', 'out_time', 'date'],
      });

      // Group duration totals and record counts by employee id
      const totals = {};
      const recordCounts = {};

      records.forEach((record) => {
        // Adjust based on how employee is stored
        // If populated, employee will be an object; if not, it might be the id directly.
        const employeeId = record.employee && record.employee.id ? record.employee.id : record.employee;
        if (!employeeId) return;

        const inMoment = moment(record.in_time, 'HH:mm:ss', true);
        const outMoment = moment(record.out_time, 'HH:mm:ss', true);

        if (!inMoment.isValid() || !outMoment.isValid() || outMoment.isBefore(inMoment)) {
          console.warn(`Skipping record for ${record.date} for employee ${employeeId} due to invalid time data.`);
          return;
        }

        const diffSeconds = outMoment.diff(inMoment, 'seconds');
        totals[employeeId] = (totals[employeeId] || 0) + diffSeconds;
        recordCounts[employeeId] = (recordCounts[employeeId] || 0) + 1;
      });

      // Build results array
      const employeeTotals = Object.entries(totals).map(([empId, seconds]) => {
        return {
          employee: parseInt(empId, 10),
          records: recordCounts[empId],
          total: {
            hours: Math.floor(seconds / 3600),
            minutes: Math.floor((seconds % 3600) / 60),
            seconds: seconds % 60,
          },
        };
      });

      return ctx.send({
        from: start.format('YYYY-MM-DD'),
        to: end.format('YYYY-MM-DD'),
        employee_records: employeeTotals,
      });
    }
  }

}));

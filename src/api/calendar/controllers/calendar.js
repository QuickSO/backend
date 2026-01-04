const moment = require("moment");

const EVENT_TYPES = [
  {
    typeId: "tasks",
    apiName: "task",
    dateField: null, // Date filtering will be applied after transformation
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          assignees: {
            id: {
              $in: [employeeId],
            },
          },
        };
      }

      return {};
    },
    transformer: (record) => {
      let results = [];

      let diff = moment(record?.end_date).diff(
        moment(record?.start_date),
        "days"
      );

      for (let i = 0; i <= Math.abs(diff); i++) {
        results.push({
          id: `task-${record?.id}-${i + 1}`,
          type: "Task",
          name: record?.name,
          date: moment(record?.start_date)
            ?.add(i, "days")
            ?.startOf("day")
            ?.format("YYYY-MM-DD"),
          description: record?.description || "",
        });
      }

      return results;
    },
  },
  {
    typeId: "events",
    apiName: "event",
    dateField: "time",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          members: {
            id: {
              $in: [employeeId],
            },
          },
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `event-${record?.id}`,
        type: "Event",
        name: record?.name,
        date: record?.time,
        description: record?.description || "",
      },
    ],
  },
  {
    typeId: "to-dos",
    apiName: "to-do",
    dateField: "time",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          employee: employeeId,
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `to-do-${record?.id}`,
        type: "To Do",
        name: record?.name,
        date: record?.time,
        description: record?.description || "",
      },
    ],
  },
  {
    typeId: "reminders",
    apiName: "reminder",
    dateField: "date",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          employees: employeeId,
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `reminder-${record?.id}`,
        type: "Reminder",
        name: record?.name,
        date: record?.date,
        description: record?.description || "",
      },
    ],
  },
  {
    typeId: "meetings",
    apiName: "meeting",
    dateField: null, // Complex date logic, filter after transformation
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          $or: [
            {
              host: {
                id: employeeId,
              },
            },
            {
              notes_prepared_by: {
                id: employeeId,
              },
            },
            {
              members: {
                id: {
                  $in: [employeeId],
                },
              },
            },
          ],
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `meeting-${record?.id}`,
        type: "Meeting",
        name: record?.name,
        date:
          record?.status === "Rescheduled"
            ? record?.rescheduled_to
            : record?.started_at,
        description: record?.description || "",
      },
    ],
  },
  {
    typeId: "holidays",
    apiName: "holiday",
    dateField: "date",
    transformer: (record) => [
      {
        id: `holiday-${record?.id}`,
        type: "Holiday",
        name: record?.name,
        date: record?.date,
        description: record?.description || "",
      },
    ],
  },

  // -----------------------------------------------------------
  // UPDATED: Vendor Material Requisitions
  // -----------------------------------------------------------
  {
    typeId: "vendor-material-requisitions",
    apiName: "vendor-material-requisition",
    dateField: null, // We'll handle date filtering manually after transformation
    query: ({ employeeId }) => {
      // Optional: If you want to filter by vendors or approved_by
      // If no employee is specified (employeeId == -1), return all
      if (employeeId === -1) return {};

      return {
        $or: [
          // Show if user is in the 'vendors' array
          { vendors: { id: { $in: [employeeId] } } },

          // Show if user is in 'approved_by'
          { approved_by: employeeId },
        ],
      };
    },
    transformer: (record) => {
      const results = [];

      // 1. Add an event for the expected delivery date
      results.push({
        id: `vendor-material-requisition-${record?.id}-expected`,
        type: "Vendor Material Requisition",
        name: `${record?.heading} (Expected Delivery Date)`,
        date: record?.expected_delivery_date,
        description: record?.description || "",
      });

      // 2. Add an event for each payment schedule date
      if (Array.isArray(record?.payment_schedules)) {
        record.payment_schedules.forEach((schedule, index) => {
          results.push({
            id: `${record?.id}`,
            type: "Vendor Payment Schedule",
            name: `${record?.heading} — Payment #${index + 1}`,
            // If schedule.date is already "YYYY-MM-DD", you can use it directly;
            // otherwise, parse/format with moment if needed:
            // date: moment(schedule.date).format("YYYY-MM-DD")
            date: schedule.date,
            description: schedule.description || "",
          });
        });
      }

      return results;
    },
  },
  // -----------------------------------------------------------

  {
    typeId: "vendor-purchase-orders",
    apiName: "vendor-quotation",
    dateField: null, // Date filtering will be applied after transformation
    transformer: (record) => {
      let results = [];

      if (record?.status === "Approved") {
        results.push({
          id: `vendor-purchase-order-${record?.id}`,
          type: "Vendor Purchase Order",
          name: `${record?.vendor_material_requisition?.heading} (Delivery Date)`,
          date: record?.delivery_date,
          description: record?.description || "",
        });

        if (record?.vendor_material_requisition?.payment_schedules) {
          record?.vendor_material_requisition?.payment_schedules?.forEach(
            (paymentSchedule, index) => {
              results?.push({
                id: `payment-schedule-${record?.id}-${index + 1}`,
                type: "Vendor Payment Schedule",
                name: `${
                  record?.vendor_material_requisition?.heading
                } - Payment #${index + 1}`,
                date: paymentSchedule?.scheduled_date
                  ? moment(
                      paymentSchedule?.scheduled_date,
                      "DD-MM-YYYY"
                    )?.format("YYYY-MM-DD")
                  : null,
                description: paymentSchedule?.description || "",
              });
            }
          );
        }
      }

      return results;
    },
  },
  {
    typeId: "daily-reports",
    apiName: "daily-report",
    dateField: "date",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          employee: employeeId,
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `daily-report-${record?.id}`,
        type: "Daily Report",
        name: record?.employee
          ? `${record?.employee.first_name}`
          : record?.uid,
        date: record?.date,
        description: record?.details || "",
      },
    ],
  },
  {
    typeId: "rfis",
    apiName: "rfi",
    dateField: "due_date",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          assigned_to: employeeId,
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `rfi-${record?.id}`,
        employee: record?.employee,
        type: "RFI",
        name: `RFI - ${record?.subject}`,
        date: record?.due_date,
        description: record?.question || "",
      },
    ],
  },
  {
    typeId: "stock-processes",
    apiName: "stock-ledgers-log",
    dateField: "date",
    query: ({ employeeId }) => null,
    transformer: async (record, { strapi }) => {
      const material_item = await strapi.db
        .query("api::material-item.material-item")
        .findOne({
          where: { id: record?.material_item_id },
          populate: ["name"],
        });
  
      return [
        {
          id: `stock-process-${record?.id}`,
          type: "Stock Process",
          name: `Stock Process - ${material_item?.name || "Unknown"}`,
          date: record?.date,
          description: `Quantity: ${record?.quantity}`,
          // material_item_id: record?.material_item_id,
        },
      ];
    },
  },
  {
    typeId: "created-invoices",
    apiName: "created-invoice",
    dateField: "createdAt",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          $or: [
            {
              creator: employeeId,
            },
            {
              employee: employeeId,
            },
            {
              creation_employee: employeeId,
            },
            {
              approved_by: employeeId,
            },
          ],
        };
      }

      return {};
    },
    transformer: (record) => [
      {
        id: `created-invoice-${record?.id}`,
        type: "Created Invoice",
        name: record?.approved_by
          ? `${record?.approved_by.first_name}`
          : record?.no,
        date: record?.createdAt,
        description: record?.description || "",
      },
    ],
  },
  {
    typeId: "received-invoices",
    apiName: "received-invoice",
    dateField: "createdAt",
    query: ({ employeeId }) => {
      if (employeeId !== -1) {
        return {
          $or: [
            {
              creator: employeeId,
            },
            {
              employee: employeeId,
            },
            {
              creation_employee: employeeId,
            },
            {
              approved_by: employeeId,
            },
          ],
        };
      }
      return {};
    },
    transformer: (record) => [
      {
        id: `${record?.id}`,
        employee: record?.employee,
        type: "Received Invoice",
        name: record?.employee
          ? `${record?.employee?.first_name}`
          : record?.uid,
        date: record?.createdAt,
        description: record?.question || "",
      },
    ],
  },
];

module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      const { from, to, employeeId = -1 } = ctx?.query;

      let events = [];
      let fromDate = from ? moment(from).startOf("day") : null;
      let toDate = to ? moment(to).endOf("day") : null;

      for (let eventType of EVENT_TYPES) {
        let query = eventType?.query?.({ employeeId }) || {};
        if (employeeId == -1 && eventType?.query) {
          // If employeeId is -1, we ignore any custom query 
          // (meaning: no user-based filtering)
          query = {};
        }

        // Apply date range filtering in the query if dateField is specified
        if (eventType.dateField && fromDate && toDate) {
          query[eventType.dateField] = {
            $between: [fromDate.toISOString(), toDate.toISOString()],
          };
        }

        let records = await strapi.db
          .query(`api::${eventType.apiName}.${eventType.apiName}`)
          .findMany({
            where: query,
            populate:
              eventType.apiName === "daily-report" ||
              eventType.apiName === "created-invoice" ||
              eventType.apiName === "received-invoice"
                ? ["approved_by", "employee"]
                : [],
          });

          let transformedEvents = [];

          for (const record of records) {
            const transformed = await eventType.transformer(record, { strapi });
            transformedEvents.push(...transformed);
          }

        // For event types without dateField or complex date logic, filter after transformation
        if (
          (!eventType.dateField || eventType.dateField === null) &&
          fromDate &&
          toDate
        ) {
          transformedEvents = transformedEvents.filter((event) => {
            let eventDate = moment(event.date);
            return eventDate.isBetween(fromDate, toDate, null, "[]");
          });
        }

        events = events.concat(transformedEvents);
      }

      ctx.send(events);
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
});

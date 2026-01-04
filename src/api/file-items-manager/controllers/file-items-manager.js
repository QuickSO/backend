const _ = require("lodash");

module.exports = ({ strapi }) => ({
  async getFiles(ctx) {
    try {
      let data = [];
      const { user_uid } = ctx?.request?.body;

      const user = await strapi.db.query(`api::app-user.app-user`).findOne({
        is_deleted: false,
        populate: true,
        where: {
          uid: user_uid,
        },
      });

      const employee = await strapi.db.query(`api::employee.employee`).findOne({
        is_deleted: false,
        populate: true,
        where: {
          uid: user_uid,
        },
      });

      if (user?.is_admin) {
        data = await strapi.db.query(`api::file-item.file-item`).findMany({
          is_deleted: false,
          populate: true,
        });
      } else {
        if (!_.isEmpty(employee)) {
          const employeeId = employee?.id;
          const departmentId = employee?.department?.id;
          const roleId = employee?.role?.id;
          const fileItemRolePermission = await strapi.db
            .query(`api::file-item-role-permission.file-item-role-permission`)
            .findMany({
              is_deleted: false,
              populate: true,
            });
          const fileItemDepartmentPermission = await strapi.db
            .query(
              `api::file-item-department-permission.file-item-department-permission`
            )
            .findMany({
              is_deleted: false,
              populate: true,
            });
          const fileItemEmployeePermission = await strapi.db
            .query(
              `api::file-item-employee-permission.file-item-employee-permission`
            )
            .findMany({
              is_deleted: false,
              populate: true,
            });

          data = fileItems
            ?.map((fileItem) => ({
              ...fileItem,
              allowed_roles: fileItemRolePermission?.filter(
                (item) => item?.file_item?.id === fileItem?.id
              ),
              allowed_departments: fileItemDepartmentPermission?.filter(
                (item) => item?.file_item?.id === fileItem?.id
              ),
              allowed_employees: fileItemEmployeePermission?.filter(
                (item) => item?.file_item?.id === fileItem?.id
              ),
            }))
            ?.filter(
              (fileItem) =>
                fileItem?.allowed_roles?.includes(roleId) ||
                fileItem?.allowed_departments?.includes(departmentId) ||
                fileItem?.allowed_employees?.includes(employeeId)
            );
        }
      }

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
});

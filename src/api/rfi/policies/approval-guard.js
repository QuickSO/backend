'use strict';
const { errors } = require('@strapi/utils');
const { ForbiddenError, UnauthorizedError, BadRequestError } = errors;

module.exports = async (ctx, config, { strapi }) => {
  if (!['PUT','PATCH'].includes(ctx.method)) return true;

  const id = ctx.params?.id;
  if (!id) throw new BadRequestError('Missing RFI id');

  const user = ctx.state?.user;
  if (!user) throw new UnauthorizedError('Login required');

  const isAdmin = !!user.is_admin || user.role?.type === 'admin';
  if (isAdmin) return true;

  // Ensure employee id even if not on ctx.state.user
  let myEmpId = user.employee?.id || user.employee_id || null;
  if (!myEmpId && user.id) {
    const me = await strapi.entityService.findOne('plugin::users-permissions.user', user.id, {
      populate: { employee: { fields: ['id'] } }, fields: ['id']
    });
    myEmpId = me?.employee?.id || null;
  }
  if (!myEmpId) throw new UnauthorizedError('Employee not linked to user');

  const rfi = await strapi.entityService.findOne('api::rfi.rfi', id, {
    populate: { assigned_to: { fields: ['id'] } },
    fields: ['approval_workflow'],
  });
  if (!rfi) throw new BadRequestError('RFI not found');

  const isPending = ['PENDING_STAGE_1','PENDING_STAGE_2'].includes(rfi.approval_workflow);
  const isAssignee = rfi.assigned_to?.id && Number(rfi.assigned_to.id) === Number(myEmpId);

  if (!(isPending && isAssignee)) {
    throw new ForbiddenError('Not allowed to edit at this stage.');
  }
  return true;
};

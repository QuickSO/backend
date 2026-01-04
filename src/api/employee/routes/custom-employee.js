module.exports = {
  routes: [
    {
      method: "GET",
      path: "/employees/approvers",
      handler: "employee.getApprovers",
      config: {
        auth: false,
      },
      
    },
  ],
  
};

const TEMPLATES = {
  "to-do-created": {
    subject: "To Do - {{name}}] To-do created",
    description:
      "<p>A new to-do <strong>{{name}}</strong> has been created.</p>",
    detailsUrl: "/quick-talks/to-dos/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Time: </strong>{{time}}</li>
        <li><strong>Status: </strong>{{status}}</li>
      </ul>
    `,
  },
  "to-do-updated": {
    subject: "To Do - {{name}}] To-do updated",
    description: "<p>The to-do <strong>{{name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-talks/to-dos/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Time: </strong>{{time}}</li>
        <li><strong>Status: </strong>{{status}}</li>
      </ul>
    `,
  },
  reminder: {
    subject: "Reminder - {{name}}] Reminder",
    description:
      "<p>The reminder <strong>{{name}}</strong> is due on {{date}} at {{time}}.</p>",
    detailsUrl: "/quick-talks/reminders/edit/{{id}}",
  },
  "quick-stocks-created": {
    subject: "{{modelNameTitleCase}} - {{heading}}] Item created",
    description:
      "<p>The {{modelNameLowerCase}} <strong>{{heading}}</strong> has been created.</p>",
    detailsUrl: "/quick-stocks/{{modelSlugPlural}}/edit/{{id}}",
  },
  "quick-stocks-updated": {
    subject: "{{modelNameTitleCase}} - {{heading}}] Item updated",
    description:
      "<p>The {{modelNameLowerCase}} <strong>{{heading}}</strong> has been updated.</p>",
    detailsUrl: "/quick-stocks/{{modelSlugPlural}}/edit/{{id}}",
  },
  "reminder-created": {
    subject: "Reminder - {{name}}] Reminder created",
    description:
      "<p>A new reminder <strong>{{name}}</strong> has been created.</p>",
    detailsUrl: "/quick-talks/reminders/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Date: </strong>{{date}}</li>
        <li><strong>Time: </strong>{{time}}</li>
      </ul>
    `,
  },
  "reminder-updated": {
    subject: "Reminder - {{name}}] Reminder updated",
    description:
      "<p>The reminder <strong>{{name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-talks/reminders/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Date: </strong>{{date}}</li>
        <li><strong>Time: </strong>{{time}}</li>
      </ul>
    `,
  },
  "rfi-created": {
    subject: "RFI - {{subject}}] RFI created",
    description:
      "<p>A new RFI <strong>{{subject}}</strong> has been created.</p>",
    detailsUrl: "/quick-projects/rfis/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Title: </strong>{{subject}}</li>
        <li><strong>Project: </strong>{{project.name}}</li>
        <li><strong>Assigned To: </strong>{{assigned_to.first_name}} {{assigned_to.last_name}}</li>
        <li><strong>Discipline: </strong>{{discipline}}</li>
        <li><strong>Due date: </strong>{{due_date}}</li>
      </ul>
    `,
  },
  "rfi-updated": {
    subject: "RFI - {{title}}] RFI updated",
    description: "<p>The RFI <strong>{{title}}</strong> has been updated.</p>",
    detailsUrl: "/quick-projects/rfis/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Title: </strong>{{subject}}</li>
        <li><strong>Project: </strong>{{project.name}}</li>
        <li><strong>Assigned To: </strong>{{assigned_to.first_name}} {{assigned_to.last_name}}</li>
        <li><strong>Discipline: </strong>{{discipline}}</li>
        <li><strong>Due date: </strong>{{due_date}}</li>
      </ul>
    `,
  },
  "daily-report-notsubmitted": {
    subject: "Daily Report - Missing Reports for {{date}} ",
    description:
      "<p>There are employees who have not submitted their daily reports for <strong>{{date}}</strong>.</p>",
    detailsUrl: "/quick-projects/daily-reports",
    content: `
    <p>The following employees have not submitted their daily reports for <strong>{{date}}</strong>:</p>
    <ul>
      <li><strong>Employees: </strong><strong>{{employees}}</strong></li>
    </ul>
    <p>Please follow up with them to ensure the reports are submitted promptly.</p>
  `,
  },

  "daily-report-created": {
    subject:
      "Daily Report - {{employee.first_name}} {{employee.last_name}} Daily Report created at {{date}}",
    description:
      "<p>A new Daily Report created by <strong>{{employee.first_name}}</strong></p>",
    detailsUrl: "/quick-projects/daily-report/edit/{{id}}",
    content: `
      <ul>

        <li><strong>Employee: </strong>{{employee.first_name}} {{employee.last_name}}</li>
        <li><strong>Description: </strong>{{details}}</li>
        <li><strong>Daily Report Date: </strong>{{date}}</li>
        </ul>
    `,
  },
  "daily-report-updated": {
    subject:
      "Daily Report - {{employee.first_name}} {{employee.last_name}} Daily Report updated",
    description:
      "<p>A new Daily Report updated by<strong>{{employee.first_name}} {{employee.last_name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-projects/daily-report/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Employee: </strong>{{employee.first_name}} {{employee.last_name}}</li>
        <li><strong>Description: </strong>{{details}}</li>
        <li><strong> Daily Report Date: </strong>{{date}}</li>
        
      </ul>
    `,
  },
  "vendor-material-requisition-created": {
    subject: "Vendor Material Requisition - {{heading}}] Requisition Created",
    description:
      "<p>A new material requisition <strong>{{heading}}</strong> has been created.</p>",
    detailsUrl: "/quick-stocks/vendor-material-requisitions/edit/{{id}}",
    content: `
        <ul>
          <li><strong>Project: </strong>{{project.name}}</li>
          <li><strong>Expected Delivery Date: </strong>{{expected_delivery_date}}</li>
          <li><strong>Urgency level: </strong>{{urgency_level}}</li>
          <li><strong>Remark: </strong>{{remarks}}</li>
        </ul>
      `,
  },
  "vendor-material-requisition-updated": {
    subject: "Vendor Material Requisition - {{heading}}] Requisition Updated",
    description:
      "<p>The material requisition <strong>{{heading}}</strong> has been updated.</p>",
    detailsUrl: "/quick-stocks/vendor-material-requisitions/edit/{{id}}",
    content: `
        <ul>
          <li><strong>Project: </strong>{{project.name}}</li>
          <li><strong>Urgency level: </strong>{{urgency_level}}</li>
          <li><strong>Estimated amount: </strong>{{estimated_amount}}</li>
          <li><strong>Scheduled Date: </strong>{{scheduled_date}}</li>
          <li><strong>Remark: </strong>{{remarks}}</li>
        </ul>
      `,
  },
  "project-budget-alarm": {
    subject: "Project - {{name}}] Budget alarm",
    description:
      "<p>The sactioned budget of the project <strong>{{name}}</strong> is currently greater than its estimated budget.</p>",
    detailsUrl: "/quick-projects/projects/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Estimated Budget: </strong>{{estimated_budget}}</li>
        <li><strong>Sanctioned Budget: </strong>{{sanctioned_budget}}</li>
      </ul>
    `,
  },
  "stock-update": {
    subject: "Stock Ledgers - {{material_item_name}}] Quantity changed",
    description:
      "<p>The material item <strong>{{material_item_name}}</strong> quantity has been changed.</p>",
    detailsUrl: "/quick-stocks/stock-ledgers/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{material_item_name}}</li>
        <li><strong>Description: </strong>{{material_item_description}}</li>
        <li><strong>Quantity: </strong>{{quantity}}</li>
        <li><strong>Physically Counted Quantity: </strong>{{physically_counted_quantity}}</li>
      </ul>
    `,
  },
  "out-of-stock": {
    subject: "Stock Ledgers - {{material_item_name}}] Out of stock alarm",
    description:
      "<p>The material item <strong>{{material_item_name}}</strong> is out of stock now.</p>",
    detailsUrl: "/quick-stocks/stock-ledgers/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{material_item_name}}</li>
        <li><strong>Description: </strong>{{material_item_description}}</li>
        <li><strong>Quantity: </strong>{{quantity}}</li>
        <li><strong>Physically Counted Quantity: </strong>{{physically_counted_quantity}}</li>
      </ul>
    `,
  },
  "reminder-inform": {
    subject: "Reminder - {{name}}] Reminder Notification",
    description: "<p>You have a reminder today.</p>",
    detailsUrl: "/quick-talks/reminders/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Date: </strong>{{date}}</li>
        <li><strong>Time: </strong>{{time}}</li>
      </ul>
    `,
  },
  "event-inform": {
    subject: "Event - {{name}}] Event Notification",
    description: "<p>You have an event today.</p>",
    detailsUrl: "/quick-talks/events/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Time: </strong>{{time}}</li>
      </ul>
    `,
  },
  "to-do-inform": {
    subject: "To Do - {{name}}] To-do Notification",
    description: "<p>You have a to-do today.</p>",
    detailsUrl: "/quick-talks/to-dos/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Time: </strong>{{time}}</li>
        <li><strong>Status: </strong>{{status}}</li>
      </ul>
    `,
  },
  "meeting-inform": {
    subject: "Meeting - {{name}}] Meeting Notification",
    description: "<p>You have a meeting today.</p>",
    detailsUrl: "/quick-talks/meetings/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Time: </strong>{{meeting_time}}</li>
      </ul>
    `,
  },
  "task-inform": {
    subject: "Task - {{name}}] Task Notification",
    description: "<p>You have a task today.</p>",
    detailsUrl: "/quick-projects/tasks/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Project: </strong>{{project_name}}</li>
        <li><strong>Start Date: </strong>{{start_date}}</li>
        <li><strong>End Date: </strong>{{end_date}}</li>
        <li><strong>Status: </strong>{{status}}</li>
      </ul>
    `,
  },
  "project-delay-alarm": {
    subject: "Project - {{name}}] Delay alarm",
    description:
      "<p>The project <strong>{{name}}</strong> is experiencing delays and is progressing at a slower pace than initially planned.</p>",
    detailsUrl: "/quick-projects/projects/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Start Date: </strong>{{start_date}}</li>
        <li><strong>End Date: </strong>{{end_date}}</li>
        <li><strong>Actual Start Date: </strong>{{actual_start_date}}</li>
        <li><strong>Actual End Date: </strong>{{actual_end_date}}</li>
        <li><strong>Delay Days: </strong>{{delay}}</li>
      </ul>
    `,
  },
  "project-created": {
    subject: "Project - {{name}}] Project created",
    description:
      "<p>A new project <strong>{{name}}</strong> has been created.</p>",
    detailsUrl: "/quick-projects/projects/view/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Start Date: </strong>{{start_date}}</li>
        <li><strong>End Date: </strong>{{end_date}}</li>
      </ul>
    `,
  },
  "task-work-created": {
    subject: "Task Work - {{work_item_name}}] Task work created",
    description:
      "<p>A new task work <strong>{{work_item_name}}</strong> has been created.</p>",
    detailsUrl: "/quick-projects/task-works/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Task Name: </strong>{{task_name}}</li>
        <li><strong>Work Item Name: </strong>{{work_item_name}}</li>
        <li><strong>Work Item Unit: </strong>{{work_item_unit}}</li>
        <li><strong>Description: </strong>{{description}}</li>
      </ul>
    `,
  },
  "task-work-updated": {
    subject: "Task Work - {{work_item_name}}] Task work updated",
    description:
      "<p>The task work <strong>{{work_item_name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-projects/task-works/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Task Name: </strong>{{task_name}}</li>
        <li><strong>Work Item Name: </strong>{{work_item_name}}</li>
        <li><strong>Work Item Unit: </strong>{{work_item_unit}}</li>
        <li><strong>Description: </strong>{{description}}</li>
      </ul>
    `,
  },
  "task-material-created": {
    subject: "Task Material - {{material_name}}] Task material created",
    description:
      "<p>A new task material <strong>{{material_name}}</strong> has been created.</p>",
    detailsUrl: "/quick-projects/task-materials/approver/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Task Name: </strong>{{task_name}}</li>
        <li><strong>Material Name: </strong>{{material_name}}</li>
        <li><strong>Material Unit: </strong>{{material_unit}}</li>
        <li><strong>Material Quantity: </strong>{{material_quantity}}</li>
        <li><strong>Description: </strong>{{description}}</li>
      </ul>
    `,
  },
  "task-material-updated": {
    subject: "Task Material - {{material_name}}] Task material updated",
    description:
      "<p>The task material <strong>{{material_name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-projects/task-materials/approver/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Task Name: </strong>{{task_name}}</li>
        <li><strong>Material Name: </strong>{{material_name}}</li>
        <li><strong>Material Unit: </strong>{{material_unit}}</li>
        <li><strong>Material Quantity: </strong>{{material_quantity}}</li>
        <li><strong>Description: </strong>{{description}}</li>
      </ul>
    `,
  },
  "task-document-created": {
    subject: "Task Document - {{document_name}}] Task document created",
    description:
      "<p>A new task document <strong>{{document_name}}</strong> has been created.</p>",
    detailsUrl: "/quick-projects/task-documents/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Task Name: </strong>{{task_name}}</li>\
        <li><strong>Document Name: </strong>{{document_name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
      </ul>
    `,
  },
  "task-document-updated": {
    subject: "Task Document - {{document_name}}] Task document updated",
    description:
      "<p>The task document <strong>{{document_name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-projects/task-documents/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Task Name: </strong>{{task_name}}</li>
        <li><strong>Document Name: </strong>{{document_name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
      </ul>
    `,
  },
  "task-created": {
    subject: "Task - {{name}}] Task created",
    description:
      "<p>A new task <strong>{{name}}</strong> has been created.</p>",
    detailsUrl: "/quick-projects/tasks/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Start Date: </strong>{{start_date}}</li>
        <li><strong>End Date: </strong>{{end_date}}</li>
      </ul>
    `,
  },
  "task-updated": {
    subject: "Task - {{name}}] Task updated",
    description: "<p>The task <strong>{{name}}</strong> has been updated.</p>",
    detailsUrl: "/quick-projects/tasks/edit/{{id}}",
    content: `
      <ul>
        <li><strong>Name: </strong>{{name}}</li>
        <li><strong>Description: </strong>{{description}}</li>
        <li><strong>Start Date: </strong>{{start_date}}</li>
        <li><strong>End Date: </strong>{{end_date}}</li>
      </ul>
    `,
  },
  "email-draft-created": {
    subject: "Email - {{subject}}] Email draft created",
    description:
      "<p>The email draft <strong>{{subject}}</strong> has been created.</p>",
    detailsUrl: "/quick-talks/app-emails/edit/{{id}}",
    content: "{{content}}",
  },
  "email-draft-updated": {
    subject: "Email - {{subject}}] Email draft updated",
    description:
      "<p>The email draft <strong>{{subject}}</strong> has been updated.</p>",
    detailsUrl: "/quick-talks/app-emails/edit/{{id}}",
    content: "{{content}}",
  },
  "email-sent": {
    subject: "Email - {{subject}}] Email sent",
    description: "<p>The email <strong>{{subject}}</strong> has been sent.</p>",
    detailsUrl: "/quick-talks/app-emails/view/{{id}}",
    content: "{{content}}",
  },
};

module.exports = {
  TEMPLATES,
};

const activeFilter = require('./src/app/employee/mock/activeFilter');
const departmentFilter = require('./src/app/employee/mock/departmentFilter');
const employees = require('./src/app/employee/mock/employees');

module.exports = {
  employee: {
    filters: [
      activeFilter, departmentFilter
    ],
    list: employees
  }
};

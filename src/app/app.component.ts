import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { Employee } from './employee/interfaces/employee';
import { filterByFields, filterByName } from './employee/filters';
import { FilterAction } from './employee/interfaces/filters';
import { SORT_VALUES } from './employee/interfaces/sort.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularSimple';
  employees: Employee[];
  filteredEmployees: Employee[];
  filterFields: FilterAction = {};
  filterName = '';
  sort = SORT_VALUES.DESC;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees.sort((employeeOne, employeeTwo) => {
        const dateOne = new Date(employeeOne.updatedAt);
        const dateTwo = new Date(employeeTwo.updatedAt);

        return dateTwo.valueOf() - dateOne.valueOf();
      });
    });
    this.filteredEmployees = this.employees;
  }

  applyFilters() {
    if (Object.keys(this.filterFields).length === 0 && this.filterName === '') {
      this.filteredEmployees = this.employees;
    }

    this.filteredEmployees = this.employees.filter(
      employee => filterByName(employee, this.filterName) && filterByFields(employee, this.filterFields)
    );
  }

  onFilterFieldsChange(filtersValues: FilterAction) {
    this.filterFields = filtersValues;
    this.applyFilters();
  }

  onSort(sortBy) {
    this.sort = sortBy;
    this.employees = [...this.employees];
    this.filteredEmployees = [...this.filteredEmployees];
    this.employees.reverse();
    this.filteredEmployees.reverse();
  }

  onFilterNameChange(filterName) {
    this.filterName = filterName;

    this.applyFilters();
  }

  onEmployeeChange(employee: Employee) {
    this.employeesService.updateEmployee(employee).subscribe(updatedEmployee => {
      this.employees = this.updateEmployees(updatedEmployee);

      this.applyFilters();
    });
  }

  updateEmployees(updatedEmployee: Employee) {
    const updatedIndex = this.employees.findIndex(employee => employee._id === updatedEmployee._id);
    this.employees.splice(updatedIndex, 1);

    if (this.sort === SORT_VALUES.ASC) {
      return [...this.employees, updatedEmployee];
    } else {
      return [updatedEmployee, ...this.employees];
    }
  }
}

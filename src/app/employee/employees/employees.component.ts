import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { FilterAction } from '../interfaces/filters.interface';
import { SORT_VALUES } from '../interfaces/sort.interface';
import { EmployeesService } from '../../services/employees/employees.service';
import { filterByFields, filterByName } from '../filters';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filterFields: FilterAction = {};
  filterName = '';
  sort = SORT_VALUES.DESC;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees.sort((employeeOne, employeeTwo) => {
        const dateOne = new Date(employeeOne.updatedAt);
        const dateTwo = new Date(employeeTwo.updatedAt);

        return dateTwo.valueOf() - dateOne.valueOf();
      });

      this.filteredEmployees = this.employees;
    });
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

import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { Employee } from './employee-list/employees';
import { FiltersValues } from './filters/filter';
import { filterByFields, filterByName } from './filters/filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'draewilSample';
  employees: Employee[];
  filteredEmployees: Employee[];
  filterFields: FiltersValues = {};
  filterName = '';

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

  onFilterFieldsChange(filtersValues: FiltersValues) {
    this.filterFields = filtersValues;
    this.applyFilters();
  }

  onSort(sortBy) {
    this.employees = [...this.employees];
    this.filteredEmployees = [...this.filteredEmployees];
    this.employees.reverse();
    this.filteredEmployees.reverse();
  }

  onFilterNameChange(filterName) {
    this.filterName = filterName;

    this.applyFilters();
  }
}

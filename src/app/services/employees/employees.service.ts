import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employees } from 'src/app/employee/mock/employees';
import { Employee } from '../../employee/interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(): Observable<Array<Employee>> {
    return of(employees.employees);
  }

  updateEmployee(employee): Observable<Employee> {
    const updatedEmployee = { ...employee, updatedAt: (new Date()).toUTCString() };

    return of(updatedEmployee);
  }
}

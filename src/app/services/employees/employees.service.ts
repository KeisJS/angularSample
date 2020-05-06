import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employees } from 'src/app/mock/employees';
import { Employee } from '../../employee-list/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(): Observable<Array<Employee>> {
    return of(employees.employees);
  }
}

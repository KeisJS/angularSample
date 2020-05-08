import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../employee/interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { EmployeesSever } from './employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<Employee>> {
    return map((employees: EmployeesSever) => employees.employees)(this.http.get<EmployeesSever>('/employee/list'));
  }

  updateEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>('/employee', employee);
  }
}

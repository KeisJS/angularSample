import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee/interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: Employee[] = [];
  parameterList = [
    { name: 'age', title: 'Age' },
    { name: 'gender', title: 'Gender' },
    { name: 'department', title: 'Department'},
    { name: 'position', title: 'Position'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

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
  editEmployeeId = '';
  @Output() updateEmployee = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  activateEditName(employee: Employee) {
    this.editEmployeeId = employee._id;
  }

  onUpdateEmployee(e, employee) {
    e.preventDefault();
    this.editEmployeeId = '';

    const newName = e.target.innerText.trim();

    if (newName !== `${employee.name.first} ${employee.name.last}`) {
      const [first, ...lastAll] = newName.split(' ');
      const last = lastAll.join(' ').trim();

      this.updateEmployee.emit({ ...employee, name: { first, last }});
    }
  }

  disableEnter(e) {
    e.preventDefault();
  }
}

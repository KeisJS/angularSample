import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterList } from 'src/app/employee/interfaces/filters';
import { FilterListAction } from '../filters/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterData: FilterList;
  @Output() filterAction = new EventEmitter<FilterListAction>();

  codeActiveFilter = '';

  constructor() { }

  ngOnInit(): void {
  }

  click(filterValue) {
    this.codeActiveFilter = filterValue;
    this.filterAction.emit({
      code: this.filterData.code,
      value: filterValue
    });
  }
}

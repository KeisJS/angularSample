import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterData, FilterActionPayload } from '../filters/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterData: FilterData;
  @Output() filterAction = new EventEmitter<FilterActionPayload>();

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

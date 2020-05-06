import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SORT_VALUES } from './sort';

@Component({
  selector: 'app-sort-by-date',
  templateUrl: './sort-by-date.component.html',
  styleUrls: ['./sort-by-date.component.scss']
})
export class SortByDateComponent implements OnInit {
  sortBy: SORT_VALUES = SORT_VALUES.DESC;
  sortValues = SORT_VALUES;
  @Output() sortAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(sortBy: SORT_VALUES) {
    if (sortBy !== this.sortBy) {
      this.sortBy = sortBy;
      this.sortAction.emit(this.sortBy);
    }
  }
}

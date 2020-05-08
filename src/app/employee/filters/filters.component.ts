import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltersService } from '../../services/filters/filters.service';
import { FilterListAction } from './filter.interface';
import { FilterList, FilterAction } from 'src/app/employee/interfaces/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: FilterList[] = [];
  filtersValue: FilterAction = {};
  @Output() activeFilters = new EventEmitter<FilterAction>();

  constructor(private filtersService: FiltersService) { }

  getFilters() {
    this.filtersService.getFilters()
      .subscribe(filterLists => this.filters = filterLists);
  }

  onFilterAction({ code, value }: FilterListAction) {
    if (value !== '') {
      this.filtersValue[code] = value;
    } else {
      delete this.filtersValue[code];
    }

    this.activeFilters.emit(this.filtersValue);
  }

  ngOnInit(): void {
    this.getFilters();
  }
}

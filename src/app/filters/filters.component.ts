import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { FilterData, FiltersValues, FilterActionPayload } from './filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: FilterData[];
  filtersValue: FiltersValues = {};
  @Output() activeFilters = new EventEmitter();

  constructor(private filtersService: FiltersService) { }

  getFilters() {
    const filters = [];

    this.filtersService.getFilters()
      .subscribe({
        next: filterData => filters.push(filterData),
        complete: () => this.filters = filters
      });
  }

  onFilterAction({ code, value }: FilterActionPayload) {
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

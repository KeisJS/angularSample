import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activeFilter } from 'src/app/employee/mock/activeFilter';
import { departmentFilter } from 'src/app/employee/mock/departmentFilter';
import { FiltersServer } from './filters.interface';
import { FilterListValue, FilterList } from 'src/app/employee/interfaces/filters';

function isFilterValue(f: any): f is FilterListValue {
  const props = Object.keys(f);

  return props.indexOf('name') !== -1 && props.indexOf('value') !== -1;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  private adaptSeverData(data: FiltersServer): FilterList {
    let resultValues = [];
    const { code, name, values } = data;

    if (isFilterValue(values[0])) {
      resultValues = [...values];
    } else {
      for (const filterType of values) {
        resultValues.push({
          name: filterType,
          value: filterType
        });
      }
    }

    return { code, name, values: resultValues };
  }

  getFilters(): Observable<FilterList> {
    return of(this.adaptSeverData(activeFilter), this.adaptSeverData(departmentFilter));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activeFilter } from 'src/app/mock/activeFilter';
import { departmentFilter } from 'src/app/mock/departmentFilter';
import { FiltersServer } from './filters';
import { Filter, FilterData, FiltersValues } from 'src/app/filters/filter';
import { Employee } from '../../employee-list/employees';

function isFilterValue(f: any): f is Filter {
  const props = Object.keys(f);

  return props.indexOf('name') !== -1 && props.indexOf('value') !== -1;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  private adaptSeverData(data: FiltersServer): FilterData {
    let resultValues = [];
    const { code, title, values } = data;

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

    return { code, title, values: resultValues };
  }

  getFilters(): Observable<FilterData> {
    return of(this.adaptSeverData(activeFilter), this.adaptSeverData(departmentFilter));
  }
}

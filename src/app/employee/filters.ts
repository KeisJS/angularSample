import { Employee } from './interfaces/employee.interface';
import { FilterAction } from 'src/app/employee/interfaces/filters.interface';

function filterByName(employee: Employee , nameString: string): boolean {
  if (nameString === '') {
    return true;
  }

  if (employee.name.first.toLocaleLowerCase().indexOf(nameString) === 0 ||
      employee.name.last.toLocaleLowerCase().indexOf(nameString) === 0) {
    return true;
  }

  return false;
}

function filterByFields(employee: Employee, filterFields: FilterAction): boolean {
  if (Object.keys(filterFields).length === 0) {
    return true;
  }

  for (const filterCode in filterFields) {
    if (employee[filterCode] !== filterFields[filterCode]) {
      return false;
    }
  }

  return true;
}

export { filterByName, filterByFields };


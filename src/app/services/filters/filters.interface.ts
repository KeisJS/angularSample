import { FilterListValue } from 'src/app/employee/interfaces/filters';

interface FiltersServer {
  values: Array<string | FilterListValue>;
  name: string;
  code: string;
}

export { FiltersServer };

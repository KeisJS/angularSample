import { Filter } from 'src/app/filters/filter';

interface FiltersServer {
  values: Array<string | Filter>;
  title: string;
  code: string;
}

export { FiltersServer };

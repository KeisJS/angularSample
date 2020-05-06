interface Filter {
  name: string;
  value: string;
}

interface FilterData {
  title: string;
  code: string;
  values: Filter[];
}

interface FiltersValues {
  [filterCode: string]: string;
}

interface FilterActionPayload {
  code: string;
  value: string;
}

export { FilterData, Filter, FiltersValues, FilterActionPayload };



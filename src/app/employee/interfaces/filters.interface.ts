interface FilterListValue {
  name: string;
  value: string;
}

interface FilterList {
  name: string;
  code: string;
  values: FilterListValue[];
}

interface FilterAction {
  [filterCode: string]: string;
}

export { FilterListValue, FilterList, FilterAction };

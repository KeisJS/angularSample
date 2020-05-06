interface Employee {
  _id: string;
  age: number;
  isActive: boolean;
  picture: string;
  gender: string;
  name: {
    first: string;
    last: string
  };
  department: string;
  position: string;
  updatedAt: string;
}

export { Employee };

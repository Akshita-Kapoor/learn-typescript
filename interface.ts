export interface User {
  name: string;
  age: number;
  email?: string; // optional
  id: number;
}

let user: User = { name: "ABC", age: 21, id: 101 };

// object destructuring
let { name, age, id }: User = { name: "ABC", age: 21, id: 101 };

interface EmployeeDetails extends User {
  salary: number;
}

let employee: EmployeeDetails = { name: "ABC", age: 21, id: 101, salary: 1000 };

export interface Login {
  login(): User;
}

// array destucturing
let [user1, user2, ...restUsers]: User[] = [
  {
    name: "John",
    age: 25,
    id: 102,
  },
  {
    name: "Kevin",
    age: 27,
    id: 103,
  },
  {
    name: "George",
    age: 23,
    id: 104,
  },
  {
    name: "Michael",
    age: 28,
    id: 105,
  },
];

import { Login, User } from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login{
    #id: number; // private property
    protected name: string;
    address: Address;

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.name = name;
        this.#id = id;
    }

    getNameWithAddress(): string {
        return `${this.name} stays in ${this.address}`;
    }

    static getEmployeeCount (): number {
        return 50;
    }

    // getters and setters

    get empId(): number {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }

    login(): User {
        return { name: "ABC", age: 21, id: 101 };
    }
}

let emp = new Employee(1, 'John', {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "190556"
});

console.log(emp);
console.log(emp.getNameWithAddress());
console.log((Employee.getEmployeeCount()));

// calling getters and setters
emp.empId = 100;
console.log('empId', emp.empId);


class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
       super(id, name, address);
    }
}
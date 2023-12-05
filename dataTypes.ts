let fName: string;

fName = "testUser";

let newName = fName.toUpperCase();

console.log('newName:', newName);

let age: number;

age = 24;

let isValid: boolean = true;

let arr: string[];
arr = ['abc', 'xyz'];

//generic
let numList: Array<number>;

numList = [1,4,6,2];

let result = numList.filter((element) => element > 2);
console.log('result:', result);

let search = arr.find((el) => el ==='abc');
console.log('search:', search);

let sum = numList.reduce((acc, num) => acc + num);

console.log('sum:', sum);

const enum Color {
    Red,
    Blue,
    Green
}

let c: Color = Color.Green;

//tuple
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return[num2, num1];
}

swapNumbs = swapNumbers(10,20);

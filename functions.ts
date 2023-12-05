// named function
function add(a: number, b: number): number {
    return a + b;
}

// arrow function
const subtract = (num1: number, num2: number): number => num1 - num2;

const mult = function(num1: number, num2: number): number {
   return num1 * num2;
}

// optional parameters
function optionalSum(num1: number, num2: number, num3?: number): number {
    return num3? num1 + num2 + num3 : num1 + num2;
}

// required parameters
function requiredSum(num1: number, num2: number, num3 = 10): number {
    return num1 - num2 + num3;
}

// rest parameters

// optional parameters
function restParams(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a,b) => a + b, 0);
}

// generic function

function getItems<Type>(items: Type[]): Type[] {
    return Array<Type>().concat(items);
}

let concatResult = getItems<number>([4,2,4,7]);

let concatString = getItems<string>(['abc', 'pqrs']);

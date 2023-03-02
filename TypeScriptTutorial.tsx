// // Type Script tutorial

// // Param type
// // 1. boolean
// // 2. number
// // 3. string
// // let first_name: string = "Khevin";
// let is_active: boolean = false;
// let age = 25;

// // Special Types
// // 1. any  allows all types to be used
// let logged_in: any = false;
// logged_in = "Khevin"; // no error as it can be "any" type

// // 2. unknown is a similar, but safer alternative to any.
// let gender: unknown = 1;
// gender = "Male";

// // Array
// const list: string[] = [];
// list.push("first_name"); // no error
// // list.push(1); // error type number not defined

// // readonly keyword can prevent arrays from being changed.
// const names: readonly string[] = ["Khevin"];
// // names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// // define our tuple
// let ourTuple: [number, boolean, string];

// // initialized incorrectly which throws an error
// // ourTuple = [false, 'Coding God was mistaken', 5];

// const graph: [name: string, y: number] = ["khevin", 41.3];

// // Object Type
// const info: {
//   fullname: string;
//   gender: string;
//   age: number;
//   married: boolean;
// } = {
//   fullname: "Khevin Khorng",
//   gender: "male",
//   age: 30,
//   married: false,
// };

// // Optional property
// const userInfo: {
//   fullname: string;
//   gender: string;
//   age: number;
//   married?: boolean;
// } = {
//   fullname: "Khevin Khorng",
//   gender: "male",
//   age: 30,
// };

// // Index Signatures
// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// // nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// // Enum
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// console.log(StatusCodes.NotFound);

// // Using the | we are saying our parameter is a string or number:
// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code}.`);
// }
// printStatusCode(404);
// printStatusCode("404");

// // Function Return Type
// function calculate(): number {
//   const count = 5 + 10;
//   return count;
// }

// // Void no return type
// function min(): void {
//   console.log("no return type");
// }

// // Parameters
// function multiply(a: number, b: number) {
//   return a * b;
// }

// // Optional Parameters
// function add(a: number, b: number, c?: number) {
//   return a + b + (c || 0);
// }

// // Default Parameters
// function pow(value: number, exponent: number = 10) {
//   return value ** exponent;
// }

// // Named Parameters
// function cusInfo({ min, max }: { min: number; max: number }) {
//   return min / max;
// }

// // Partial changes all the properties in an object to be optional.
// interface Point {
//   x: number;
//   y: number;
// }

// let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
// pointPart.x = 10;

// // Required changes all the properties in an object to be required.
// interface Car {
//   make: string;
//   model: string;
//   mileage?: number;
// }

// let myCar: Required<Car> = {
//   make: "Ford",
//   model: "Focus",
//   mileage: 12000, // `Required` forces mileage to be defined
// };

// // Record is a shortcut to defining an object type with a specific key type and value type.
// // const nameAgeMap: Record<string, number> = {
// //   'Alice': 21,
// //   'Bob': 25
// // };

const hello = (name: String) => {
  return `hello ${name}`;
};

let isDone: boolean = true;
isDone = false;

let age: number = 20;
age = 21;

let binaryNumber: number = 0b1111;

let firstName: string = "roy";
let lastName: string = "he";

let u: undefined = undefined;
let n: null = null;

let anything: any = "123";

let numberOrString: number | string = "123";
numberOrString = 123;

let arr: number[] = [1, 2, 3, 4];
arr.push(5);

let arr2: string[] = ["1", "2", "3", "4"];
arr2.push("5");

function test() {
  console.log(arguments[0]);
}

let user: [string, number] = ["abc", 123];
console.log(user[0]);

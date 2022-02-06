function echo<T>(arg: T): T {
  return arg;
}

const str: string = "str";
const res: string = echo(str);

const num: number = 123;
const res2: number = echo(num);

const check: boolean = true;
const res3: boolean = echo(check);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const before: [string, number] = ["str", 1];
const after: [number, string] = swap(before);

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrTest1 = echoWithArr([1, 2, 3]);
const arrTest2 = echoWithArr(["1", "2", "3"]);

interface WithLength {
  length: number;
}

function echoWithLength<T extends WithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

echoWithLength("str");
echoWithLength({ length: 1 });
echoWithLength([1, 2, 3]);

class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);

const item1 = queue.pop();
const item2 = queue.pop();

const queue2 = new Queue<string>();
queue2.push("1");
queue2.push("2");

interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = {
  key: 1,
  value: "123",
};
let kp2: KeyPair<string, number> = {
  key: "1",
  value: 123,
};

let arr11: number[] = [1, 2, 3];
let arr22: Array<number> = [1, 2, 3];

interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b;
}
const plusCopy: IPlus<number> = plus;
const plusCopy2: IPlus<string> = connect;

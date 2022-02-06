function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}

let result: number = add(1, 2, 3);

const add2: (x: number, y: number, z: number) => number = add;

function add(x, y, z) {
    if (typeof z === "number") {
        return x + y + z;
    }
    else {
        return x + y;
    }
}
var result = add(1, 2, 3);
console.log(result);

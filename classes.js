var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal("lily");
console.log(snake.run());

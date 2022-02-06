// public get & set
// private no access from outside of class
// protected only access from child class
// readyonly
// static properties / method

class Animal {
  static categories: string[] = ["mammal", "bird"];
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  static isAnimal(a) {
    return a instanceof Animal;
  }

  run() {
    return `${this.name} is running`;
  }
}

class Duck extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }

  run() {
    return "Meow: " + super.run();
  }
}

const snake: Animal = new Animal("Lily");
const duck: Duck = new Duck("Andy");
const cat: Cat = new Cat("Mmm");

Animal.categories;
Animal.isAnimal(cat);

console.log(`${cat.run()}`);

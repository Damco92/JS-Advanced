class Animal {
  constructor(name, type, age, size, isEaten) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }
  get type() {
    return this.type;
  }
  set type(typeInput) {
    if (
      typeInput === 'carnivore' ||
      typeInput === 'herbivore' ||
      typeInput === 'omnivore'
    ) {
      this.type = typeInput;
    } else {
      throw new Error('can not set this type of animal');
    }
  }

  eat(food) {
    if (food instanceof Animal) {
      if (this.type === 'herbivore') {
        console.log(
          `The animal ${this.name} is herbivore and does not eat meat`
        );
      } else if (
        this.type === 'carnivore' ||
        (this.type === 'omnivore' && food.size * 2 < this.size)
      ) {
        console.log(`The animal ${this.name} is eating the ${food.name}`);
        this.isEaten = true;
      }
    }
  }
}

const myLion = new Animal('King', 'carnivore', 23, 10);
const myRabbit = new Animal('Dusko', 'herbivore', 2);

myLion.type;

// 3.7 An animal shelter holds only dogs and cats, and operates on a strictly "first in, first
// out" basis. People must adopt either the "oldest" (based on arrival time) of all animals
// at the shelter, or they can select whether they would prefer a dog or a cat (and will
// receive the oldest animal of that type). They cannot select which specific animal they
// would like. Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog and dequeueCat. You may
// use the built-in LinkedList data structure.

class AnimalShelter {
  constructor() {
    this.storage = [];
  }

  enqueue(name, type) {
    const animal = {};
    animal[type] = name;
    this.storage.push(animal);
  }

  dequeueAny() {
    if (this.storage.length === 0) {
      return null;
    }
    const result = this.storage.shift();
    if (result.dog) {
      return result.dog
    } else if (result.cat) {
      return result.cat;
    }
  }

  dequeueDog() {
    if (this.storage.length === 0) {
      return null;
    }
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].dog) {
        const result = this.storage[i];
        delete this.storage[i];
        return result.dog;
      }
    }
    return null;
  }

  dequeueCat() {
    if (this.storage.length === 0) {
      return null;
    }
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].cat) {
        const result = this.storage[i];
        delete this.storage[i];
        return result.cat;
      }
    }
    return null;
  }

  size() {
    return this.storage.length;
  }
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue('bob', 'cat');
animalShelter.enqueue('max', 'dog');
animalShelter.enqueue('sam', 'dog');
animalShelter.dequeueAny(); // bob
animalShelter.dequeueCat(); // null
animalShelter.dequeueDog(); // max
console.log(animalShelter); // sam
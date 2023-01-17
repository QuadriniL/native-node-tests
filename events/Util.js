import util from 'util';
import { EventEmitter } from 'events';

// event emitter atraves do util inherits
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    this.emit('bark', this.name);
  }
}

const dog1 = new Dog('Floquinho');


util.inherits(Dog, EventEmitter);

dog1.on('bark', (name) => {
  console.log(`${name} está latindo`);
})

dog1.bark();

// Utilizando o EventEmitter por extensão

class Cat extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
    this.on('meow', (name) => {
      console.log(`${name} está miando`);
    })
  }

  meow() {
    this.emit('meow', this.name);
  }
}

const cat1 = new Cat('Mingau');

cat1.meow();

// Error test

class Bird {
  constructor(name) {
    this.name = name;
  }

  tweet() {

  }
}

const bird1 = new Bird('Piu Piu');

try {
  bird1.on('tweet', (name) => {
    console.log(`${name} está cantando`);
  })
} catch (error) {
  console.log('O ' + bird1.name + ' não pode cantar, pois ele não tem relação com o EventEmitter');
}


import { EventEmitter } from 'events';

let counter = 0;

const emmiter = new EventEmitter();

// O evento ainda não está sendo observado portanto não será executado
emmiter.emit('increment', 1);
console.log('Antes de observar o evento\n ....................');
console.log('tentou incrementar o contador em 1, mas não foi possível pois o evento ainda não está sendo observado');

setInterval(() => {
  emmiter.emit('increment', counter);
  counter++;
}, 1000);

emmiter.on('increment', (counter) => {
  console.log(counter);
})
console.log('Evento observado');

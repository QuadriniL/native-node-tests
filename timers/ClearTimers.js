let counter = 0

const timer = setInterval(() => {
  console.log('Temporizando...' + counter++);
}, 100);

setTimeout(() => {
  clearTimeout(timer);
  console.log('temporizador deletado');
}, 3000)


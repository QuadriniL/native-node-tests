import event from 'events';

const emmiter = new event.EventEmitter();

// recursive event
emmiter.on('sendMessage', async (message, user) => {
  console.log(`${user}: ${message}`);
  console.log('enviando mensagem...');
  await setTimeout(() => {
    emmiter.emit('sendMessage', 'teste', 'teste');
  }, 2000);

})

emmiter.emit('sendMessage', 'Hello World', 'Lucas');


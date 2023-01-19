import vm from 'vm';

const sandbox = {
  log: console.log,
  process: {
    env: {
      NODE_ENV: 'test',
    }
  },
}

const code = `
  log('Hello World');
  log(process);
`;

vm.runInNewContext(code, sandbox);

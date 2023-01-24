import { Console } from 'console';

const myConsole = new Console(process.stdout, process.stderr);

myConsole.log('Hello world!');
// Prints: Hello world!, to stdout


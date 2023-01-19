import vm from 'vm';
import fs from 'fs';

const sandbox = {
  sendMessage: console.log,
  filename: 'sandboxs\shared\Script.js',
}

const code = fs.readFileSync('./shared/Script.js', 'utf8');

const script = new vm.Script(code);

script.runInNewContext(sandbox);

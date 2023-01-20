import { InputChecker } from 'input_checker';

const ic = new InputChecker('Lucas', 'personalModule');

ic.on('write', function (data) {
  this.writeStream.write(ic.name + ':' + data, 'utf8');
})

ic.on('echo', function (data) {
  process.stdout.write(ic.name + ' escreveu ' + data);
})

ic.on('end', function () {
  process.exit();
})

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
  const input = process.stdin.read();
  if (input !== null) {
    ic.check(input);
  }
})



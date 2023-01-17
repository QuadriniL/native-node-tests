"use strict";
import util from 'util';
import { EventEmitter } from 'events';
import fs from 'fs';

function InputChecker(name, file) {
  this.name = name;
  this.writeStream = fs.createWriteStream('../__tmp__/' + file + '.txt', {
    'flags': 'a',
    'encoding': 'utf8',
    'mode': 0o666
  })
}

util.inherits(InputChecker, EventEmitter);

InputChecker.prototype.check = function check(input) {
  var command = input.trim().substr(0, 3);

  if (command === 'wr:') {
    this.emit('write', input.substr(3, input.length));
  } else if (command === 'en:') {
    this.emit('end');
  } else {
    this.emit('echo', input);
  }
}

let ic = new InputChecker('Shelley', 'output');

// metodo addListener é equivalente ao metodo on

ic.addListener('write', function (data) {
  this.writeStream.write(data, 'utf8');
})

ic.on('echo', function (data) {
  process.stdout.write(ic.name + ' wrote ' + data);
})

ic.on('end', function () {
  process.exit();
})

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
  var input = process.stdin.read();
  if (input !== null) {
    ic.check(input);
  }
});

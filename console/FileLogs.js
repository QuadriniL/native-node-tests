
import fs from 'fs';
import { Console } from 'console';
import { createHash } from 'crypto';

const hash = createHash('sha256');
hash.update(Math.random().toString() + Date.now().toString());
const digested = hash.digest('hex');

const output = fs.createWriteStream(`./register_logs/info/${
    digested
}.log`);
const errorOutput = fs.createWriteStream(
    './register_logs/errors/'
    + digested
    + 'err.log'
);

const logger = new Console(output, errorOutput);

logger.error('Hello World')
logger.log('Hello World');
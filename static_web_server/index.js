import http from 'http';
import fs from 'fs';
import path from 'path';

const base = '/public';

http.createServer((req, res) => {
  const __dirname = path.resolve();
  let pathname = path.normalize(__dirname + base + req.url);
  if (req.url === '/')
    pathname = path.normalize(__dirname + base + '/index.html');

  const file = fs.createReadStream(pathname);

  fs.stat(pathname, (err) => {
    if (err) {
      res.writeHead(404);
      res.write('file is not found.');
      res.end();
    } else {
      file.on('open', () => {
        res.writeHead(200);
        file.pipe(res);
      });
      file.on('error', (err) => {
        res.writeHead(403);
        res.write('missing file or not permissions to access.');
        console.log(err);
      })
    }
  })

}).listen(3000);

console.log('Servidor rodando em http://localhost:3000');

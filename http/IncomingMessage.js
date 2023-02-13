import http from 'http';
import querystring from 'querystring';

const server = http.createServer().listen(8124);

server.on('request', (req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const post = querystring.parse(body);
      console.log(post);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello Sender!\n');
    });
  }
})

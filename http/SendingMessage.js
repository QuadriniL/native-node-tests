import http from 'http';
import querystring from 'querystring';

var postData = querystring.stringify({
  'msg' : 'Hello World!'
})

var options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  },
  agent: false
}

var req = http.request(options, (res) => {
  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    console.log(`${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data in response');
  });
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
})

req.write(postData);
req.end();

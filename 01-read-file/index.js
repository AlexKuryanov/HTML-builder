const fs = require('fs');
const path = require('node:path');

const url = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(url, 'utf8');
readableStream.on('data', function (chunk) {
  console.log(chunk);
});

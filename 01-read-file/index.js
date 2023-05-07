const path = require('path');
const fs = require('fs');
const {stdout} = require('process');
const input = fs.createReadStream(path.resolve('01-read-file','text.txt'), 'utf-8');
input.on('data', data => stdout.write(data));

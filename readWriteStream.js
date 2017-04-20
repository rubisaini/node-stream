import fs from 'fs';

let readStream = fs.createReadStream('./input.txt');
let writeStream = fs.createWriteStream('./output.txt');

readStream.setEncoding('UTF8');

readStream.on('data', (chunk) => {
    writeStream.write(chunk, 'UTF8');
});

readStream.on('end', () => {
   writeStream.end();
});



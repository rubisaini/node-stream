import fs from 'fs';

let readStream = fs.createReadStream('./input.txt');
let writeStream = fs.createWriteStream('./output.txt');

readStream.setEncoding('UTF8');
readStream.pipe(writeStream);

// Trigger end event of read stream
readStream.on('end', () => {
    console.log('Reading operation done');
});


// Trigger finish event after writing operation
writeStream.on('finish', () => {
    console.log('Write operation done');
});

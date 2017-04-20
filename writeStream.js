import fs from 'fs';

const data  = 'hey I have writing content successfully';
let writeStream = fs.createWriteStream('./output.txt');

// Write data using write stream
writeStream.write(data, 'UTF8');

// Call end event of stream
writeStream.end();

// Trigger finish event after writing operation
writeStream.on('finish', () => {
    console.log('Write operation done');
});

// Trigger error event if some thing went wrong
writeStream.on('error', (error) => {
    console.log(error);
});
import fs from 'fs';

// Create a readable stream object

 let readStream = fs.createReadStream('./input1.txt');

 // Set the encoding code
 readStream.setEncoding('UTF8');

 //Register events
 readStream.on('data', (chunk) => {
 console.log(chunk);
 });

 readStream.on('end', () => {
 console.log('End reading file');
 });

 readStream.on('error', (error) => {
 console.log(error.stack);
 });
// The read write stream allows you to stream chunk of data at once, which makes it more efficient to read and write data

const fs =  require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./exampleFile/example3.txt');

const writeGzip = fs.createWriteStream('./exampleFile/example4.gz');
// readStream.on('data', (chunk) =>{
//  console.log(chunk);
    // writeStream.write(chunk);
// });

// we can pipe the above code using the pipe method to get data from a source stream and to the destination stream
readStream.pipe(gzip).pipe(writeGzip);


// what are some of the use case of using chunk stream to read and write data
// can we use it in messaging or for financial data transfer?
// the stream write and read file system allows us to use a small buffer and read or write data in chunk sizes compared to the normal read
// and write files which read the whole data at once hence using more buffer per time.

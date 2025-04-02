const fs = require('fs');

// Synchronous call
// fs.writeFileSync('./test.txt', "Hey There");

// Asynchronous call
// fs.writeFile('./test.txt', "Hello World", (err) => {
//     console.log(err);
// })

// Synchronous call
// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

// Asynchronous call
// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     console.log(err ? err : result);
// });


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());

// fs.cpSync('./test.txt', './copy.txt');
// fs.unlinkSync('./copy.txt');

// console.log(fs.statSync('test.txt'));

// fs.mkdirSync('my-docs');
// fs.mkdirSync('my-docs/a/b', {recursive: true});

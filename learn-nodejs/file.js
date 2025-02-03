const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);
// Sync write
fs.writeFileSync('./test.txt', 'Hey there!!');


// Async write
fs.writeFile("./test1.txt", "Heyy Asynchronous", (err) => {});

// Sync read
const result = fs.readFileSync('./contacts.txt', 'utf-8');
console.log(result);

// Async read
fs.readFile('./contacts.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Result", res);
    }
});

// Sync append
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.cpSync("./test.txt", "./copy.txt");
fs.unlinkSync("./copy.txt");
console.log(fs.statSync('./test.txt'));
console.log(fs.statSync('./test.txt').isFile());

fs.mkdirSync("my-docs/a/b", {recursive: true});
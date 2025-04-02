const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log("New req received ", req.headers);
    // res.end("Hello from Server");
    const log = `${Date.now()} : ${req.url} : New req received\n`;
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("HomePage");
                break;

            case '/about':
                res.end("AboutPage");
                break;

            default:
                res.end("404: Page Not Found");
        }
    });
})

myServer.listen(3000, () => {
    console.log("Server started a Port: 3000");
})
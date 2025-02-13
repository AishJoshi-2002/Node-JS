const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'contentType': 'text/html'});
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple UI</title>
        </head>
        <body>
            <h1>Welcome to My Server</h1>
            <button onclick="alertMessage()">Click Me</button>
            <h3>Program to reverse a string</h3>
            <pre>
                str = 'abc';
                function revStr(iniStr) {
                    revStr = '';
                    for(i=iniStr.length; i>=0; i--) {
                        revStr = revStr + iniStr.charAt(i);
                    }
                return revStr;
                }
                console.log(revStr(str));
            </pre>

            <script>
                function alertMessage() {
                    alert('Button Clicked!');
                }
            </script>
        </body>
        </html>
    `;
    res.end(html);
})

require('dotenv').config();

server.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
})


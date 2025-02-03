// Why we need Error Handling?
// What are the events for Error Handling?

let app = require('express')() // for enabling function like get, post etc.
let http = require('http').Server(app)
let path = require('path')

let io = require('socket.io')(http) // passing the server

app.get('/', function(req, res){
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'errorHandling.html'
    res.sendFile(fileName, options);
})

// setting up server on backend side
io.on('connection', function(socket){
    console.log('io user connected')

    socket.on('disconnect', function(){
        console.log('io user disconnected')
    })
})

http.listen(3000, function(){
    console.log('Server listening on port 3000')
})

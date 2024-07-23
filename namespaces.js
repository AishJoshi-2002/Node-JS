// What is Namespaces in Socket.IO?
// used to create multiple chats, path or endpoint for creating different connections

let app = require('express')() // for enabling function like get, post etc.
let http = require('http').Server(app)
let path = require('path')

let io = require('socket.io')(http) // passing the server

app.get('/', function(req, res){
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'namespaces.html'
    res.sendFile(fileName, options);
})

// '/' => io takes, by default connection(namespace)

var cnsp = io.of('/custom-namespace')

cnsp.on('connection', function(socket){
    console.log('io user connected')

    // io.emit('testEvent', {message: 'Test event created'})
    cnsp.emit('testEvent', {message: 'Test event created'})
    socket.on('disconnect', function(){
        console.log('io user disconnected')
    })
})

http.listen(3000, function(){
    console.log('Server listening on port 3000')
})

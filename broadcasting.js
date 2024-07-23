// Broadcasting
// Users can see how many users are connected
// If user connect, then we will show a welcome message to user, and other users can see how many user connected.

let app = require('express')() // for enabling function like get, post etc.
let http = require('http').Server(app)
let path = require('path')

let io = require('socket.io')(http) // passing the server

app.get('/', function(req, res){
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'broadcasting.html'
    res.sendFile(fileName, options);
})

var users = 0

// setting up server on backend side
io.on('connection', function(socket){
    console.log('io user connected')
    users++
    socket.emit('newUserConnected', {message: 'Welcome to Socket.IO'})
    // io.sockets.emit('broadcast', {message: `users connected: ${users}`})
    socket.broadcast.emit('newUserConnected', {message: `users connected: ${users}`})
   
    socket.on('disconnect', function(){
        console.log('io user disconnected')
        users--
        io.sockets.emit('broadcast', {message: `users connected: ${users}`})
    })
})

http.listen(3000, function(){
    console.log('Server listening on port 3000')
})

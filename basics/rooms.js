// What is Rooms?
// under each namespaces we can create or define multiple channels, and can join or leave them with the help of sockets.

// channel = room

// Why we use Rooms?
// Whatsapp
    // one to one chat
    // group chat,  limit => (less than 100 users)

// Ex1:- Create a Simple Room
// Ex2:- How to Create Multiple Rooms with their limit?

let app = require('express')() // for enabling function like get, post etc.
let http = require('http').Server(app)
let path = require('path')

let io = require('socket.io')(http) // passing the server

app.get('/', function(req, res){
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'rooms.html'
    res.sendFile(fileName, options);
})

// var roomNum = 1

// io.on('connection', function(socket){
//     console.log('io user connected')

//     socket.join('room-'+roomNum)
//     io.sockets.in('room-'+roomNum).emit('connectedRoom', {message:'connected to Room 1'})

//     socket.on('disconnect', function(){
//         console.log('io user disconnected')
//     })
// })

// multiple rooms with limit
var roomNum = 1
var full = 0

io.on('connection', function(socket){
    console.log('io user connected')
    full++
    if( full > 2) {
        full = 0
        roomNum++
    }

    socket.join('room-'+roomNum)
    io.sockets.in('room-'+roomNum).emit('connectedRoom', {message:`connected to Room ${roomNum}`})

    socket.on('disconnect', function(){
        console.log('io user disconnected')
    })
})

http.listen(3000, function(){
    console.log('Server listening on port 3000')
})
// root file
let app = require('express')() // for enabling function like get, post etc.
let http = require('http').Server(app)
let path = require('path')

let io = require('socket.io')(http) // passing the server

app.get('/', function(req, res){
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'index.html'
    res.sendFile(fileName, options);
})

// setting up server on backend side
io.on('connection', function(socket){
    console.log('io user connected')

    // setTimeout(function(){
    //     socket.send('Sent message using message event of Socket.IO')
    // }, 3000)

    // setTimeout(function(){
    //     socket.send('Sent')
    // }, 10000)

    // Create custom event on Server side and catch on client side
    setTimeout(function(){
        socket.emit('myCustomEvent', {description: 'Created custom event from server side', firstName: 'Aish', lastName: 'Joshi'})
    }, 5000)

    // Create custom event on client side and catch on server side
    socket.on('clientCustomEvent', function(data){
        console.log(data)
    })

    socket.on('disconnect', function(){
        console.log('io user disconnected')
    })
})


http.listen(3000, function(){
    console.log('Server listening on port 3000')
})

// Server side events of Socket.IO:
// connection, disconnect, Message, Reconnect, Ping, Join, Leave


// Broadcasting
// Users can see how many users are connected
// If user connect, then we will show a welcome message to user, and other users can see how many user connected.
const express = require('express');
const cors = require('cors');  // Import the cors middleware
const app = express();
const socket = require('socket.io');

// Use the cors middleware
app.use(cors());

const server = app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

let io = socket(server, {
    cors: {
        origin: "http://localhost:3000",  // Allow requests from this origin
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on('connection', function(socket) {
    console.log('User connected: ' + socket.id);
    socket.on('eventCreated', function(data) {
        console.log('response for Server1: ' + data.message);
        io.emit('responseFromServer1', data);
    });
});

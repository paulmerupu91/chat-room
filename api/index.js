const express = require( 'express' );
const app = express();
const https = require( 'https' );
const http = require( 'http' );
const path = require( 'path' );
const fs = require( 'node:fs' );
// var privateKey = fs.readFileSync( __dirname + '/../ssl-files/localhost.key' );
// var certificate = fs.readFileSync( __dirname + '/../ssl-files/localhost.crt' );
var bodyParser = require('body-parser');
const server = http.createServer({
    // key: privateKey,
    // cert: certificate
}, app );
const { Server } = require("socket.io");
const io = new Server(server);

import './includes/db_queries';

import { loginCheck } from './includes/authentication';
import { defaultRooms } from './../api/defaultRooms';

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const lastTenMessages = [];

app.get( '/', ( req, res ) => {
    res.sendFile( path.resolve( __dirname + '/../dist/frontend/index.html' ) );
} );

app.get( '/rooms/:city', ( req, res ) => {
    // const path = req.path;
    const city = req.params.city;
    // res.send( 'In rooms path: ' + city );
    res.sendFile( path.resolve( __dirname + '/../dist/frontend/index.html' ) );
} );

app.get( '/api/', ( req, res ) => {
    res.json( {lastTenMessages} );
} )

app.post( '/authenticate', loginCheck );

// app.use(express.static( path.resolve( __dirname + '/../dist/backend') ));
app.use(express.static( path.resolve( __dirname + '/../dist/frontend') ));

const portNumber = 3000;

server.listen( portNumber, () => {
    console.log( `Listening on *:${portNumber}` );
} )



io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('entered the chat', ( name ) => {
        socket.broadcast.emit('entered the chat', name);
    } );
    socket.on('disconnect', ( name ) => {
        socket.broadcast.emit('left the chat', name);
        console.log('user disconnected');
    });

    // New chat message
    socket.on('chat message', (data) => {
        if( lastTenMessages.length > 9 ){
            lastTenMessages.shift();
        }
        lastTenMessages.push( data );
        console.log( 'message data', data );
        io.emit('chat message', data);
    });
});
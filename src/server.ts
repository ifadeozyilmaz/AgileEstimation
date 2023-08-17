import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app  = express();
const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors:{
        origin:'*',
        methods: ["GET","POST"]
    },
});

// Run when users connects
io.on('connection', socket => {

    socket.on('joinRoom',(data) =>{
        const name = data.name;
        const roomId = data.roomId;

        socket.join(roomId);
        console.log(`username: ${name} was emitted with roomId: ${roomId}`);
        //io.sockets.emit('userJoined', {name,roomId});
        socket.broadcast.to(roomId).emit('userJoined', {name,roomId});
        console.log(io.sockets.adapter.rooms.get(roomId)?.size)

        socket.on('disconnect',() =>{
            console.log(`${name}`)
        })
    });
});

httpServer.listen(3001,function (){
    console.log('server is running')
});



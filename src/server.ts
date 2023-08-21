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
const roomUsers = new Map();
// Run when users connects
io.on('connection', socket => {

    socket.on('joinRoom',(data) =>{
        const name = data.name;
        const roomId = data.roomId;

        socket.join(roomId);
        if (!roomUsers.has(roomId)) {
            roomUsers.set(roomId, []);
        }
        roomUsers.get(roomId).push(name);
        io.to(roomId).emit('userJoinedEvent', { namesInRoom: roomUsers.get(roomId) });

        console.log(`username: ${name} was emitted with roomId: ${roomId}`);
        //io.sockets.emit('userJoined', {name,roomId});
        socket.broadcast.to(roomId).emit('userJoined', {name,roomId});
        console.log(io.sockets.adapter.rooms.get(roomId)?.size)
        const namesInRoom = roomUsers.get(roomId) || [];
        console.log(`Names in room ${roomId}: ${namesInRoom.join(', ')}`);

        socket.on('disconnect',() =>{
            console.log(`${name} left the room: ${roomId}`)
        })
    });
    socket.on("selectedCard", (selectedCard) => {
        const roomId = selectedCard.roomId
    socket.broadcast.to(roomId).emit("cardSelected", {selectedCard});
        console.log(`${socket.id} selected ${selectedCard}`)
    });
});

httpServer.listen(3001,function (){
    console.log('server is running')
});



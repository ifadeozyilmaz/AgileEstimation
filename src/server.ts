import express from "express";
import {createServer} from "http";
import {Server} from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    },
});
const roomUsers = new Map();
const roomCardSelection = new Map();
// Run when users connects
io.on('connection', socket => {

    socket.on('joinRoom', (data) => {
        const name = data.name;
        const roomId = data.roomId;

        socket.join(roomId);
        if (!roomUsers.has(roomId)) {
            roomUsers.set(roomId, []);
        }
        roomUsers.get(roomId).push(name);
        const namesInRoom = roomUsers.get(roomId) || [];
        io.to(roomId).emit('userJoinedEvent', {namesInRoom: roomUsers.get(roomId)});
        console.log(`Names in room ${roomId}: ${namesInRoom.join(', ')}`);

        socket.on('disconnect', () => {
            console.log(`${name} left the room: ${roomId}`)
        })
    });

    socket.on("selectedCard", (selectedCard) => {
        const roomId = selectedCard.roomId
        const card = selectedCard.card

        if (!roomCardSelection.has(roomId)) {
            roomCardSelection.set(roomId, []);
        }
        roomCardSelection.get(roomId).push(card);
        const selectedCardsInRoom = roomCardSelection.get(roomId) || [];
        io.to(roomId).emit('cardSelectionEvent', {selectedCardsInRoom});
        console.log(`Selected cards in room ${roomId}: ${selectedCardsInRoom.join(', ')}`);
    });

    socket.on('getSelectedCards', ({ roomId }) => {

        const usersSelectedCards = roomCardSelection.get(roomId) || [];
        const values = usersSelectedCards.filter((value:any)=>!isNaN(Number(value)))
        const sumOfSelectedCards = values.reduce((sum:any, card:any) => sum + Number(card), 0);
        const averageSelectedCards = (sumOfSelectedCards / usersSelectedCards.length).toFixed(1);

        socket.emit('usersSelectedCardsResponse', { usersSelectedCards,averageSelectedCards });
    });
});

httpServer.listen(3001, function () {
    console.log('server is running')
});



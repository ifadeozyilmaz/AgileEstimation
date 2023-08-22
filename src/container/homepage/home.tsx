import {useNavigate} from "react-router-dom";
import {Paper, TextField, Button} from "@mui/material";
import HomeImage from "../../assets/estimation.png";
import React, {Fragment, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {RoomActions, UserActions} from "../../actions";
import storeUsername = UserActions.storeUsername;
import {RouteTypes} from "../../enums/routes";
import storeRoom = RoomActions.storeRoom;
import SocketIO from "socket.io-client";
import storeUsersInRoom = UserActions.storeUsersInRoom;

const socket = SocketIO("http://localhost:3001", {transports: ["websocket"]})

export interface User {
    name: string;
    roomId: string;
}
export function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [roomId, setRoomId] = useState<string>("");

    const addUser = ({name, roomId}: User) => {
        socket.emit('joinRoom', {name, roomId});
        console.log(name, roomId);
    }
    useEffect(() => {
        socket.on('userJoinedEvent', ({namesInRoom}) => {
            dispatch(storeUsersInRoom(namesInRoom))
            console.log(namesInRoom)
        });
    }, []);


    const handleSubmit = () => {
        dispatch(storeUsername(name));
        dispatch(storeRoom(roomId));
        addUser({name, roomId})
        navigate(RouteTypes.Estimation.replace(':RoomId', roomId));
    }
    return (
        <Fragment>
            <div className="grid">
                <div className="home-image">
                    <img alt='img' src={HomeImage}></img>
                </div>
                <div className="form">
                    <Paper>
                        <h2>Join Room</h2>
                        <TextField label='Name' placeholder='Enter Your Name' fullWidth value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        <TextField label='Room Number' placeholder='Enter Room Number' fullWidth value={roomId}
                                   onChange={(e) => setRoomId(e.target.value)}/>
                        <Button disabled={(roomId && name).length === 0} variant="contained" fullWidth
                                onClick={handleSubmit}>Submit</Button>
                    </Paper>
                    <Paper>
                        <h2>Create Room</h2>
                        <TextField label='Name' placeholder='Enter Your Name' fullWidth/>
                        <TextField label='New Room' placeholder='Enter Room Number' fullWidth/>
                        <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                    </Paper>
                </div>
            </div>
        </Fragment>
    );
}

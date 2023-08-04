import {useNavigate} from "react-router-dom";
import {Paper, TextField, Button, Tooltip} from "@mui/material";
import HomeImage from "../../assets/estimation.png";
import React, {Fragment, useState} from "react";
import { useDispatch } from "react-redux";
import {RoomActions, UserActions} from "../../actions";
import storeUsername = UserActions.storeUsername;
import {RouteTypes} from "../../enums/routes";
import storeRoom = RoomActions.storeRoom;


export function Home () {
    const dispatch = useDispatch();
   const navigate = useNavigate();
   const [name, setName] = useState<string>("");
   const [id,setId] = useState("");
   const handleSubmit = () => {
       dispatch(storeUsername(name));
       dispatch(storeRoom(id));
       navigate(RouteTypes.Estimation.replace(':RoomId', id));
   };
    return (
        <Fragment>
            <div className = "grid">
                <div className="home-image">
                    <img alt = 'img' src = {HomeImage}></img>
                </div>
                <div className="form">
                    <Paper>
                        <h2>Join Room</h2>
                        <TextField label='Name' placeholder='Enter Your Name' fullWidth value={name}
                                   onChange={(e)=>setName(e.target.value)}/>
                        <TextField label='Room Number' placeholder='Enter Room Number' fullWidth value={id}
                                   onChange={(e)=>setId(e.target.value)}/>
                        <Tooltip title="Join an existing room" placement="bottom">
                            <Button disabled={id.length===0} variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <h2>Create Room</h2>
                        <TextField label='Name' placeholder='Enter Your Name' fullWidth/>
                        <TextField label='New Room' placeholder='Enter Room Number' fullWidth/>
                        <Tooltip title="Create a new room" placement="bottom">
                            <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                        </Tooltip>
                    </Paper>
                </div>
            </div>
     </Fragment>
    );
}

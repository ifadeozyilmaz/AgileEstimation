import {useNavigate} from "react-router-dom";
import {Paper, TextField, Button, Tooltip} from "@mui/material";
import HomeImage from "../../assets/estimation.png";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {UserActions} from "../../actions";
import storeUsername = UserActions.storeUsername;
import {RouteTypes} from "../../enums/routes";


export function Home () {
    const dispatch = useDispatch();
   const navigate = useNavigate();
   const [name, setName] = useState<string>("");
   const changeName =(e:React.ChangeEvent<HTMLInputElement>) => {
       setName(e.target.value);
       };
   const handleSubmit = () => {
       dispatch(storeUsername(name));
       navigate(RouteTypes.Estimation);
   };
    return (
        <>
            <div className = "grid">
                <div className="home-image">
                    <img alt = 'img' src = {HomeImage}></img>
                </div>
                <div className="form">
                    <Paper>
                        <h2>Join Room</h2>
                        <TextField label='Name' placeholder='Enter Your Name' fullWidth value={name} onChange={changeName}/>
                        <TextField label='Room Number' placeholder='Enter Room Number' fullWidth/>
                        <Tooltip title="Join an existing room" placement="bottom">
                            <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <h2>Create Room</h2>
                        <TextField label='Name' placeholder='Enter Your Name' fullWidth value={name} onChange={changeName}/>
                        <TextField label='New Room' placeholder='Enter Room Number' fullWidth/>
                        <Tooltip title="Create a new room" placement="bottom">
                            <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                        </Tooltip>
                    </Paper>
                </div>
            </div>
     </>
    );
}

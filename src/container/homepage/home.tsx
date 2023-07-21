import {useNavigate} from "react-router-dom";
import {Grid, Box, Paper, TextField, Button, Tooltip} from "@mui/material";
import HomeImage from "./../../assets/estimation.png";
import "../app/App.scss"
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main:'#1F6E8C',
        },
       secondary: {
            main: '#6096B4',
       },
    },
    components:{
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius:"100px",
                    boxShadow:"none",
                    backgroundColor:'#1F6E8C',
                    marginTop:'45px',
                    color:'#FFFFFF',
                    '&:hover': {
                        backgroundColor:'#6096B4',
                        boxShadow:"none",
                        color:'#FFFFFF',
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltipPlacementBottom:{
                    backgroundColor:'#6096B4',
                },
            }
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    marginTop:20,
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    padding:20,
                    height:'28rem',
                    width: 300,
                    margin:"20px auto",
                    borderRadius:'20px',
                    color:"#1F6E8C",
                },
            }
        },
    }
});

export function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-name">Estimation</a>
        </nav>
    )
}

export function Home () {
   const navigate = useNavigate()

    return(
        <ThemeProvider theme={theme}>
        <Navbar/>
            <Grid container direction='row'>
                    <Box p={2} pl={5} >
                        <img alt='img' className='HomePageImage' src={HomeImage}
                             style={{width:'35rem', height:'40rem', borderRadius:'80px'}}></img>
                    </Box>
            <Grid pl={8} pt={8}>
                <Paper >
                    <Grid textAlign='center' pt={5}>
                        <h2>Join Room</h2>
                    </Grid>
                    <TextField label= 'Name' placeholder='Enter Your Name' fullWidth />
                    <TextField label= 'Room Number' placeholder='Enter Room Number' fullWidth />
                    <Tooltip title="Join an existing room"  placement="bottom">
                    <Button variant="contained" fullWidth onClick={() => navigate('estimation')}>Submit</Button>
                    </Tooltip>
                </Paper>
            </Grid>
                <Grid pl={8} pt={8}>
                    <Paper >
                        <Grid textAlign='center' pt={5}>
                            <h2>Create Room</h2>
                        </Grid>
                        <TextField label= 'Name' placeholder='Enter Your Name' fullWidth />
                        <TextField label= 'New Room' placeholder='Enter Room Number' fullWidth />
                        <Tooltip title="Create a new room" placement="bottom">
                        <Button variant="contained" fullWidth onClick={() => navigate('estimation')}>Submit</Button>
                        </Tooltip>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

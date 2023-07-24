import {Box, Grid, Paper, Button, Stack} from "@mui/material";
import {Card, Typography} from "@mui/material";
import {createTheme,ThemeProvider} from "@mui/material/styles";
import RefreshIcon from '@mui/icons-material/Refresh';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from "react";
import {useSelector} from "react-redux";
import {State} from "../../store";

export function Estimation() {

    const numbers = ['?', 1, 2, 3, 5, 8, 13, 21, '☕'];
    const [active, setActive] = useState(null);
    const username = useSelector((state: State) => state.user.username);
    const handleClick = (item:any) => {
            setActive(item);
        };

        const card = createTheme({
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                width: 200,
                                borderRadius: "50px",
                                boxShadow: "none",
                                backgroundColor: '#1F6E8C',
                                color: '#FFFFFF',
                                '&:hover': {
                                    backgroundColor: '#6096B4',
                                    boxShadow: "none",
                                    color: '#FFFFFF',
                                }
                            }
                        }
                    },
                    MuiPaper: {
                        styleOverrides: {
                            root: {
                                textAlign: 'center',
                                lineHeight: '120px',
                                color: 'white',
                            }
                        }
                    },
                 MuiCard:{
                        styleOverrides:{
                        }
                 }
                }
            }
        );

        return (
            <Grid container spacing={2}>

                {[card].map((theme, index) => (
                    <Grid item key={index}>
                        <Card >
                                <Typography>
                                    Name: {username}
                                </Typography>
                                <Typography>
                                    Selected Card
                                </Typography>
                        </Card>
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    fontSize: 30,
                                    paddingTop: 5,
                                    '& > :not(style)': {
                                        width: 145,
                                        height: 160,
                                        backgroundColor: '#1F6E8C',
                                        ml: 2.2,
                                        paddingTop: 5,
                                        '&:hover': {
                                            transform: 'translateY(-20px)',
                                        },
                                    }
                                }}
                            >
                                {numbers.map((number, item) => (
                                    <Paper key={item} onClick={() => handleClick(item)}
                                           style={{backgroundColor: active === item ? "pink" : ""}}> {`${number}`}
                                    </Paper>
                                ))}
                            </Box>
                            <Stack spacing={10} direction="row" sx={{pl: '35%', pt: '8%',}}>
                                <Button variant="contained" startIcon={<VisibilityIcon/>}>Reveal</Button>
                                <Button variant="contained" startIcon={<RefreshIcon/>}>Reset</Button>
                            </Stack>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        )

}



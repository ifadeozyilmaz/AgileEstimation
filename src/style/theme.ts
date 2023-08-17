import { createTheme} from '@mui/material/styles';

export const theme = createTheme({

    components:{
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius:"50px",
                    boxShadow:"none",
                    backgroundColor:'#1F6E8C',
                    marginTop:'45px',
                    color:'#FFFFFF',
                    '&:hover': {
                        backgroundColor:'#6096B4',
                        boxShadow:"none",
                        color:'#FFFFFF',
                    },
                    ":disabled":{
                        backgroundColor: '#6096B4',
                        color:'#FFFFFF',

                    }
                }
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
   }
 );



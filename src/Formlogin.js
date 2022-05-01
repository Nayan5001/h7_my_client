import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {TextField,Typography} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import SignUpContainer from "./SignUpContainer"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import './Formlogin.css';
// function Copyright(props) {

//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © H7 '}
     
        
     
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [pswd, setpswd] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const e=data.get('email');
    const p=data.get('password');
    axios.post('/login', {
      id: e,
      password: p
    })
    .then((response) => {
      console.log(response);
      if(response.data==="success"){
        window.location.href = "https://console.twilio.com/us1/develop/phone-numbers/manage/verified?frameUrl=%2Fconsole%2Fphone-numbers%2Fverified%3Fx-target-region%3Dus1";
       
      }
      else{
        setEmail('');
        setpswd('');
        alert("Wrong id or password! Please try again");

      }
    }, (error) => {
      console.log(error);
    });
    
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Grid container component="main" sx={{ height: '100vh', width: '100vw' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
               
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={pswd}
                onChange={(e) => setpswd(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                
                {"________________"}
                </Grid>
                <Grid item>
                {"________________"}
                </Grid>
              </Grid>
             
            </Box>
          </Box>
        {/* </Grid>
      </Grid> */}
    </ThemeProvider>
  );
}
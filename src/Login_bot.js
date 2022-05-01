import React from 'react';
import './Login_bot.css'
import {Container,makeStyles,Box} from '@material-ui/core';
import Image from 'material-ui-image';
import { sizing } from '@mui/system';
import Form from './Formlogin'
import Signup from './signup'
import SignUpContainer from "./SignUpContainer"
import {MuiThemeProvider} from "@material-ui/core/styles";
const useStyles =makeStyles({
cont:{
    display: 'flex',
    flexDirection:'row',
    boxSizing: 'border-box'
},
scont1:{
    flex:0.7,
    flexGrow:1,
    maxHeight:100
},
scont2:{
    flex:0.5,
    flexGrow:1
}

})
export default function Login(){
    const classes=useStyles()
    return(
        <MuiThemeProvider>
        <div className="cont">
            <div className="scont1">
            <img width="100%" height="100%"
                  src="https://img.freepik.com/free-vector/data-scientist-data-analytics-manager-database-developer-administrator-working-big-data-job-database-developers-careers-big-data-concept_335657-1881.jpg?t=st=1651387226~exp=1651387826~hmac=efb5f34f05c3fcf1d639ed7632da12ef4c97d9ae520eb4b78aa781d299884e92&w=996"
                />
            </div>
            <div className="scont2">
           <Form/>

            </div>
           
        </div>
        </MuiThemeProvider>
    )
}
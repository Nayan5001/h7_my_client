import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './fpwd.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
export default function Fpwd(){
  const navigate = useNavigate();
  const routeChange=()=>{
    const curr = document.getElementById('email').value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(curr))
    {
      navigate('/thanks');
    }

  }
  useEffect(()=>{
    document.body.style.background = "linear-gradient(to top, #f71543, #eb833e) fixed";
  },[])
    return(
        <div className="fpwd">
        <div class="container-center">
        <center>
        <img src = "https://i.imgur.com/LaimZqD.png" width="30%" />
          </center>
      <h2>Don't Worry!</h2>
      <form action="">
        <h4>
          Just provide your email<br/> 
          and we can do the rest
        </h4>
        <formgroup>
          <input type="email" name="email" placeholder="Email" required id="email"/>
          {/* <label for="email"><br/>Email</label> */}
          <span>enter your email</span>
        </formgroup>
    
  
        <button id="login-btn" onClick={routeChange}>Submit</button>
  
   
    
      </form>
   
      <p>Did you remember? <a href="/">Sign In</a></p>
    </div>
    </div>
    )
}
import React,{useEffect} from "react";
import {FlatButton,RaisedButton,TextField} from "material-ui";
// import RaisedButton from "material-ui/RaisedButton";
// import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";
import "./style.scss";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  useEffect(()=>{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1555475660-3df469f5d6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
  },[])
  return (
    <div className="loginBoxmain">
      <div className="loginBox">
        <h1>Sign Up</h1>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <form onSubmit={onSubmit}>
          <TextField
            name="username"
            placeholder="User Name"
            value={user.username}
            onChange={onChange}
            errorText={errors.username}
          />
          <TextField
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={onChange}
            errorText={errors.email}
          />
          <TextField
            type={type}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={onPwChange}
            errorText={errors.password}
          />

          <div className="pwStrRow">
            {score >= 1 && (
              <div>
                <PasswordStr score={score} /> 
                <FlatButton 
                  className="pwShowHideBtn" 
                  label={btnTxt} onClick={pwMask} 
                  style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
                />
              </div>
              )} 
          </div>
          <TextField
            type={type}
            name="pwconfirm"
            placeholder="Confirm Password"
            value={user.pwconfirm}
            onChange={onChange}
            errorText={errors.pwconfirm}
          />
          <br />
          <RaisedButton
            className="signUpSubmit"
            primary={true}
            type="submit"
            label="submit"
          />
        </form>
        <p>
          Aleady have an account? <br />
          <a href="/">Log in here</a>
        </p>
      </div>
    </div>
    
  );
};

export default SignUpForm;

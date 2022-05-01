import React from "react";
import './signup.scss'
export default function signup()
{
    console.clear();

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');
    function handleSignup(e){
        let parent = e.target.parentNode;
        console.log(parent.classList,loginBtn.parentNode.parentNode.classList);
            Array.from(e.target.parentNode.classList).find((element) => {
                if(element !== "slide-up") {
                    parent.classList.add('slide-up')
                }else{
                   loginBtn.parentNode.parentNode.classList.add('slide-up')
                    parent.classList.remove('slide-up')
                }
            });
    }
    function handleLogin(e){
        let parent = e.target.parentNode.parentNode;
        console.log(parent.classList,signupBtn.parentNode.classList);
            Array.from(e.target.parentNode.parentNode.classList).find((element) => {
                if(element !== "slide-up") {
                    parent.classList.add('slide-up')
                }else{
                    signupBtn.parentNode.classList.add('slide-up')
                    parent.classList.remove('slide-up')
                    // while ( parent.classList.length) {
                        // parent.classList.remove("someStyle");
                    
                }
            });
            // if(e.target.parentNode.parentNode.classList.contains('slide-up')){
            //     signupBtn.parentNode.classList.add('slide-up')
            //     parent.classList.remove('slide-up')
            // }
            // else
            // {
            //     parent.classList.add('slide-up') 
            // }
    }
    return(
        <div className="form-structor">
        <div className="signup">
            <h2 className="form-title" id="signup" onClick={handleSignup}><span>or</span>Sign up</h2>
            <div className="form-holder">
                <input type="text" className="input" placeholder="Name" />
                <input type="email" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
            </div>
            <button className="submit-btn" >Sign up</button>
        </div>
        <div className="login slide-up">
            <div className="center">
                <h2 className="form-title" id="login" onClick={handleLogin}><span>or</span>Log in</h2>
                <div className="form-holder">
                    <input type="email" className="input" placeholder="Email" />
                    <input type="password" className="input" placeholder="Password" />
                </div>
                <button className="submit-btn" >Log in</button>
            </div>
        </div>
    </div>
    )
}
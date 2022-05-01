import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Thanks.scss';
export default function Thanks(){
  const navigate=useNavigate();
    return (
        <div className="Thanks">
            <p>
              Your Email
              <span>
                Thank You!
              </span>
              &mdash; is Sent. &mdash;
            </p>
            <div class="wrap">
              <button class="button_t" onClick={()=>{navigate('/student_home')}}>Go Back</button>
            </div>
           
              
        </div>
    )
}
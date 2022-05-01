import React from 'react';
import './Adminsuccess.css'
export default function ad(){
    return(
<div className='ad_su'>
<div class="login-box">
      <h2>Add/Delete Student</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Roll Number</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>Phone Number</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        Add
        </a>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Delete
        </a>
      </form>
    </div>
</div>

    )
}
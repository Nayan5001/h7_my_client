import React from "react";
import './main_home_page.scss';
export default function Thanks(){
    return (
        <div className="Home">
        <div className="tempo">
        <main>
        
            <h1 class="main_heading1">
            Welcome To Hostel-7 Portal
            
            </h1>
            <input type="checkbox" id="myInput"/>
            <label for="myInput">
                <span class="bar top"></span>
                <span class="bar middle"></span>
                <span class="bar bottom"></span>
              </label>
            <aside>
              <div class="aside-section aside-left">
                <div class="aside-content">
                  {/* <h2>  SELECT  THE SECTION</h2>
                  <br/> */}
                  <p>SECTIONS </p>
                      
                </div>
              </div>
              <div class="aside-section aside-right">
                <ul class="aside-list">
                  <li><a href="/student_home" class="aside-anchor">Student Login</a></li>
                  <li><a href="/adminlogin" class="aside-anchor">Admin Login</a></li>
                  <li><a href="/numbers" class="aside-anchor">Emergency Contacts</a></li>
                      
                </ul>
              </div>
            </aside>
          </main>
        </div>
             
        </div>
      
    )
}
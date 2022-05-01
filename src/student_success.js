import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './student_success.scss';
export default function Student()
{
    const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [room, setRoom] = useState('');
      const [category, setCategory] = useState('');
      const [date,setDate]=useState('')
      const [area,setArea]=useState('');
      const navigate = useNavigate();
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          email: data.get('email'),
         name: data.get('name'),
          phone: data.get('phone'),
          room: data.get('room'),
          category: data.get('category'),
          date: data.get('date'),
          area: data.get('area')

        
        });
        const e=data.get('email');
        const n=data.get('name');
        const p=data.get('phone');
        const r=data.get('room');
         const c=data.get('category');
         const d=data.get('date');
         const a=data.get('area');
        // // const p=data.get('password');
        axios.post('/submit', {
          email: e,
          name: n,
          phone:p,
          room:r,date:d,area:a,category:c
        })
        .then((response) => {
          console.log(response);
          if(response.data==="success"){
           navigate('/thanks');
       
          }
          else{
            setEmail('');
            setName('');
            setPhone('');
            setRoom('');
            setCategory('');
            setDate('');
            setArea('');
            alert("Please try again!!");

          }
        }, (error) => {
          console.log(error);
        });
    
      };
    // function handleSubmit(){
    //     var formData = new FormData(document.querySelector('form'));
    //     console.log(formData);
    // }
    return(
        <div class="Container">
            <div class="center">
                <h1>Fill Rebate / Register Complain </h1>
                <form action="https://formsubmit.co/arora.nayan999@gmail.com" method="POST">
                  <div class="inputbox">
                    <input type="email" required="required" placeholder='Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <span></span>
                  </div>
                  <div class="inputbox">
                    <input type="text" required="required" placeholder='Name' name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <span></span>
                  </div>
                  <div class="inputbox">
                    <input type="text" required="required" placeholder='Room No.' name="room" value={room} onChange={(e)=>setRoom(e.target.value)}/>
                    <span></span>
                  </div>
                  <div class="inputbox">
                    <input type="text" required="required" placeholder='Phone No.' name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <span></span>
                  </div>
                  <div class="inputbox">
                  <select id="cars" name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option value="" disabled selected hidden>Select Category...</option>
                        <option value="Rebate Filling">Rebate Filling</option>
                        <option value="Electrical Issue">Electrical Issue</option>
                        <option value="Carpenter Related Issue">Carpenter Related Issue</option>
                        <option value="Plumber Related Issue">Plumber Related Issue</option>
                      </select>
                  </div>
                  <div class="inputbox">
                  <input type="date" id="start" name="date"
              
                       min="2018-01-01" max="2050-12-31" required="required" value={date} onChange={(e)=>setDate(e.target.value)}/>
                  </div>
       
                  <div class="inputbox">
                    <textarea rows="5" cols="30" required="required" placeholder='Enter details here...' name="Description" value={area} onChange={(e)=>setArea(e.target.value)}>
      
                    </textarea>
            
                  </div>
                  <input type="hidden" name="_next" value="http://localhost:3000/thanks"/>
                  <div class="inputbox">
                    <input type="submit" value="submit" />
                  </div>
                </form>
              </div>
        </div>
        

    
  
    ) 
}
import logo from './logo.svg';
import './App.css';
import Admin_Login from './Admin_Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpContainer from './SignUpContainer';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Fpwd from './fpwd';
import Front_page from './Front_page';
import Admin_suc from './Adminsuccess';
import Student_suc from './student_success';
import Thankyou from './Thanks';
import Main_home from "./main_home_page";
import Numbers from './Numbers';
import Student_home from './Student_home';
function App() {
  return (
    <MuiThemeProvider>
    <Router>
      
    <Routes>
    <Route exact path="/" element={<Main_home/>}/>
    <Route exact path="/SignUpContainer" element={<SignUpContainer/>}/>
    <Route exact path="/fpwd" element={<Fpwd/>}/>
    <Route exact path="/adminlogin" element={<Admin_Login/>}/>
    <Route exact path="/adminsuc" element={<Admin_suc/>}/>
    <Route exact path="/studentsuc" element={<Student_suc/>}/>
    <Route exact path="/thanks" element={<Thankyou/>}/>
    <Route exact path="/main_home_page" element={<Main_home/>}/>
    <Route exact path="/numbers" element={<Numbers/>}/>
    <Route exact path="/student_home" element={<Student_home/>}/>
    </Routes>
      
        
      
    </Router>
    </MuiThemeProvider>
  );
}

export default App;

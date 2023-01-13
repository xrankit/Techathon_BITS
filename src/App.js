import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import UserState from './context/users/userState';
import Loginpage from './components/Loginpage';
import Form from './components/UpdateDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin';


function App() {
  const [userData, setuserData] = useState({})
  const getdata = (x) => {
    setuserData(x);
  }

  const fertdata = [
    {
      "Date":"12/11/2022",
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },

    {
      "Date":"12/11/2022",
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
      {
      "Date":"12/11/2022",
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
    {
      "Date":"12/11/2022",
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    }
  ]
  return (
   <Router>
    <UserState>    
     <Routes>
        <Route path='' element={<Login getdata={getdata} />} />
        <Route path='/login' element={<Loginpage  userData={userData} fertdata={fertdata} />} />
        <Route path='/loginAdmin' element={<Admin userData={userData} fertdata={fertdata}/>} />
      </Routes>
    </UserState>
    {console.log(userData)}
    </Router>
    )
  }

export default App;


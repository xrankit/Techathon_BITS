import React, { useState, useContext} from 'react'
import userContext from '../context/users/userContext'
import img1 from '../imgs/dept-of-fertilizers-logo.jpg'
import { useNavigate } from "react-router-dom";
import './Login.css'
import x from '../imgs/logox.png'
import {Link} from 'react-router-dom'

function Login(props) {
    let navigate = useNavigate();
    const [creds, setCreds] = useState({loginID:"",
password: ""})
    const context = useContext(userContext);
    const { userLogin } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await userLogin(creds);
        const userdetail = json.user;
        props.getdata(userdetail);
        {console.log(userdetail.isAdmin);}
        if(json.success)
            {!userdetail.isAdmin && navigate('/login')}
            {userdetail.isAdmin && navigate('/loginAdmin')}
    }

    const handleOnChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

  return (
      <>
    <div className='login'>
        {/* <div className="txt">
            <p>Ministry of Chemicals and Fertilizers</p>
        </div> */}
        <div className="header">
            <img className='logox' src={x} alt="this is imge" />
            <p className="headText">
            Department of Chemicals and Petrochemicals
        </p>
        </div>
        <div className="portal">
            <h1>Login</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required name='loginID' value={creds.loginID} onChange={handleOnChange}/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required name='password' value={creds.password} onChange={handleOnChange}/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">
                    Forgot Password?
                </div>
                <Link to='/login' onClick={handleSubmit}>
                    <button className="submit-button" >Login</button>
                </Link>
                

            </form>
        </div>
    </div>
    </>
  )
}

export default Login
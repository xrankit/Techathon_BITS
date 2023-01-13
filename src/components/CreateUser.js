import React from 'react'
import './CreateUser.css'
function Form() {
  return (
    <div className='form-main'>
            <h1>Create New User</h1>
        <form method="post">
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Name</label>
        </div>
        <div className="change">
            <input required type='email' />
            <span></span>
            <label>E-mail</label>
        </div>
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Mobile Number</label>
        </div>
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Location</label>
        </div><div className="change">
            <input required type="text" />
            <span></span>
            <label>LoginID</label>
        </div>
        <div className="change">
            <input required type="password" />
            <span></span>
            <label>Password</label>
        </div>
            <button className="submit-button" >Create</button>
        </form>
    </div>
  )
}

export default Form
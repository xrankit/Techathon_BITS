import React from 'react'
import './UpdateDetails.css'
function UpdateDetails() {
  return (
    <div className='form-main'>
            <h1>Update account details</h1>
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
            <button className="submit-button" >Update</button>
            <button className="pass-button" >Change Password?</button>
        </form>
    </div>
  )
}

export default UpdateDetails;
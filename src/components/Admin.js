import React from 'react'
import logoimg from '../imgs/logox.png'
import CreateUser from './CreateUser.js'
import './Admin.css'
import UpdateDetails from './UpdateDetails'

function Admin(props) {
  return (
    <div className='user-main'>
      <div className='side-navbar'>
        <div className='profile-image'>
          <img  className='img-profile' src={logoimg} alt="" />
        </div>
        <div className="userlinks">
          <div className="links">
            <a href="#1st">Users</a>
          </div>
          <div className="links">
            <a href="#2nd">Update Acc. Det.</a>
          </div>
          <div className="links">
            <a href="#3rd">Create User</a>
          </div>

          <div className="links">
            <a href="#5th">My Account</a>
          </div>
          <div className="links">
            <a href="/">Logout</a>
          </div>

        </div>
        <div className="user-footer">
          Lorem ipsum dolor sit amet consectetur adipisicue sed debitis quidem mollitia
        </div>
      </div>
      <div className="user-homepage">
      <div className='a1st' id='1st'>
          <div className="b1st-main">
            1st Page
          </div>
        </div>
        <div className='a2nd' id='2nd'>
          <div className="a2nd-main">
            <div className="uptdet">
            <UpdateDetails/>
            </div>
          </div>
        </div>
        <div className='a3rd' id='3rd'>
          <div className="a3rd-main">
            <div className="new-user">
              <CreateUser />
            </div>
          </div>
        </div>
        <div className='a5th' id='5th'>
          <div className="a5th-main">
          <div className="myaccbox">
            <div className='welcomenote'>
              <span className="head1">Name :</span>
              <span className="dat1">{" "}{props.userData.name}</span>

            </div>
            <div className='phonenumber'>
              <span className="head1">Phone Number :</span>
              <span className="dat1">{" "}{props.userData.phoneNumber}</span>
            </div>
            <div className="userid">
              <span className="head1"> User ID : </span>
              <span className="dat1">{" "}{props.userData.loginID}</span>


            </div>
            <div className="location">

              <span className="head1">Location :</span>
              <span className="dat1">{" "}{props.userData.location}</span>

            </div>
            <div className="mailid">
              <span className="head1"> Email:</span>
              <span className="dat1">{" "}{props.userData.email}</span>
            </div>
          </div>
          </div>
        </div>
        <div className='a5th' id='5th'>
          <div className="a5th-main">
            5th Page
          </div>
        </div>
        </div>
      </div>
  )
}

export default Admin
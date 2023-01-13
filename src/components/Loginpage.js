import React from 'react'
import './loginpage.css'
import logoimg from '../imgs/logox.png'
import UpdateDetails from './UpdateDetails';
import AddData from './AddData';

function loginpage(props) {
  const articles = props.fertdata;
  return (
    <div className='user-main'>
      <div className='side-navbar'>
        <div className='profile-image'>
          <img  className='img-profile' src={logoimg} alt="" />
        </div>
        <div className="userlinks">
          <div className="links">
            <a href="#1st">Home</a>
          </div>
          <div className="links">
            <a href="#2nd">Update Data</a>
          </div>
          <div className="links">
            <a href="#3rd">Update Acc Det.</a>
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
          <div className="a1st-main">
            <div className='table-heading'>
              <div className='table-heading-date'>
                Date
                {articles.map((element) => {
                  return <div key={element.Date}>{element.Date}</div>
                })}
                {console.log(articles)}
              </div>
              <div className='table-heading-title'>
                Title
                {articles.map((element) => {
                  return <div key={element.Date}>{element.title}</div>
                })}
              </div>
              <div className='table-heading-Description'>
                Description
                {articles.map((element) => {
                  return <div key={element.Date}>{element.Description}</div>
                })}
              </div>
              <div className='table-heading-Quantity'>
                Quantity
                {articles.map((element) => {
                  return <div key={element.Date}>{element.Quantity}</div>
                })}
              </div>
              <div className='table-heading-unit'>
                Unit
                {articles.map((element) => {
                  return <div key={element.Date}>{element.Unit}</div>
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='a2nd' id='2nd'>
          <AddData/>
        </div>
        <div className='a3rd' id='3rd'>
          <div className='updateform'>
            <UpdateDetails/>
          </div>
        </div>
        <div className='a4th' id='4th'>4th page</div>
        <div className='a5th' id='5th'>
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
    </div>
  )
}

export default loginpage
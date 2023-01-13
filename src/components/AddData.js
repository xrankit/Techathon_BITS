import React from 'react'
import './AddData.css'
export default function () {
  return (
    <div className='data-form'>
            <h1>Add Data</h1>
        <form method="post">
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Item Name</label>
        </div>
        <div className="change">
            <input required type='email' />
            <span></span>
            <label>Quantity</label>
        </div>
        <div className="change">
            <input required type="number"/>
            <span></span>
            <label>Unit</label>
        </div>
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Price</label>
        </div>
        <div className="change">
            <input required type="text"  />
            <span></span>
            <label>Description</label>
        </div>
            <button className="submit-button" >Update</button>
        </form>
    </div>
  )
}

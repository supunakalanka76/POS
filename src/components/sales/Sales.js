import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Sales.css';

function Sales() {
  return (
    <div className='sales'>
      <div className='sales-search'>

        <div className='sales-search-Bar'>
        <div className='row'>
        <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
        </div>
        </div>
      <div className='sales-btn'>
        <button className='btn-order'>Create Order</button>
      </div>
      </div>

      <div className='sales-detail'>
        <div className='sales-box'>
          <h2>Active Orders</h2>
          <h3>1046</h3>
          <span class='material-icons active-icon1'>grading</span>
        </div>

        <div className='sales-box'>
          <h2>Unfulfilled Orders</h2>
          <h3>1046</h3>
          <span class='material-icons active-icon2'>close</span>
        </div>

        <div className='sales-box'>
          <h2>Pending Orders</h2>
          <h3>1046</h3>
          <span class='material-icons active-icon3'>question_mark</span>
        </div>

        <div className='sales-box'>
          <h2>Fulfilled Orders</h2>
          <h3>1046</h3>
          <span class='material-icons active-icon4'>check</span>
        </div>

      </div>
      
    </div>
  )
}

export default Sales

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
          <h4>active Orders</h4>
          <span class="material-icons">grading</span>
          <span class="material-icons">close</span>
          <span class="material-icons">question_mark</span>
          <span class="material-icons">check</span>
          </div>
        <div className='sales-box'>active Orders</div>
        <div className='sales-box'>active Orders</div>
        <div className='sales-box'>active Orders</div>
      </div>
      
    </div>
  )
}

export default Sales

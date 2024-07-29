import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Sales.css';

function Sales() {
  return (
    <div className='sales'>
      <div className='sales-search'>

        <div className='search-Bar'>
        <div className='row'>
        <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
        </div>
        </div>
      <div className='sales-btn'>
        <button className='btn-order'>Create Order</button>
      </div>
      </div>

      <div className='sales-detail'>
        <p>active Orders</p>
        <p>Unfulfilled</p>
        <p>Fulfilled</p>
        <p>pending</p>
      </div>
      
    </div>
  )
}

export default Sales

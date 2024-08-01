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
      <div className='sales-info'>
        <div className='sales-info-items'>
          <div className='sales-info-items'>All Orders</div>
          <div className='sales-info-items'>Active</div>
          <div className='sales-info-items'>Unpaid</div>
          <div className='sales-info-items'>Unfulfilled</div>
        </div>

        <div className='table2'>
          <table className='sales-table'>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Customer Name</th>
                <th>Fulfillment</th>
                <th>Total Amount</th>
                <th>Profit</th>
                <th>Payment Status</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>2022-01-01</td>
                <td>John Doe</td>
                <td>Shipped</td>
                <td>Rs. 5000</td>
                <td>Rs. 1000</td>
                <td>Paid</td>
                <td>2022-01-05</td>
              </tr>
              <tr>
                <td>124</td>
                <td>2022-01-02</td>
                <td>Jane Doe</td>
                <td>Delivered</td>
                <td>Rs. 4000</td>
                <td>Rs. 800</td>
                <td>Unpaid</td>
                <td>2022-01-09</td>
              </tr>
              <tr>
                <td>125</td>
                <td>2022-01-03</td>
                <td>Alice Doe</td>
                <td>Cancelled</td>
                <td>Rs. 3000</td>
                <td>Rs. 500</td>
                <td>Unpaid</td>
                <td>2022-01-12</td>
              </tr>
              <tr>
                <td>126</td>
                <td>2022-01-04</td>
                <td>Bob Doe</td>
                <td>Returned</td>
                <td>Rs. 2000</td>
                <td>Rs. 400</td>
                <td>Paid</td>
                <td>2022-01-15</td>
              </tr>
              <tr>
                <td>127</td>
                <td>2022-01-05</td>
                <td>Emily Doe</td>
                <td>Shipped</td>
                <td>Rs. 6000</td>
                <td>Rs. 1200</td>
                <td>Unpaid</td>
                <td>2022-01-18</td>
              </tr>
              <tr>
                <td>128</td>
                <td>2022-01-06</td>
                <td>David Doe</td>
                <td>Delivered</td>
                <td>Rs. 5000</td>
                <td>Rs. 1000</td>
                <td>Paid</td>
                <td>2022-01-21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Sales

import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Sales.css';

function Sales() {
  return (
    <div className='sales'>

      <div className='sales-search'>
        <div className='sales-search-bar'>
          <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off' />
        </div>
        <button className='btn-order'>Create Order</button>
      </div>

      <div className='sales-details'>

        <div className='sales-box'>
          <div className='sales-box-left'>
            <h2>Active Orders</h2>
            <h3>104</h3>
          </div>
          <div className='sales-box-right'>
            <span className='material-icons sales-icon'>grading</span>
          </div>
        </div>

          <div className='sales-box'>
            <div className='sales-box-left'>
              <h2>Unfulfilled Orders</h2>
              <h3>254</h3>
            </div>
            <div className='sales-box-right'>
              <span className='material-icons sales-icon'>close</span>
            </div>
          </div>

          <div className='sales-box'>
            <div className='sales-box-left'>
              <h2>Pending Orders</h2>
              <h3>12</h3>
            </div>
            <div className='sales-box-right'>
              <span className='material-icons sales-icon'>question_mark</span>
            </div>
          </div>

          <div className='sales-box'>
            <div className='sales-box-left'>
              <h2>Fulfilled Orders</h2>
              <h3>104</h3>
            </div>
            <div className='sales-box-right'>
              <span className='material-icons sales-icon'>check</span>
            </div>
          </div>
      </div>

      <div className='sales-info'>
        <div className='sales-filters'>
          <p>All Orders</p>
          <p>Active</p>
          <p>Unpaid</p>
          <p>Unfulfilled</p>
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
                  <td>
                    <select className='fulfil-dropdown'>
                      <option value='Shipped'>Shipped</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Cancelled'>Cancelled</option>
                      <option value='Returned'>Returned</option>
                    </select>
                  </td>
                  <td>Rs. 5000</td>
                  <td>Rs. 1000</td>
                  <td>Paid</td>
                  <td>2022-01-05</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>2022-01-02</td>
                  <td>Jane Doe</td>
                  <td>
                    <select className='fulfil-dropdown'>
                      <option value='Shipped'>Shipped</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Cancelled'>Cancelled</option>
                      <option value='Returned'>Returned</option>
                    </select>
                  </td>
                  <td>Rs. 4000</td>
                  <td>Rs. 800</td>
                  <td>Unpaid</td>
                  <td>2022-01-09</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>2022-01-03</td>
                  <td>Alice Doe</td>
                  <td>
                    <select className='fulfil-dropdown'>
                      <option value='Shipped'>Shipped</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Cancelled'>Cancelled</option>
                      <option value='Returned'>Returned</option>
                    </select>
                  </td>
                  <td>Rs. 3000</td>
                  <td>Rs. 500</td>
                  <td>Unpaid</td>
                  <td>2022-01-12</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>2022-01-04</td>
                  <td>Bob Doe</td>
                  <td>
                    <select className='fulfil-dropdown'>
                      <option value='Shipped'>Shipped</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Cancelled'>Cancelled</option>
                      <option value='Returned'>Returned</option>
                    </select>
                  </td>
                  <td>Rs. 2000</td>
                  <td>Rs. 400</td>
                  <td>Paid</td>
                  <td>2022-01-15</td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>2022-01-05</td>
                  <td>Emily Doe</td>
                  <td>
                    <select className='fulfil-dropdown'>
                      <option value='Shipped'>Shipped</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Cancelled'>Cancelled</option>
                      <option value='Returned'>Returned</option>
                    </select>
                  </td>
                  <td>Rs. 6000</td>
                  <td>Rs. 1200</td>
                  <td>Unpaid</td>
                  <td>2022-01-18</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>2022-01-06</td>
                  <td>David Doe</td>
                  <td>
                    <select className='fulfil-dropdown'>
                      <option value='Shipped'>Shipped</option>
                      <option value='Delivered'>Delivered</option>
                      <option value='Cancelled'>Cancelled</option>
                      <option value='Returned'>Returned</option>
                    </select>
                  </td>
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


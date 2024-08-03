import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Customers.css';

function Customers() {

  return (
    <div className='customers'>
      <div className='customers-search'>

        <div className='customers-search-Bar'>
        <div className='row'>
        <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
        </div>
        </div>
      <div className='add-new-btn'>
        <button className='customers-btn'>New Customer</button>
      </div>
      </div>

      <div className='customers-analysis'>

        <div className='customers-box'>
          <h2>Regular</h2>
          <span class='material-icons customer-icon'>groups</span>
          <h3>1046</h3>
        </div>

        <div className='customers-box'>
          <h2>Wholesale</h2>
          <span class='material-icons customer-icon'>store</span>
          <h3>10</h3>
        </div>

        <div className='customers-box'>
          <h2>Retail</h2>
          <span class='material-icons customer-icon'>storefront</span>
          <h3>104</h3>
        </div>

        <div className='customers-box'>
          <h2>Online</h2>
          <span class='material-icons customer-icon'>language</span>
          <h3>107</h3>
        </div>
      </div>

      <div className='customers-categories'>
        <div className='customer-category active'>All</div>
        <div className='customer-category'>Regular</div>
        <div className='customer-category'>Wholesale</div>
        <div className='customer-category'>Retail</div>
        <div className='customer-category'>Online</div>
      </div>

      <div className='table4'>
        <table className='customer-table'>
          <thead>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Type</th>
            <th>Loyality Points</th>
            <th>Status</th>
          </thead>

          <tbody>
            <tr>
              <td>C123</td>
              <td>John Doe</td>
              <td>Regular</td>
              <td>100</td>
              <td><button className='view-btn'>status</button></td>
            </tr>

            <tr>
              <td>C456</td>
              <td>Jane Smith</td>
              <td>Retail</td>
              <td>200</td>
              <td><button className='view-btn'>status</button></td>
            </tr>

            <tr>
              <td>C789</td>
              <td>Mark Johnson</td>
              <td>Wholesale</td>
              <td>300</td>
              <td><button className='view-btn'>status</button></td>
            </tr>

            <tr>
              <td>C101</td>
              <td>David Johnson</td>
              <td>Online</td>
              <td>400</td>
              <td><button className='view-btn'>status</button></td>
            </tr>

            <tr>
              <td>C123</td>
              <td>John Addams</td>
              <td>Regular</td>
              <td>100</td>
              <td><button className='view-btn'>status</button></td>
            </tr>

            <tr>
              <td>C456</td>
              <td>Jane Clark</td>
              <td>Retail</td>
              <td>200</td>
              <td><button className='view-btn'>status</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers

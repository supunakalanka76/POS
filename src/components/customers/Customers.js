import React, { useState } from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Customers.css';
import CustomerPopup from './CustomerPopup';

function Customers() {

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const openPopup = () => setIsOpenPopup(true);
  const closePopup = () => setIsOpenPopup(false);

  return (
    <div className='Customers'>
      <CustomerPopup isOpen={isOpenPopup} isClose={closePopup}>
        <div className='popup-content'>
          <div className='personal-information'>
            <h3>Personal Information</h3>
            <label>
              First Name:
              <input type='text1' id='first-name' placeholder='First Name'/>
            </label>

            <label>
              Last Name:
              <input type='text1' id='last-name' placeholder='Last Name'/>
            </label>

            <label>
              Date of Birth:
              <input type='date' id='dob' placeholder='mm/dd/yyyy'/>
            </label>

            <label>
              Gender:
              <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Email Address:
              <input type='email' id='email' placeholder='Email Address'/>
            </label>

            <label>
              Phone Number:
              <input type='tel' id='tel' placeholder='Phone Number'/>
            </label>
          </div>

          <div className='additional-information'>
            <h3>Additional Information</h3>

            <label>
              Address:
              <input type='text1' id='address' placeholder='Address'/>
            </label>

            <label>
              Customer Type:
              <select>
                <option value="">Select Customer Type</option>
                <option value="regular">Regular</option>
                <option value="vip">VIP</option>
              </select>
            </label>

            <label className='loyal-check'>
              Loyalty Program Enrollment:
              <input type='checkbox'/>
            </label>

            <label>
              Preferred Contact Method:
              <div className='contact-methods'>

                <label>
                  <input type='radio' name='contact-method' value='phone'/>
                  <span>Phone</span>
                </label>

                <label>
                  <input type='radio' name='contact-method' value='email'/>
                  <span>Email</span>
                </label>
                
                <label>
                  <input type='radio' name='contact-method' value='both'/>
                  <span>Phone &amp; Email</span>
                </label>
              </div>
            </label>

            <label>
              Notes:
              <textarea id='notes' placeholder='Notes'/>
            </label>

            <div className='popup-footer'>
              <button className='btn-cancel'>Cancel</button>
              <button className='btn-register'>Register</button>
              <button className='btn-delete'>Delete</button>
            </div>

          </div>
        </div>
      </CustomerPopup>
    <div className='customers'>
      <div className='customers-search'>

        <div className='customers-search-Bar'>
        <div className='row'>
        <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
        </div>
        </div>
      <div className='add-new-btn'>
        <button className='customers-btn' onClick={openPopup}>New Customer</button>
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
        <p>All</p>
        <p>Regular</p>
        <p>Wholesale</p>
        <p>Retail</p>
        <p>Online</p>
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
    </div>
  )
}

export default Customers

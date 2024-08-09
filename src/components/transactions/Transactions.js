import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Transactions.css';

function Transactions() {
  return (
    <div className='transactions'>
      <div className='transaction-search'>
        <div className='transaction-search-bar'>
          <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off' />
        </div>
      </div>

      <div className='transaction-info'>
        <div className='transaction-filters'>
          <div className='transaction-filters-left'>
            <p>All</p>
            <p>Recieved</p>
            <p>Transfer</p>
            <p>Payment</p>
            <p>Restore</p>
          </div>
          <div className='transaction-filters-right'>
            <span className='material-icons calender-icon'>calendar_month</span>
            <select className='transaction-dropdown'>
              <option value='90days'>Past 90 days</option>
              <option value='30days'>Past 30 days</option>
              <option value='15days'>Past 15 days</option>
              <option value='7days'>Past 7 days</option>
            </select>
            <h5>17 June 2021 to 15 Sep 2021</h5>
          </div>
        </div>

        <div className='table5'>
          <table className='transaction-table'>
            <thead>
              <tr>
              <th>Name/Business</th>
              <th>Date</th>
              <th>Invoice ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Mack Anthem</td>
                <td>12 March 2021</td>
                <td>IID 898909</td>
                <td>$ 4300</td>
                <td>Receive</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Peter Built</td>
                <td>31 March 2021</td>
                <td>IID 214117</td>
                <td>$ 2340</td>
                <td>Transfer</td>
                <td><button className='detail-btn'>Detais</button></td>
              </tr>

              <tr>
                <td>Mack Anthem</td>
                <td>12 March 2021</td>
                <td>IID 898909</td>
                <td>$ 4300</td>
                <td>Receive</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Peter Built</td>
                <td>31 March 2021</td>
                <td>IID 214117</td>
                <td>$ 2340</td>
                <td>Transfer</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Mack Anthem</td>
                <td>12 March 2021</td>
                <td>IID 898909</td>
                <td>$ 4300</td>
                <td>Receive</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Peter Built</td>
                <td>31 March 2021</td>
                <td>IID 214117</td>
                <td>$ 2340</td>
                <td>Transfer</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Mack Anthem</td>
                <td>12 March 2021</td>
                <td>IID 898909</td>
                <td>$ 4300</td>
                <td>Receive</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Peter Built</td>
                <td>31 March 2021</td>
                <td>IID 214117</td>
                <td>$ 2340</td>
                <td>Transfer</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Mack Anthem</td>
                <td>12 March 2021</td>
                <td>IID 898909</td>
                <td>$ 4300</td>
                <td>Receive</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Peter Built</td>
                <td>31 March 2021</td>
                <td>IID 214117</td>
                <td>$ 2340</td>
                <td>Transfer</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>

              <tr>
                <td>Mack Anthem</td>
                <td>12 March 2021</td>
                <td>IID 898909</td>
                <td>$ 4300</td>
                <td>Receive</td>
                <td><button className='detail-btn'>Details</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transactions

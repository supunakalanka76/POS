import React from 'react'
import Settings from './Settings'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';

function PaymentSettings() {
  return (
    <div className='payment-settings'>

      <div className='payment-settings-header'>
        <Settings/>
        <h2>Payment Settings</h2>
      </div>

      <div className='payment-settings-content'>

        <div className='payment-settings-content-left'>

          <div className='payment-settings-content-gateway'>
            <label>
              Payment Gateway:
              <span className='material-icons edit-icon'>edit</span>
              <select className='gateway-dropdown'>
                <option value='select one'>Select a Payment Gateway</option>
                <option value='seylanbank'>Seylan Bank</option>
                <option value='sampathbank'>Sampath Bank</option>
                <option value='payhere'>PayHere</option>
                <option value='directypay'>DirectPay</option>
              </select>
            </label>
          </div>

          <div className='payment-settings-content-account'>
            <label>
              Account Number:
              <span className='material-icons edit-icon'>edit</span>
              <input type='number' placeholder='Account Number'/>
              <p>To enter the account number associated with the payment gateway.</p>
            </label>
          </div>

          <div className='payment-settings-content-routing'>
            <label>
              Routing Number:
              <span className='material-icons edit-icon'>edit</span>
              <input type='number' placeholder='Routing Number'/>
              <p>To enter the routing number for bank transfers</p>
            </label>
          </div>

          <div className='payment-settings-content-billing'>
            <label>
              Billing Address:
              <span className='material-icons edit-icon'>edit</span>
              <input type='text2' placeholder='Billing Address'/>
            </label>
          </div>
        </div>

        <div className='payment-settings-content-right'>

          <div className='payment-settings-content-tax'>
            <label>
              Tax Information:
              <span className='material-icons edit-icon'>edit</span>
              <input type='text2' placeholder='Tax Information'/>
            </label>
          </div>

          <div className='payment-settings-content-paymethods'>
            <label>
                Preferred Payment Methods:
                <span className='material-icons edit-icon'>edit</span>
                <select className='paymethod-dropdown'>
                  <option value='select one'>Select a Payment Method</option>
                  <option value='cash'>Cash</option>
                  <option value='card'>Card</option>
                  <option value='cheque'>Cheque</option>
                  <option value='online'>Online</option>
                </select>
              </label>
          </div>

          <div className='payment-settings-content-securitybtns'>
            <div className='paymnet-security-buttons'>
              <button className='2fa-btn'>2FA</button>
              <button className='additional-password-btn'>Additional Passwords</button>
            </div>
            <p>Configuring security settings such as two-factor authentication (2FA) or additional passwords</p>
          </div>

          <div className='payment-settings-content-footer'>
            <div className='payment-footer-buttons'>
              <button className='save-btn'>Save Changes</button>
              <button className='cancel-btn'>Cancel</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PaymentSettings

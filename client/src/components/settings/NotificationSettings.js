import React from 'react'
import Settings from './Settings'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';

function NotificationSettings() {
  return (
    <div className='notification-settings'>

      <div className='notification-settings-header'>
        <Settings/>
        <h2>Notification Settings</h2>
      </div>

      <div className='notification-settings-content'>
        <div className='notification-settings-content-left'>

          <div className='notification-settings-email'>
            <h3>Email Notifications:</h3>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            </div>

          <div className='notification-settings-sms'>
            <h3>SMS Notifications:</h3>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>

          <div className='notification-settings-push'>
            <h3>Push Notifications:</h3>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
        </div>

        <div className='notification-settings-content-right'>

          <div className='notification-settings-notififrequency'>
            <h3>Notification Frequency:</h3>
            <select className='frequency-dropdown'>
              <option value='select one'>Select a Frequency</option>
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
            </select>
          </div>

          <div className='notification-settings-notifisound'>
            <h3>Notification Sound:</h3>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>

          <div className='notification-settings-content-footer'>
            <div className='notification-footer-buttons'>
              <button className='save-btn'>Save Changes</button>
              <button className='cancel-btn'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings

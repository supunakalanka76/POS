import React from 'react'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom'

function Settings() {

  function activeButtonHandle (event) {
    const buttons = document.querySelectorAll('.settings-navbutton');
    buttons.forEach (link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  return (
    <div className='settings'>

      <div className='settings-buttons'>

        <Link to="/settings" className='settings-navbutton active' onClick={activeButtonHandle}>
          <h4>User Settings</h4>
        </Link>

        <Link to="/settings/general-settings" className='settings-navbutton' onClick={activeButtonHandle}>
          <h4>General Settings</h4>
        </Link>

        <Link to="/settings/payment-settings" className='settings-navbutton' onClick={activeButtonHandle}>
          <h4>Payment Settings</h4>
        </Link>

        <Link to="/settings/notification-settings" className='settings-navbutton' onClick={activeButtonHandle}>
          <h4>Notification Settings</h4>
        </Link>

        <Link to="/settings/system-settings" className='settings-navbutton' onClick={activeButtonHandle}>
          <h4>System Settings</h4>
        </Link>

        <Link to="/settings/support" className='settings-navbutton' onClick={activeButtonHandle}>
          <h4>Support</h4>
        </Link>
      </div>
    </div>
  )
}

export default Settings

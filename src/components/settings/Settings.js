import React from 'react'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <div className='settings'>

      <Link to="/settings" className='settings-navbutton'>
        <h4>User Settings</h4>
      </Link>

      <Link to="/settings/general-settings" className='settings-navbutton'>
        <h4>General Settings</h4>
      </Link>

      <Link to="/settings/payment-settings" className='settings-navbutton'>
        <h4>Payment Settings</h4>
      </Link>

      <Link to="/settings/notification-settings" className='settings-navbutton'>
        <h4>Notification Settings</h4>
      </Link>

      <Link to="/settings/system-settings" className='settings-navbutton'>
        <h4>System Settings</h4>
      </Link>

      <Link to="/settings/support" className='settings-navbutton'>
        <h4>Support</h4>
      </Link>
    </div>
  )
}

export default Settings

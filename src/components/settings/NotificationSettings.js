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
        
      </div>
    </div>
  )
}

export default NotificationSettings

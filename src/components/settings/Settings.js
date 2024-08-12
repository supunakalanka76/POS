import React from 'react'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <div className='settings'>
      <div className='setting-navbar'>
        <div className='setting-navbar-buttons'>
          <a href="#">User Profile</a>
          <a href="#">General Settings</a>
          <a href="#">Payment Settings</a>
          <a href="#">Notification Settings</a>
          <a href="#">System Settings</a>
          <a href="#">Support</a>
        </div>

        <div className='setting-body'>
          
        </div>
      </div>
    </div>
  )
}

export default Settings

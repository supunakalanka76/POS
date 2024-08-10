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
          <div className='setting-body-title'>
            <h2>User Profile</h2>
            <h2>General</h2>
            <h2>Payment</h2>
            <h2>Notification</h2>
            <h2>System</h2>
            <h2>Support</h2>
            <h2>user</h2>
            <h2>general</h2>
            <h2>payment</h2>
            <h2>notification</h2>
            <h2>system</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings

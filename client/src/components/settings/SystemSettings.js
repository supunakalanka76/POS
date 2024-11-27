import React from 'react'
import Settings from './Settings'
import './Settings.css';
import 'material-icons/iconfont/material-icons.css';

function SystemSettings() {
  return (
    <div className='system-settings'>

      <div className='system-settings-header'>
        <Settings/>
        <h2>System Settings</h2>
        <div className='system-settings-actions'>
          <button className='save-btn'>Save Changes</button>
          <button className='cancel-btn'>Cancel</button>
        </div>
      </div>

      <div className='system-content'>

        <div className='system-content-backup'>
          <div className='backup-header'>
            <h3>Backup Option:</h3>
          </div>
          <div className='backup-body1'>
            <h4>Automatic Backup:</h4>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
          <div className='backup-body2'>
            <h4>Backup Frequency:</h4>
            <select className='backup-dropdown'>
              <option value='select one'>Select a Frequency</option>
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
              <option value='yearly'>Yearly</option>
            </select>
          </div>
          <div className='backup-body3'>
            <h4>Backup Location:</h4>
            <input type='text' placeholder='Enter backup location' />
          </div>
        </div>

        <div className='system-content-system'>
          <div className='system-header'>
            <h3>System Updates:</h3>
          </div>
          <div className='system-body1'>
            <h4>Check for Upadates</h4>
            <button className='check-btn'>Check Now</button>
          </div>
          <div className='system-body2'>
            <h4>Last Update:</h4>
            <p>2021-02-15 12:00:00</p>
          </div>
        </div>

        <div className='system-content-display'>
          <div className='display-header'>
            <h3>Display Settings:</h3>
          </div>
          <div className='display-body1'>
            <h4>Screen Resolution:</h4>
            <select className='display-dropdown'>
              <option value='select one'>Select a Resolution</option>
              <option value='1920x1080'>1920x1080</option>
              <option value='1600x900'>1600x900</option>
              <option value='1280x720'>1280x720</option>
              <option value='800x600'>800x600</option>
            </select>
          </div>
          <div className='display-body2'>
            <h4>Brighness Level:</h4>
            <input type='range' min='1' max='100' />
          </div>
          <div className='display-body3'>
            <h4>Theme:</h4>
            <select className='theme-dropdown'>
              <option value='select one'>Select a Theme</option>
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
            </select>
          </div>
        </div>

        <div className='system-content-security'>
          <div className='security-header'>
            <h3>Security Settings:</h3>
          </div>
          <div className='security-body1'>
            <h4>Two-Factor Authentication:</h4>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
          <div className='security-body2'>
            <h4>Encryption:</h4>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
        </div>
        <div className='system-content-network'>
          <div className='network-header'>
            <h3>Network Settings:</h3>
          </div>
          <div className='network-body1'>
            <h4>Wi-Fi:</h4>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
          <div className='network-body2'>
            <h4>Ethernet:</h4>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
          <div className='network-body3'>
            <h4>VPN:</h4>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemSettings

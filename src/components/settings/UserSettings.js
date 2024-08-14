import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import Settings from './Settings'
import user from '../..//images/user.png'

function UserSettings() {
  return (
    <div className='user-settings'>

      <div className='user-header'>
        <Settings/>
        <h2>User Profile</h2>
      </div>

      <div className='user-content'>
        <div className='user-profile'>
          <img src={user} alt='User profile' />
        </div>
        <div className='User-Info'>

          <div className='user-info-username'>
            <label>
              User Name:
              <span className='material-icons edit-icon'>edit</span>
              <input type='text1' placeholder='User Name'/>
            </label>
          </div>

          <div className='user-info-email'>
            <label>
                Email:
                <span className='material-icons edit-icon'>edit</span>
                <input type='email' placeholder='Email'/>
              </label>
          </div>

          <div className='user-info-currentpassword'>
            <label>
                Current Password:
                <span className='material-icons edit-icon'>edit</span>
                <input type='password' placeholder='************'/>
              </label>
          </div>

          <div className='user-info-newpassword'>
            <label>
                New Password:
                <input type='password' placeholder='************'/>
              </label>
          </div>

          <div className='user-info-conpassword'>
            <label>
                Confirm New Password:
                <input type='password' placeholder='************'/>
              </label>
          </div>

        </div>
      </div>

      <div className='user-footer'>
        <div className='user-footer-buttons'>
          <button className='save-btn'>Save Changes</button>
          <button className='cancel-btn'>Cancel</button>
        </div>

    </div>
    </div>
  )
}

export default UserSettings

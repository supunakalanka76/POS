import React from 'react'
import Settings from './Settings'

function UserSettings() {
  return (
    <div className='user-settings'>
      <Settings/>
      <div className='user-content'>
        <h2>User Settings</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, velit vel convallis dapibus, felis lectus sollicitudin ipsum, non viverra velit purus non ipsum.</p>
        <button className='btn btn-primary'>Save Settings</button>
      </div>
    </div>
  )
}

export default UserSettings

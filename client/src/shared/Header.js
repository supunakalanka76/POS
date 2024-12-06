import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import profile from '../images/profile.png';
import './Header.css';

function Header() {
  return (

    <div className='header'>

      <div className='header-title'>
        <h1>Dashboard</h1>
      </div>

      <div className='header-info'>

        <div className='income'>
            <p>Today's Income: <span className='value'>Rs. 100,000</span></p>
        </div>

        <div className='notification'>
            <span className="material-icons">notifications</span>
            <img src={profile} alt="" width='40px' />
        </div>

      </div>
    </div>
  )
}

export default Header

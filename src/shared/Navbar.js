/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css';
import 'material-icons/iconfont/material-icons.css';
import logo from '../images/logo.png';
import profile from '../images/profile.png';

function Navbar() {
  function activeButtonHandle (event) {
    const buttons = document.querySelectorAll('.navbar-button'); {/*all anchor tags save to the const button*/}
    buttons.forEach (link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }


  return (
    <div className='navbar'>

      <div className='navbar-header'>

        <div className='navbar-header-image'>
            <img src={logo} alt="" width='60px'/>
            <span className="material-icons toggle-icon">arrow_forward_ios</span>
        </div>

        <div className='navbar-header-text'>
            <h2>The POS</h2>
        </div>
      </div>

      <div className='navbar-buttons close'>

        <a href="#" className='navbar-button active' onClick={activeButtonHandle} >
            <span className="material-icons">home</span>
            <h3>Home</h3>
        </a>  {/* home */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">storefront</span>
            <h3>Sales</h3>
        </a>  {/* sales */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">inventory</span>
            <h3>Inventory</h3>
        </a>  {/* inventory */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">store</span>
            <h3>Products</h3>
        </a>  {/* products */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">person</span>
            <h3>Customers</h3>
        </a>  {/* customers */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">payments</span>
            <h3>Transactions</h3>
        </a>  {/* tarnsaction */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">article</span>
            <h3>Reports</h3>
        </a>  {/* reports */}
      </div>

      <div className='navbar-settings'>

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
        <span className="material-icons">settings</span>
            <h3>Settings</h3>
        </a>  {/* settings */}

        <a href="#" className='navbar-button' onClick={activeButtonHandle}>
            <span className="material-icons">logout</span>
            <h3>Logout</h3>
        </a>  {/* logout */}
      </div>

      <div className='navbar-profile'>

        <div className='navbar-profile-profile'>
            <img src={profile} alt="" width='40px'/>
        </div>

        <div className='navbar-profile-profileName'>
            <h4>Supun Akalanka</h4>
            <h5>supunakalanka76@.com</h5>
        </div>

        <div className='navbar-profile-profileIcon'>
            <span className="material-icons">more_vert</span>
        </div>

      </div>

    </div>
  )
}

export default Navbar

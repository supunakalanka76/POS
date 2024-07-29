/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css';
import 'material-icons/iconfont/material-icons.css';
import logo from '../images/logo.png';
import profile from '../images/profile.png';
import { Link } from 'react-router-dom';

function Navbar() {
  function activeButtonHandle (event) {
    const buttons = document.querySelectorAll('.navbar-button');
    buttons.forEach (link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  function toggle() {
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.classList.toggle('ToggleActive');

    const navtext = document.getElementsByClassName('navButton');
    if (navtext.length > 0){
      for (let i = 0; i < navtext.length; i++){
        navtext[i].style.display = navbar.classList.contains('ToggleActive') ? 'none': 'inline';
      }
    }

    const profile = document.getElementsByClassName('navbar-profile')[0];
    profile.classList.toggle('ToggleActive');

    const toggle_icon = document.getElementsByClassName('toggle-icon')[0];
    toggle_icon.classList.toggle('ToggleActive');

    const nav =document.getElementsByClassName('Na');
    if (nav.length > 0){
      for(let i = 0; i < nav.length; i++){
        nav[i].classList.toggle('ToggleActive');
      }
    }

  }


  return (
    <div className='navbar'>

      <div className='navbar-header'>

        <div className='navbar-header-image'>
            <img src={logo} alt="" width='60px'/>
        </div>

        <div className='navbar-header-text'>
            <h2 className='navButton'>The POS</h2>
        </div>
        
      </div>
      <span className="material-icons toggle-icon" onClick={toggle}>arrow_back</span>

      <div className='navbar-buttons'>

        <Link to='/' className='navbar-button active Na' onClick={activeButtonHandle} >
            <span className="material-icons">home</span>
            <h3 className="navButton">Home</h3>
        </Link>  {/* home */}

        <Link to='/sales' className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">storefront</span>
            <h3 className='navButton'>Sales</h3>
        </Link>  {/* sales */}

        <Link to='/inventory' className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">inventory</span>
            <h3 className='navButton'>Inventory</h3>
        </Link>  {/* inventory */}

        <Link to='products' className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">store</span>
            <h3 className='navButton'>Products</h3>
        </Link>  {/* products */}

        <Link to='/customers' className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">person</span>
            <h3 className='navButton'>Customers</h3>
        </Link>  {/* customers */}

        <Link to='/transactions' className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">payments</span>
            <h3 className='navButton'>Transactions</h3>
        </Link>  {/* tarnsaction */}

        <Link to='reports' className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">article</span>
            <h3 className='navButton'>Reports</h3>
        </Link>  {/* reports */}
      </div>

      <div className='navbar-settings'>

        <Link to='/settings' className='navbar-button Na' onClick={activeButtonHandle}>
        <span className="material-icons">settings</span>
            <h3 className='navButton'>Settings</h3>
        </Link>  {/* settings */}

        <a href="#" className='navbar-button Na' onClick={activeButtonHandle}>
            <span className="material-icons">logout</span>
            <h3 className='navButton'>Logout</h3>
        </a>  {/* logout */}
      </div>

      <div className='line'></div>

      <div className='navbar-profile'>

        <div className='navbar-profile-profile'>
            <img src={profile} alt="" width='40px'/>
        </div>

        <div className='navbar-profile-profileName navButton'>
            <h4>Supun Akalanka</h4>
            <h5>supunakalanka76@.com</h5>
        </div>

        <div className='navbar-profile-profileIcon navButton'>
            <span className="material-icons">more_vert</span>
        </div>

      </div>

    </div>
  )
}

export default Navbar

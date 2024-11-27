import React from 'react'
import 'material-icons/iconfont/material-icons.css';

function CustomerPopup({children, isOpen, isClose}) {
    if (!isOpen) return null;
  return (
    <div className='customer-popup-overlay'>
        <div className='customer-popup'>
            <div className='customer-popup-header'>
                <span className='customer-popup-title'>
                    Add New Customer
                </span>
                <button className='material-icons popup-close' onClick={isClose}>close</button>
                {children}
            </div>
        </div>
      
    </div>
  )
}

export default CustomerPopup

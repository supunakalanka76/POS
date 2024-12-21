import React from 'react'
import 'material-icons/iconfont/material-icons.css';

function DiscountPopup({children, disOpen, disClose}) {
    if (!disOpen) return null;
  return (
    <div className='discount-popup-overlay'>
        <div className='discount-popup'>
          <div className='discount-popup-header'>
            
            <button className='material-icons discount-popup-close' onClick={disClose}>close</button>
            {children}
            </div>
        </div>
      
    </div>
  )
}

export default DiscountPopup
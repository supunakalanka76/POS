import React from 'react'
import 'material-icons/iconfont/material-icons.css';

function PaymentPopup({children, isOpen, isClose}) {
    if (!isOpen) return null;
  return (
    <div className='payment-popup-overlay'>
        <div className='payment-popup'>
          <div className='payment-popup-header'>
            <span className='payment-popup-title'>
              New Payment
            </span>
            <button className='material-icons popup-close' onClick={isClose}>close</button>
            {children}
            </div>
        </div>
      
    </div>
  )
}

export default PaymentPopup

import React from 'react'
import 'material-icons/iconfont/material-icons.css';

function ProductPopup({children, isOpen, isClose}) {
    if (!isOpen) return null;
  return (
    <div className='product-popup-overlay'>
      <div className='product-popup'>
        <button className='material-icons pro-popup-close' onClick={isClose}>close</button>
        {children}
      </div>
    </div>
  )
}

export default ProductPopup

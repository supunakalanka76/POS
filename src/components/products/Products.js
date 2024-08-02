import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './products.css';

function Products() {
  return (
    <div className='products'>
      
      <div className='product-search'>
        <div className='product-search-bar'>
          <div className='row'>
            <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

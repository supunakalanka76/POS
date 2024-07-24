import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Home.css';

function Home() {
  return (
    <div className='home'> 
      <div className='search-bar'>
      <span className="material-icons-outlined search">search</span>
        <input className='search-Bar' id='product' placeholder='Search Here...' list='items' />
          <datalist id='items'>
            <option value='Electronics'/>
            <option value='Clothing'/>
            <option value='Groceries'/>
            <option value='Home'/>
            <option value='Books'/>
            <option value='Stationery'/>
            <option value='Miscellaneous'/>
          </datalist>

          <div className='category'>
        <button className="btn-category">Category</button>
      </div>
      {/* <div className='home-table'>
        <p>Table</p>
      </div> */}
      </div>
    </div>

  )
}

export default Home
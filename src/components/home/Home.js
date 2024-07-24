import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Home.css';

function Home() {
  return (
    <div className='home'> 
      <div className='search-bar'>
      <span className="material-icons-outlined search">search</span>
        <input className='search-Bar' id='search' placeholder='Search Here...' list='items' />
          <datalist class='items'>
            <option value='Electronics'></option>
            <option value='Clothing'></option>
            <option value='Groceries'></option>
            <option value='Home'></option>
            <option value='Books'></option>
            <option value='Stationery'></option>
            <option value='Miscellaneous'></option>
          </datalist>

          <div className='category'>
        <button className="btn-category">Category</button>
      </div>
      </div>
      
    </div>

  )
}

export default Home

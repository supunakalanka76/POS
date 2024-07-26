import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Home.css';

function Home() {
  return (
    <div className='home'> 
      <div className='search-bar'>
      <div className='search-Bar'>
        <div className='row'>
        <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
        </div>
      </div>
      <div className='category'>
        <button className='btn-category'>Category</button>
      </div>
      </div>
      <div className='table1'>
        <table className='product-table1'>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Product 1</td>
            <td>100</td>
            <td>Rs. 100</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Product 2</td>
            <td>50</td>
            <td>Rs. 200</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Product 3</td>
            <td>80</td>
            <td>Rs. 300</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Product 4</td>
            <td>120</td>
            <td>Rs. 400</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Product 5</td>
            <td>70</td>
            <td>Rs. 500</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Product 6</td>
            <td>150</td>
            <td>Rs. 600</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
        </table>
      </div>
      <div className='payment'>
        <div className='payment-header'>
          <div className='payment-header-text'>
            <h1>Reciept</h1>
            <h4>Company Name</h4>
            <div className='payment-header-icon'>
            <span className='material-icons-outlined local-mall'>local_mall</span>
            </div>
          </div>
        </div>
        <div className='payment-list'>
          <div>
            <div className='p1'>Product 1 - 100 x Rs. 100 = Rs. 1000</div>
            <div className='p1'>Product 2 - 50 x Rs. 200 = Rs. 1000</div>
            <div className='p1'>Product 3 - 80 x Rs. 300 = Rs. 2400</div>
            <div className='p1'>Product 4 - 120 x Rs. 400 = Rs. 4800</div>
            <div className='p1'>Product 5 - 70 x Rs. 500 = Rs. 3500</div>
            <div className='p1'>Product 6 - 150 x Rs. 600 = Rs. 9000</div>
          </div>
        </div>
        <div className='payment-footer'>
          <div>
            Total: <span className=''>Total</span>
          </div>
          <div>
            <button className='btn-payment'>Payment</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
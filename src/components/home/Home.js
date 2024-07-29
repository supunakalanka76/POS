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
          <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>1</td>
            <td>Product 1</td>
            <td>100</td>
            <td>Rs. 100</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          </tbody>
          
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
          <tr>
            <td>7</td>
            <td>Product 7</td>
            <td>180</td>
            <td>Rs. 700</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Product 8</td>
            <td>200</td>
            <td>Rs. 800</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>9</td>
            <td>Product 9</td>
            <td>250</td>
            <td>Rs. 900</td>
            <td><span className='material-icons delete-btn'>delete</span></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Product 10</td>
            <td>300</td>
            <td>Rs. 1000</td>
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
          </div>
        </div>
        <div className='payment-footer'>
          <div className='place-pay'>
            <h2>Total:  Rs. </h2><br/>
            <h2>Tax:  Rs. </h2><br/>
            <h2>Discount:  Rs. </h2><br/>

            <div className='sub'>
              <h2>Subtotal:  Rs. </h2>
            </div>
          
            <div className='pay'>
            <button className='btn-payment'>Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
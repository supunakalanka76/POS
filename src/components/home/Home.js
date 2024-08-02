import React, { useState } from 'react'
import 'material-icons/iconfont/material-icons.css';
import './Home.css';
import PaymentPopup from './PaymentPopup';

function Home() {

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const openPopup = () => setIsOpenPopup(true);
    const closePopup = () => setIsOpenPopup(false);

    
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = ['category1', 'category2', 'category3'];

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };

    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      setDropdownVisible(false);
    };



  return (
    <div className='Home'>
      <PaymentPopup isOpen={isOpenPopup} isClose={closePopup}>
        <div className='popup-content'>
          <h2>Payment Successful</h2>
          <p>Thank you for your purchase.</p>
        </div>
      </PaymentPopup>
    <div className='home'> 
      <div className='search-bar'>
      <div className='search-Bar'>
        <div className='row'>
        <input type='text' id='input-box' placeholder={selectedCategory || 'Search Here...'} autoCapitalize='off'/>
        </div>
      </div>
      <div className='category'>
        <button className='btn-category' onClick={toggleDropdown}>
          Category
        </button>
        {dropdownVisible && (
          <div className='dropdown-menu'>
            {categories.map((category, index) => (
              <div key={index} className='dropdown-item' onClick={() => handleCategorySelect(category)}>
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

      <div className="table1">
        <table className="product-table1">
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
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product 2</td>
              <td>50</td>
              <td>Rs. 200</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product 3</td>
              <td>100</td>
              <td>Rs. 100</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Product 4</td>
              <td>50</td>
              <td>Rs. 200</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Product 5</td>
              <td>100</td>
              <td>Rs. 100</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Product 6</td>
              <td>50</td>
              <td>Rs. 200</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Product 7</td>
              <td>100</td>
              <td>Rs. 100</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Product 8</td>
              <td>50</td>
              <td>Rs. 200</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Product 9</td>
              <td>100</td>
              <td>Rs. 100</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Product 10</td>
              <td>50</td>
              <td>Rs. 200</td>
              <td><span className="material-icons delete-btn">delete</span></td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
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

            <div className='line'></div>
            <div className='sub'>
              <h2>Subtotal:  Rs. </h2>
            </div>
          
            <div className='pay'>
            <button className='btn-payment' onClick={openPopup}>Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Home
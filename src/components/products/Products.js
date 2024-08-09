import React, { useState } from 'react'
import 'material-icons/iconfont/material-icons.css';
import './products.css';
import ProductPopup from './ProductPopup';
import vodka from '../..//images/vodka.png'

function Products() {

  const products = {
    description: 'A refreshing and aromatic spirit made from fermented grape juice, often served with a sweet and tangy flavor.',
    price: '10,500',
  };

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const openPopup = () => setIsOpenPopup(true);
  const closePopup = () => setIsOpenPopup(false);

  return (
    <div className='Products'>
      <ProductPopup isOpen={isOpenPopup} isClose={closePopup}>
        <div className='product-popup-content'>

          <div className='product-image'>
            <img src={vodka} alt="" />
          </div>

          <div className='product-details'>
            <div className='product-details-header'>
              <h2>Product Name</h2>
              <h4>Category Name</h4>
            </div>
            
            <div className='product-details-tabs'>
              <span>Description</span>
              <span>Features</span>
              <span>Specs</span>
            </div>

            {/* <div className='product-details-p'> */}
              <p className='product-description'>{products.description}</p>
              <p className='product-price'>Price: Rs. {products.price}</p>
            {/* </div> */}

            <div className='product-details-footer'>
              <button className="inquiry-button">Inquiry</button>
              <button className="remove-button">Remove</button>
            </div>

          </div>
        </div>
      </ProductPopup>

    <div className='products'>
      <div className='product-search'>
        <div className='product-search-bar'>
          <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off' />
        </div>
      </div>

      <div className='product-info'>
        <div className='product-filters'>
        <p>All</p>
        <p>Electronics</p>
        <p>Accessories</p>
        <p>Home & Garden</p>
        <p>Sports & Outdoors</p>
        <p>Books</p>
        </div>

        <div className='table4'>
          <table className='product-table'>
            <thead>
              <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Status</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345678</td>
                <td>Laptop</td>
                <td>Rs. 12,000</td>
                <td>50</td>
                <td>Available</td>
                <td><button className='view-btn' onClick={openPopup}>view</button></td>
              </tr>

              <tr>
                <td>90123456</td>
                <td>Mobile</td>
                <td>Rs. 5,000</td>
                <td>100</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>65748392</td>
                <td>NVME - 128GB</td>
                <td>Rs. 2,000</td>
                <td>20</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>10192873</td>
                <td>Vodka - AB</td>
                <td>Rs. 4,800</td>
                <td>0</td>
                <td>Unavailable</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>65748392</td>
                <td>NVME - 128GB</td>
                <td>Rs. 2,000</td>
                <td>20</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>90123456</td>
                <td>Mobile</td>
                <td>Rs. 5,000</td>
                <td>100</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>12345678</td>
                <td>Laptop</td>
                <td>Rs. 12,000</td>
                <td>50</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>65748392</td>
                <td>NVME - 128GB</td>
                <td>Rs. 2,000</td>
                <td>20</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>65748392</td>
                <td>NVME - 128GB</td>
                <td>Rs. 2,000</td>
                <td>20</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>65748392</td>
                <td>NVME - 128GB</td>
                <td>Rs. 2,000</td>
                <td>20</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>

              <tr>
                <td>65748392</td>
                <td>NVME - 128GB</td>
                <td>Rs. 2,000</td>
                <td>20</td>
                <td>Available</td>
                <td><button className='view-btn'>view</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )

}
export default Products

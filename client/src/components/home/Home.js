import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'material-icons/iconfont/material-icons.css';
import './Home.css';
import PaymentPopup from './PaymentPopup';

function Home() {

  // function activeButtonHandle (event) {
  //   const buttons = document.querySelectorAll('.payment-methods');
  //   buttons.forEach (link => link.classList.remove('active'));
  //   event.currentTarget.classList.add('active');
  // }

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const openPopup = () => setIsOpenPopup(true);
    const closePopup = () => setIsOpenPopup(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get('http://localhost:8080/products');
            setProducts(res.data);
          }
        catch (error) {
          console.log(error);
        }
      }
      getProducts();
    },[])

  console.log(products);

  return (
    <div className='Home'>
      <PaymentPopup isOpen={isOpenPopup} isClose={closePopup}>
        <div className='popup-content'>

          <div className='payment-methods'>
            <div>Cash</div>
            <div>Card</div>
            <div>Cheque</div>
            <div>Bank</div>
            <div>Reedem</div>
            <div>Points</div>

            <div className='user-info'>
            Supun Akalanka <br/>
            <span>supunakalanka76@gmail.com</span>
            </div>
          </div>

          <div className='payment-detail'>
            <div className='field'>
              <label>Cash:</label>
              <input type="text" />
            </div>

            <div className='field'>
              <label>Tax:</label>
              <input type="text" />
            </div>

            <div className='field'>
              <label>Points:</label>
              <input type="text" />
            </div>

            <div className='field'>
              <label>Discount:</label>
              <input type="text" />
            </div>

            <div className='field'>
              <label>Total Due:</label>
              <input type="text" />
            </div>

            <div className='field'>
              <label>Completed:</label>
              <input type="text" className='completed-input' />
            </div>

            <div className='field'>
              <label>Balance:</label>
              <input type="text" className='balance-input' />
            </div>
          </div>

          <div className='buttons'>
            <button className='cancel-btn'>Cancel</button>
            <button className='done-btn'>Done</button>
          </div>
        </div>
      </PaymentPopup>
    <div className='home-section'>
      <div className='section-A'>
        <div className='home-search'>
          <div className='home-search-bar'>
            <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off' />
          </div>
          <div className='result-box'>
            {/* {
              products.map((product) => (
                <li key={product.id}>
                  {product.name}
                </li>
              ))
            } */}
          </div>
          <button className='btn-category'>Category</button>
        </div>

        <div className='home-product-info'>
          <div className='home-product-filters'>
            <p>All</p>
            <p>Food</p>
            <p>Drinks</p>
            <p>Accessories</p>
            <p>Costumes</p>
            <p>Electronics</p>
          </div>

          {/* <div className='table4'>
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
              {
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>Available</td>
                    <td><button className='view-btn' onClick={openPopup}>view</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div> */}
          <div className='home-product-box'>
            <div className='product-box'>
              <div className='product-box-header'>
                <h3>Chicken Burger</h3>
              </div>
              <div className='product-box-description'>
                <p>
                A chicken burger is a sandwich with a juicy chicken patty, fresh veggies, and sauces, served in a soft bun.</p>
              </div>
              <div className='product-box-footer'>
                <h3>LKR 1000</h3>
                <p>x1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-B'>
        <div className='payment-header'>
          <div className='payment-header-text'>
            <h1>CURRENT ORDER</h1>
            <h4>Company Name</h4>
          </div>

          <div className='payment-header-icon'>
            <span className='material-icons-outlined local-mall'>local_mall</span>
          </div>
        </div>

        <div className='product-list'>
          <div className='product-list-details'>
            <div className='product-name'>
              <p>Chicken Burger</p>
            </div>
            <div className='product-quantity'>
              <button className='material-icons-outlined remove-icon'>remove</button>
              <h5>1</h5>
              <button className='material-icons-outlined plus-icon'>add</button>
            </div>
            <div className='product-price'>
              <p>750LKR</p>
            </div>
            <div className='product-icon-percentage'>
              <span className='material-icons-outlined percent-icon'>percent</span>
            </div>
            <div className='product-icon-delete'>
              <span className='material-icons-outlined delete-icon'>delete</span>
            </div>
          </div>
        </div>

        <div className='payment-footer'>
          <div className='place-pay'>
            <div className='total-pay'>
              <h3>Total:</h3>
              <h4>750 LKR</h4>
            </div>
            <div className='discount-pay'>
              <h3>Discount:</h3>
              <h4>0 LKR</h4>
            </div>
            <div className='tax-pay'>
              <h3>Tax:</h3>
              <h4>0 LKR</h4>
            </div>
          </div>

          <div className='sub-total'>
            <div className='sub-total-pay'>
              <h3>Sub Total:</h3>
              <h4>750 LKR</h4>
            </div>
          </div>

          <div className='pay'>
            <button className='pay-btn' onClick={openPopup}>Place Order</button>
          </div>

        </div>
      </div>
      
    </div>
    </div>

  )
}

export default Home
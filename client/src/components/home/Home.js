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
            {
              products.map((product) => (
                <li key={product.id}>
                  {product.name}
                </li>
              ))
            }
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
        </div>
      </div>

      <div className='section-B'>
        <div className='payment-header'>
          <div className='payment-header-text'>
            <h1>Reciept</h1>
            <h4>Company Name</h4>
          </div>

          <div className='payment-header-icon'>
            <span className='material-icons-outlined local-mall'>local_mall</span>
          </div>
        </div>

        <div className='payment-list'>
          <div>
            <div className='p1'>Product 1 - 100 x Rs. 100 = Rs. 1000</div>
            <div className='p1'>Product 2 - 50 x Rs. 200 = Rs. 1000</div>
            <div className='p1'>Product 3 - 80 x Rs. 300 = Rs. 2400</div>
            <div className='p1'>Product 4 - 70 x Rs. 400 = Rs. 2800</div>
            <div className='p1'>Product 5 - 60 x Rs. 500 = Rs. 3000</div>
            <div className='p1'>Product 6 - 90 x Rs. 600 = Rs. 5400</div>
            <div className='p1'>Product 7 - 100 x Rs. 700 = Rs. 7000</div>
            <div className='p1'>Product 8 - 120 x Rs. 800 = Rs. 9600</div>
            <div className='p1'>Product 9 - 150 x Rs. 900 = Rs. 13500</div>
            <div className='p1'>Product 10 - 180 x Rs. 1000 = Rs. 18000</div>
          </div>
        </div>

        <div className='payment-footer'>
          <div className='place-pay'>
            <h3>Total:  Rs. </h3>
            <h3>Tax:  Rs. </h3>
            <h3>Discount:  Rs. </h3>
          </div>

          <div className='sub-total'>
            <h3>Sub Total: Rs. </h3>
          </div>

          <div className='pay'>
            <button className='pay-btn' onClick={openPopup}>Payment</button>
          </div>

        </div>
      </div>
      
    </div>
    </div>

  )
}

export default Home
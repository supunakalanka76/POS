import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'material-icons/iconfont/material-icons.css';
import './Home.css';
import PaymentPopup from './PaymentPopup';
import DiscountPopup from './DiscountPopup';

function Home() {

  // function activeButtonHandle (event) {
  //   const buttons = document.querySelectorAll('.payment-methods');
  //   buttons.forEach (link => link.classList.remove('active'));
  //   event.currentTarget.classList.add('active');
  // }

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const openPopup = () => setIsOpenPopup(true);
    const closePopup = () => setIsOpenPopup(false);

    const [isOpenDiscountPopup, setIsOpenDiscountPopup] = useState(false);
    const openDiscountPopup = () => setIsOpenDiscountPopup(true);
    const closeDiscountPopup = () => setIsOpenDiscountPopup(false);

    const [products, setProducts] = useState([]);

    const [searchItem, setSearchItem] = useState('');

    const filteredProducts = products.filter(
      product => product.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    const [addedProducts, setAddedProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const addedProductsToReciept = (product) => {
      product.quantity -= 1;
      setTotal(total + product.price);
      setAddedProducts(previousProducts => [
        ...previousProducts, {...product, quantity: 1, price: product.price}
      ]);
      setSearchItem('');
    }

    const handleQuantity = (index, action) => {
      const updatedQuantity = [...addedProducts];
      if (action === 'add') {
        updatedQuantity[index].quantity += 1;
        const addedId = addedProducts[index].id - 1;
        products[addedId].quantity -= 1;
        // const rawTotal = updatedQuantity[index].quantity * updatedQuantity[index].price;
        setTotal(total + updatedQuantity[index].price);
        if (products[addedId].quantity < 1) {
          alert ('Out of Stock');
        }
      }
      else if (action === 'subtract' && updatedQuantity[index].quantity > 1) {
        updatedQuantity[index].quantity -= 1;
        const addedId = addedProducts[index].id - 1;
        products[addedId].quantity += 1;
        setTotal(total - updatedQuantity[index].price);
      }
      setAddedProducts(updatedQuantity);
      setProducts(previousProducts => [
       ...previousProducts
      ]);
    }

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

      <DiscountPopup disOpen={isOpenDiscountPopup} disClose={closeDiscountPopup}>
        <div className='discount-popup-content'>
          <div className='discount-popup-content-header'>
            <h3>Apply Discount</h3>
          </div>

          <div className='discount-details'>
            <div className='discount-type'>
              <label>Discount Type:</label>
              <input type='radio' id='percentage' name='discountType' value='percentage' />
              <label for='percentage'>Percentage</label>
              <input type='radio' id='amount' name='discountType' value='amount' />
              <label for='amount'>Amount</label>
            </div>
            <div className='discount-amount'>
              <label>Discount (%):</label>
              <input type='text' placeholder='Discount Amount' />
            </div>
          </div>

          <div className='discount-buttons'>
            <button className='cancel-btn'>Cancel</button>
            <button className='done-btn'>Apply</button>
          </div>
        </div>
      </DiscountPopup>

    <div className='home-section'>
      <div className='section-A'>
        <div className='home-search'>
          <div className='home-search-bar'>
            <input 
              onChange = {
                (e) => setSearchItem (e.target.value)
              }
              value={searchItem}
              type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off' 
            />
          </div>
          <div className='result-box'>
            {/* {
              filteredProducts.map((product) => (
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

          <div className='home-product-box'>
            { filteredProducts.map ((product) => (
              <div onClick={() => addedProductsToReciept(product)} className='product-box'>
                <div className='product-box-header'>
                  <h3>{product.name}</h3>
                </div>
                <div className='product-box-description'>
                  <p>{product.description}</p>
                </div>
                <div className='product-box-footer'>
                  <h3>{product.price}</h3>
                  <p>x{product.quantity}</p>
                </div>
              </div>
            ))}
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
          
          {
            addedProducts.map ((product, index) => (
              <div key={index} className='product-list-details'>
                <div className='product-name'>
                  <p>{product.name}</p>
                </div>
                <div className='product-quantity'>
                  <button onClick={() => handleQuantity (index, 'subtract')} className='material-icons-outlined remove-icon'>remove</button>
                  <h5>{product.quantity}</h5>
                  <button onClick={() => handleQuantity (index, 'add')} className='material-icons-outlined plus-icon'>add</button>
                </div>
                <div className='product-price'>
                  <p>{product.price * product.quantity}LKR</p>
                </div>
                <div className='product-icon-percentage'>
                  <span onClick={openDiscountPopup} className='material-icons-outlined percent-icon'>percent</span>
                </div>
                <div className='product-icon-delete'>
                  <span className='material-icons-outlined delete-icon'>delete</span>
                </div>
              </div>
            ))
          }

        </div>

        <div className='payment-footer'>
          <div className='place-pay'>
            <div className='total-pay'>
              <h3>Total:</h3>
              <h4>{total} LKR</h4>
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
              <h4>{total} LKR</h4>
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
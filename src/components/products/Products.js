import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import './products.css';

function Products() {

  const products = [
    {id: '12345678', name: 'Laptop', price:'$2500', quantity: '123', status: 'Available'},
    {id: '98765432', name: 'Mobile', price:'$1500', quantity: '500', status: 'Available'},
    {id: '32165478', name: 'NVME - 128GB', price:'$500', quantity: '200', status: 'Unavailable'},
    {id: '65432189', name: 'Mouse', price:'$10', quantity: '100', status: 'Available'},
    {id: '78945612', name: 'Keyboard', price:'$20', quantity: '300', status: 'Unavailable'},
    {id: '45678912', name: 'Monitor', price:'$1200', quantity: '100', status: 'Unavailable'},
    {id: '12398765', name: 'Headphones', price:'$70', quantity: '100', status: 'Available'},
    {id: '23456798', name: 'Router', price:'$100', quantity: '50', status: 'Available'},
    {id: '56789123', name: 'Printer', price:'$300', quantity: '20', status: 'Available'},
    {id: '89123456', name: 'Mouse Pad', price:'$20', quantity: '20', status: 'Available'},

  ];

  return (
    <div className='products'>
      
      <div className='product-search'>
        <div className='product-search-bar'>
          <div className='row'>
            <input type='text' id='input-box' placeholder='Search Here...' autoCapitalize='off'/>
          </div>
        </div>
      </div>

      <div className='product-categories'>
        <p>All</p>
        <p>Electronics</p>
        <p>Accessories</p>
        <p>Home & Garden</p>
        <p>Sports & Outdoors</p>
        <p>Books</p>
      </div>

      <div className='table3'>
        <table className='product-table3'>
          <thead>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td className= {product.status === 'Available' ? 'status-available' : 'status-unavailable'}>
                  {product.status}
                </td>
                <td><span className='view-btn'>view</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products

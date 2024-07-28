import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Sales from './components/sales/Sales';
import Inventory from './components/inventory/Inventory';
import Products from './components/products/Products';
import Customers from './components/customers/Customers';
import Transactions from './components/transactions/Transactions';
import Reports from './components/reports/Reports';
import Settings from './components/settings/Settings';
import Header from './shared/Header';
import Navbar from './shared/Navbar';

function App() {
  return (
    <Router>

      <div className="App">
      <div className='Navbar'>
        <Navbar/>
        </div>

      <div className='Content'>
        <Header/>

        <div className='dynamic-content'>
          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/transactions' element={<Transactions/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>

      </div>
      

    </div>

    </Router>
    
  );
}

export default App;

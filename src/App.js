import './App.css';
import Home from './components/home/Home';
import Header from './shared/Header';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="App">
      <div className='Navbar'><Navbar/></div>

      <div className='Content'>
        <Header/>
        <Home/>
      </div>

    </div>
  );
}

export default App;

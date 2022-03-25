import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Cart from './Cart/Cart';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([])
  // console.log(cart);

  const handleAddToCart = gun => {
    const newCart = [...cart, gun]
    setCart(newCart);
    console.log(newCart);
  }

  useEffect(() => {

    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, [])
  return (

    <div className="App">
      <Navbar></Navbar>
      <div>
        {
          cart.map((item) => (<h1 key={item.id}>{item.name}</h1>))
        }
      </div>
      <div className='card-container'>
        {
          guns.map((gun) => (< Cart key={gun.id} data={gun} handleAddToCart={handleAddToCart}></Cart>))
        }
      </div>
    </div >
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Cart from './Cart/Cart';

function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);

  useEffect(() => {

    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, [])
  return (
    <div className="App">
      <Navbar></Navbar>

      {
        guns.map((gun) => (< Cart key={gun.id}> data={gun}</Cart>))
      }
    </div >
  );
}

export default App;

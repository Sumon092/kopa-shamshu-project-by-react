import React from 'react';
import './Cart.css'
import { BsFillCartFill } from "react-icons/bs";

const Cart = ({ data, handleAddToCart }) => {
    // console.log(data);
    const { img, name, capacity, bullet, price, id } = data;

    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt=""></img>
            </div>
            <div className='gun-info'>
                <h3>Name:{name}</h3>
                <p>Bullet : {bullet}</p>
                <p>Capacity : {capacity}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(data)}>
                    <BsFillCartFill className='icon'></BsFillCartFill>
                </button>
                <h1>Price :$ {price}</h1>
            </div>
        </div>
    );
};

export default Cart;
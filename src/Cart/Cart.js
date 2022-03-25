import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const { img, name, capacity, bullet, price } = props.data;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt=""></img>
            </div>
            <h3>Name:{name}</h3>
            <p>Bullet : {bullet}</p>
            <p>Capacity : {capacity}</p>
            <div>
                <button>
                    Add to Cart
                </button>
                <h1>Price :$ {price}</h1>
            </div>
        </div>
    );
};

export default Cart;
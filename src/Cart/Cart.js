import React from 'react';

const Cart = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Cart Name: {props.name}</h2>
        </div>
    );
};

export default Cart;
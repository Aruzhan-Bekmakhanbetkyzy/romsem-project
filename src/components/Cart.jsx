import React from 'react';
import "../styles/Cart.scss";


const Cart = () => {
    return (
        <div className='cart'>
            <h1>Your cart in empty</h1>
            <p>Add something faster</p>
            <div className='info'>
                <h3>Free shipping from 40usd</h3>
            </div>
        </div>
    );
};

export default Cart;
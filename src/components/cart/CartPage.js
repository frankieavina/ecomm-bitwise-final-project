import React, { Component } from 'react';
import CartForm from './CartForm';

const CartPage = () => {
    return (
        <div>
            <div style={{display:'flex', justifyContent:"center", margin:"1.25rem", padding:"1.25rem"}}>
                <h1>Your Shopping Cart</h1>
            </div>
            <CartForm/>
        </div>
            

    )
}

export default CartPage 
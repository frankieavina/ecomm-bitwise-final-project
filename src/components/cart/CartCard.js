import React, { Component } from 'react';
import { useContext } from 'react';
import './CartCard.css';
// context 
import CartContext from '../../context/CartContext';
// bootstrap 
import { Card, Button} from 'react-bootstrap';

const CartCard = ({
    title="",
    id=null,
    image="",
    price=null,
    quantity=null,
}) => {

    //context 
    const { removeFromCart } = useContext(CartContext);

    return ( 
        <Card style={{ width: '18rem', boxShadow:'1px 3px #888888', margin:'1.25rem', padding:'1.25rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div>
                        <h5>${price}</h5>
                        <h7>Quantity: {quantity}</h7>
                    </div>
                </Card.Text>
                <Button variant="danger" onClick={()=>{removeFromCart(id)}}>Remove</Button>
            </Card.Body>
        </Card>
    )
}

export default CartCard; 
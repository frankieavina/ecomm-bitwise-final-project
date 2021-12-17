import React, { Component } from 'react';
import { useContext, useState } from 'react';
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
    const { updateQuantity } = useContext(CartContext); 

    //usestate 
    const [quantityNew, setQuantity] = useState(quantity);

    // function to update quantity 
    let numInput = React.createRef(); 
    function handleInputChange(){
        setQuantity(numInput.current.value);
        updateQuantity(id, numInput.current.value);
    }

    return ( 
        <Card style={{ width: '18rem', boxShadow:'1px 3px #888888', margin:'1.25rem', padding:'1.25rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div>
                        <h5>${price}</h5>
                        <label>Quantity: </label> 
                      <input 
                        type='number' 
                        value={quantityNew} 
                        style={{width:'3rem'}} 
                        ref={numInput}
                        onChange={handleInputChange}/>
                    </div>
                </Card.Text>
                <Button variant="danger" onClick={()=>{removeFromCart(id)}}>Remove</Button>
            </Card.Body>
        </Card>
    )
}

export default CartCard; 
import React, { Component } from 'react';
import { useContext } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './CartCard.css';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';
// context 
import CartContext from '../../context/CartContext';
// bootstrap
import { Button } from 'react-bootstrap';

const CartForm = () => {

    const { productsInCart } = useContext(CartContext);
    //console.log(productsInCart);
    
    let subtotal = 0; 
    productsInCart.map((products)=> {
        subtotal += Math.round((products.price*products.quantity)*100)/100; 
    });


    return (
        <Container>
            <Row className="CartBody">
                {productsInCart.map((products) => (
                    <CartCard
                        title={products.title}
                        id={products.id}
                        image={products.image}
                        price={products.price}
                        quantity={products.quantity}
                    />
                ))}
            </Row>
            <Row className="subTotal">
                <Col md style={{display:"flex", justifyContent:"flex-end"}}>
                    <h4 style={{margin:'1.25rem', padding:'1.25rem' }}>Subtotal: ${subtotal}</h4>
                </Col> 
            </Row>
            <Row>
                <Col md style={{margin:"1.25rem", padding:"1.25rem"}}>
                    <Link to={'/'}>
                        <Button style={{margin:'1.25rem', padding:'1.25rem' }} variant="success">Continue Shopping</Button>
                    </Link>
                </Col>
                <Col md style={{display:"flex", justifyContent:"flex-end", margin:"1.25rem", padding:"1.25rem"}}>
                    <Link to={'/checkout'}>
                        <Button style={{margin:'1.25rem', padding:'1.25rem' }} variant="primary">Checkout</Button>
                    </Link>
                </Col>
            </Row>
        </Container>

    );
};

export default CartForm; 
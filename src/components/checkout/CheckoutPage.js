import React, { Component } from 'react';
import CheckoutPageForm from './CheckoutPageForm';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import './Checkout.css';
// react material
import AddCardIcon from '@mui/icons-material/AddCard';
import LockIcon from '@mui/icons-material/Lock';

const CheckoutPage = () => {

    const { productsInCart } = useContext(CartContext);
    console.log('In checkout page:', productsInCart);

    let subtotal = 0; 
    productsInCart.map((products)=> {
        subtotal += Math.round((products.price*products.quantity)*100)/100; 
    });

    return (
        <div className="body">

            <div style={{display:'flex', justifyContent:"center", margin:"1.25rem", padding:"1.25rem"}}>
                <h1>Checkout</h1>
            </div>

            <div className="orderSummary">
                <h5>Order Summary</h5>
                {productsInCart.map((products) => (
                    <CheckoutPageForm
                        title={products.title}
                        id={products.id}
                        image={products.image}
                        price={products.price}
                        quantity={products.quantity}
                        subtotal={subtotal}
                    />
                ))}
                <div>
                    <div className="">
                        <h4 style={{margin:'1.25rem', padding:'1.25rem' }}>Subtotal: ${subtotal}</h4>
                    </div>
                </div>
            </div>

            <div className="shippingBody">
                <h5>Shipping Address</h5>
                <Form className='address'>
                    <Row className="g-2">
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Zip / Postal Code</Form.Label>
                                <Form.Control type="text" placeholder="Postal Code" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md>
                            <FloatingLabel className="mb-3" controlId="floatingSelectGrid" label="Select Shipping">
                                <Form.Select aria-label="Floating label select example">
                                    <option value="1">USPS First Class Shipping: $7.00</option>
                                    <option value="2">USPS Priority Shipping: $10.00</option>
                                    <option value="3">USPS Express Shipping: $20.00</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Shipping Address Same as Billing" />
                        </Form.Group>
                    </Row>
                </Form>
            </div>

            <div className="payment">
                <h5>Payment Method</h5>
                <Form className="address">
                    <Row>
                        <Col md>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <AddCardIcon style={{marginRight:"0.5rem"}}/>
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Card Number" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col md>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <LockIcon style={{marginRight:"0.5rem"}}/>
                            <Form.Label>MM/YY CVC</Form.Label>
                            <Form.Control type="password" placeholder="MM/YY CVC" />
                        </Form.Group> 
                        </Col>   
                    </Row>
                </Form>
            </div>

            <div className="buttonPay">
                <Link to={'/'}>
                    <Button style={{margin:'1.25rem', padding:'1.25rem' }} variant="primary">PAY {subtotal}</Button>
                </Link>
            </div>

        </div>
    );
};

export default CheckoutPage 
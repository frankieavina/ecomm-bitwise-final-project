import React, { Component } from 'react';
//bootstrap
import { Table, Button } from 'react-bootstrap';
// routing
import { Link } from 'react-router-dom';


const CheckoutPageForm = ({
    title="",
    id=null,
    image="",
    price=null,
    quantity=null,
    subtotal=null, 
}) => {


    return (
        <Table striped bordered hover style={{margin:'1.25rem', padding:'1.25rem', width:'70vh' }} >
            <thead>
                <tr>
                <th>Quantity</th>
                <th>Title</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{quantity}</td>
                <td>{title}</td>
                <td>${price}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default CheckoutPageForm
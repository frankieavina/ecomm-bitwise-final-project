import { useContext } from "react";
import * as React from 'react';
// importing react material 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// bootstrap and css 
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import './ProductCard.css';
import { Col, Row } from "react-bootstrap";
// import routing 
import { Link } from "react-router-dom";



const ProductCard = ({ id='', title='', category='', description='', image='',
                       price='', rating=''
                    }) => 
{

    return(
        // <Link to={`products/${id}`}>
            <Col className="ProdCard" style={{marginTop:'10px'}}>
                <Card style={{ width: '15rem'}}>
                    <Link to={`products/${id}`}>
                    <Card.Img variant="top" src={image} style={{padding:'20px', boxShadow:'1px 0px #888888'}}/>
                    </Link>
                    <Card.Body style={{padding:'10px', boxShadow:'1px 3px #888888'}}>
                        <Link className='prodTitle' to={`products/${id}`}><Card.Title >{title}</Card.Title></Link>
                        <Card.Text>${price}</Card.Text>
                        <AddShoppingCartIcon/>
                    </Card.Body>
                </Card>
            </Col>

    );

};

export default ProductCard;            
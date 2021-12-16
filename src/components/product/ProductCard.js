import { useContext } from "react";
import * as React from 'react';
// importing react material 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Rating } from "@mui/material";
// bootstrap and css 
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import './ProductCard.css';
import { Col, Row } from "react-bootstrap";
// import routing 
import { Link } from "react-router-dom";
// cart context 
import CartContext from "../../context/CartContext";
import ProductsContext from "../../context/ProductsContext";



const ProductCard = ({ id='', title='', category='', description='', image='',
                       price='', rating=''
                    }) => 
{

    //cart context 
    const { addToCart } = useContext(CartContext); 
    const { products } = useContext(ProductsContext);

    const product = products.find((product)=>{ return product.id === id});

    function onClickHandler(){
            console.log('hello world')
            addToCart({...product, quantity: 1})
    }

    return(
            <Col className="ProdCard" style={{marginTop:'10px'}}>
                <Card style={{ width: '15rem', borderRadius: "0.5rem 0.5rem"}}>
                    <Link to={`products/${id}`}>
                    <Card.Img variant="top" src={image} style={{padding:'20px', boxShadow:'1px 0px #888888'}}/>
                    </Link>
                    <Card.Body style={{padding:'10px', boxShadow:'1px 3px #888888'}}>
                        <Link className='prodTitle' to={`products/${id}`}><Card.Title >{title}</Card.Title></Link>
                        <div style={{display:'flex', justifyContent:"space-between"}}>
                            <Card.Text>${price}</Card.Text>
                            <AddShoppingCartIcon className="addToCart" onClick={()=> onClickHandler() }/> 
                        </div>
                        <div style={{display:"flex", justifyContent:'flex-start'}}>
                            <Rating name="read-only" value={rating.rate} readOnly />
                            <p>({rating.count})</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

    );

};

export default ProductCard;            
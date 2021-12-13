import React from 'react';
// import params to get id of product 
import { Route, useParams } from 'react-router'
// import css
import './ProductDetail.css'
// import context 
import ProductsContext from '../../context/ProductsContext'
import CartContext from '../../context/CartContext';
import { useContext , useState} from 'react';
// importing boostrap 
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductDetailCard = () => {

    // useState
    const [quantity , setQuantity] = useState(1);

    // react use ref to get input values
    let numInput = React.createRef();

    // constants for id and referencing product objects 
    const { productId } = useParams();
    const { products } = useContext(ProductsContext);

    //cart context 
    const { addToCart } = useContext(CartContext); 
  
    // returns the value of the first element in the provided object that satisfies the provided testing function(id=params id)
    const product = products.find((product)=>{ return product.id === Number(productId)})

    //function to update quantity
    function handleInputChange(){
      setQuantity(numInput.current.value);
    }

    //function to add to cart 
    function onClickHandler(){
      addToCart({...product, quantity: numInput.current.value})
    }

    return (

      <div className='ProdPage'>
        <Image className='ProdImage' src={product?.image}/>

        <Card className='ProdCard'>
            <Card.Header className="titleProd">{product?.title}</Card.Header>
            <Card.Body>
                <Card.Text style={{margin:'1.25rem', padding:'1.25rem' }}>
                  <label>Category: </label>{product?.category}
                </Card.Text>
                <Card.Text>
                  <Row style={{margin:'1.25rem', padding:'1.25rem' }}>
                    <Col>
                      <label>Price: </label> 
                      <input value={product?.price} readOnly/>
                    </Col>
                  </Row>
                  <Row style={{margin:'1.25rem', padding:'1.25rem' }}>
                    <Col md>
                      <label>Quantity: </label> 
                      <input 
                        type='number' 
                        value={quantity} 
                        style={{width:'3rem'}} 
                        ref={numInput}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row style={{margin:'1.25rem', padding:'1.25rem' }}>
                    <span>Description:</span> <p>{product?.description}</p>
                  </Row>
                </Card.Text>
                <Row style={{margin:'1.25rem', padding:'1.25rem' }}>
                  <Col md>
                    <Link to={'/'}>
                      <Button variant="secondary">Back</Button>
                    </Link>                  
                  </Col>
                  <Col md>
                      <Button variant="primary" onClick={()=> onClickHandler() }>Add to Cart</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

      </div>

    )
}

export default ProductDetailCard;
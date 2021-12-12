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


const ProductDetailCard = () => {

    // // storing data for cart 
    // const[ cart, setCart ] = useState({
    //     title:"",
    //     id: null,
    //     image: '',
    //     category: '',
    //     price: null,
    //     rating: null,
    //     description: ''
    // });
    // //function to add to cart 
    // function onClickHandler(){
    //     setCart({
    //         title: product.title,
    //         id: product.id,
    //         image: product.image,
    //         category: product.category,
    //         price: product.price,
    //         description: product.description,
    //         quantity: numInput.current.value 
    //     });
    //     addToCart({cart})
    // }

    // react use ref to get input values
    let numInput = React.createRef();

    // constants for id and referencing product objects 
    const { productId } = useParams();
    const { products } = useContext(ProductsContext);

    //cart context 
    const { addToCart } = useContext(CartContext); 
  
    // returns the value of the first element in the provided object that satisfies the provided testing function(id=params id)
    const product = products.find((product)=>{ return product.id === Number(productId)})

    //function to add to cart 
    function onClickHandler(){
        addToCart({...product, quantity: numInput.current.value})
    }

    return (

      <div className='ProdPage'>
        <Image className='ProdImage' src={product?.image}/>

        <Card className='ProdCard'>
            <Card.Header>{product?.title}</Card.Header>
            <Card.Body>
                <Card.Title>{product?.category}</Card.Title>
                <Card.Text>
                <label>Quantity:</label> 
                <input type='number' style={{width:'3rem'}} ref={numInput} />
                <p>Price:{product?.price}</p>
                <p>{product?.description}</p>
                </Card.Text>
                <Button variant="primary" onClick={()=> onClickHandler() }>Add to Cart</Button>
            </Card.Body>
        </Card>

      </div>

    )
}

export default ProductDetailCard;
import React from 'react'
import ProductsContext from '../../context/ProductsContext'
import RecommendedCard from './RecommendedCard';
import { useContext, useState } from 'react'
import { Container, Row } from 'react-bootstrap';

function RecommendedPage({category}) {

    const { products } = useContext(ProductsContext);

    const copy = [...products]; 
    const items = copy.filter((product) => product.category.includes(category));
    console.log("Rec Items:", items) 

  return (
    <>
    <h4> Customers also loved </h4>
      <div className='CardsBody'>
      {items.map((item) => (
            <RecommendedCard
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
            />
        ))}
      </div>    
    </>

                

  )
}

export default RecommendedPage
import React from 'react'
import { Card } from 'react-bootstrap'

function RecommendedCard({id, title, image, price}) {
  return (
    <Card style={{ width: '12rem', padding:'1 rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{color:'red'}}>
            ${price}
        </Card.Text>
    </Card.Body>
    </Card>
  )
}

export default RecommendedCard
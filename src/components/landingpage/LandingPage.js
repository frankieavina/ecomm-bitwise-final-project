import React from 'react'
import picture1 from '../../pictures/1.png';
import picture2 from '../../pictures/2.png'
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
        <Carousel>
        <Carousel.Item interval={8000}>
            <img
            className="d-block w-100"
            src={picture1}
            alt="First slide"
            />
            <Carousel.Caption>
            <p><span style={{color:"#626369"}}>Shop for her and him</span></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
            <img
            className="d-block w-100"
            src={picture2}
            alt="Third slide"
            />
            <Carousel.Caption>
            <p><span>Shop for Electronics</span></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <div style={{display:'flex',justifyContent:'center', margin:'1.25rem'}}>
          <Link to={'/products'}>
            <Button variant='primary'>Shop Now</Button>
          </Link>
          
        </div>
        
    </>
  )
}

export default LandingPage
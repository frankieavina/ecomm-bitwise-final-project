import React, { useContext } from 'react';
import { Card,Button, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import "./ThankYou.css"
import CartContext from '../../context/CartContext';


const ThankYouPage = () => {

    const { clearCart } = useContext(CartContext);

    const transID = uuidv4(); 

    function onClickHandler (){
        clearCart(); 
    }

    return (

        <Container style={{width: "80vh", margin:"1.25rem auto", padding:"1.25rem"}}>
            <Card className="text-center">
                <Card.Header>Frank's</Card.Header>
                <Card.Body>
                    <Card.Title>Thank You</Card.Title>
                    <Card.Text >
                        <Row>
                            <p>For supporting our small buisness.Below is a copy of your transaction number.</p>
                        </Row>
                        <Row>
                            <p>Transaction Number: {transID}</p>
                        </Row>
                    </Card.Text>
                        <Link to="/">
                            <Button variant="primary" onClick={()=> onClickHandler() }>Go Back To Shopping</Button>
                        </Link>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div>
                        <p>Follow this Project on Github for more.</p> 
                    </div>
                    <div>
                        <Link to={{ pathname:"https://github.com/frankieavina" }} target='_blank' className="linkGit"><GitHubIcon color="secondary"/></Link>
                    </div>
                </Card.Footer>
            </Card>
        </Container>


    );
}

export default ThankYouPage; 
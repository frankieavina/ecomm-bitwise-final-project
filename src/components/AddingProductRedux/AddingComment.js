import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

function AddingComment(){

    // useSeclector and useDispatch from redux 
    const {firstName, lastName, comment} = useSelector((state) => state)
    const dispatch = useDispatch(); 

    return(
        <Container>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={ ()=> { dispatch({})} }>
                    Submit
                </Button>

            </Form>
        </Container>


    )
}

export default AddingComment; 
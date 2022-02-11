import React from 'react';
import {Button, ButtonGroup, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css"

function Signin(){
    alert("on sign in")
}

function Signup() {
    alert("on sign up")
}

function Home(){
    return (
        <Container fluid>
            <Row>
                <Col className="App-banner">
                    <Image src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Ribbons-and-Banners-PNG/Blue_Long_Banner_Transparent_PNG_Image.png?m=1452570902" fluid/>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col/>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>YOUR CREDENTIALS:</Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Label htmlFor="txtEmail">Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="txtEmail"
                                        aria-describedby="emailHelpBlock"
                                    />
                                    <Form.Label htmlFor="txtPassword">Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="txtPassword"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                </Form>
                            </Card.Text>
                            <ButtonGroup className="Button-grp">
                                <Button className="Button-signin" variant="primary" onClick={Signin}>Sign in</Button>
                                <Button variant="primary" onClick={Signup}>Sign up</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Home;
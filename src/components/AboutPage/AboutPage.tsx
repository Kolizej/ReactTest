import React, { FC } from 'react';
import styles from './AboutPage.module.css';
import {Button, ButtonGroup, Card, Col, Container, Form, Image, Row} from "react-bootstrap";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => (
    <Container fluid className={styles.LoginPage}>
        <Row>
            <Col className="App-banner">
                <Image
                    src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Ribbons-and-Banners-PNG/Blue_Long_Banner_Transparent_PNG_Image.png?m=1452570902"
                    fluid/>
            </Col>
        </Row>
        <Row className="align-items-center">
            <Col/>
            <Col>
                <Card style={{width: '100%'}}>
                    <Card.Body>
                        <Card.Title>ABOUT US:</Card.Title>
                        <Card.Text>
                            <p>©eTrans Solutions Inc</p>
                            <p>Sergei Daniluk</p>
                            <p>daniluk.devel@gmail.com</p>
                            <p>2022</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col/>
        </Row>
    </Container>
);

export default AboutPage;

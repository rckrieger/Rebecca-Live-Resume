import './App.css';
import React, { Component} from 'react';
import {Card, Button, NavItem, Navbar, Nav, Row, Col,Container, Tab, Tabs} from "react-bootstrap";
import 'react-svg-radar-chart/build/css/index.css'
import LinkedIn from "./Media/LinkedinProfile.jpeg"
import GithubPro from "./Media/GithubProfile.png"
import Medium from "./Media/MediumProfile.jpeg"
//import "bootswatch/dist/lux/bootstrap.css";

class Contact extends Component {
    render () {
        return (
            <div>
                <div style ={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
                    <h1>
                        Connect With Me
                    </h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img src={LinkedIn}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        <h4>{"Reach out to me on "}
                                            <a href="https://www.linkedin.com/in/rckrieger/" target="_blank">Linkedin</a>
                                        </h4>
                                    </Card.Text>
                                    <Button variant="primary"
                                            onClick={() => {
                                                window.open("https://www.linkedin.com/in/rckrieger/", "_blank")
                                            }}
                                    >Linkedin</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={GithubPro} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <h4>{"See what I'm building on "}
                                            <a href="https://github.com/rckrieger" target="_blank">Github</a>
                                        </h4>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Medium} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        <h4>{"Read what I'm have to say on "}
                                            <a href="https://medium.com/@rckrieger" target="_blank">Medium</a>
                                        </h4>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Contact;
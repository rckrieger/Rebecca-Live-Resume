import './App.css';
import React, { Component} from 'react';
import {Card, Row, Col,Container} from "react-bootstrap";
import 'react-svg-radar-chart/build/css/index.css'
import LinkedIn from "./Media/LinkedinProfile.jpeg"
import GithubPro from "./Media/GithubProfile.png"
import Medium from "./Media/MediumProfile.jpeg"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

class Contact extends Component {
    render () {
        return (
            <div className={"contact"}>
                <div style ={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
                    <h1>
                        Connect With Me
                    </h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}
                                  onClick={() => {
                                      window.open("https://www.linkedin.com/in/rckrieger/", "_blank")
                                  }}
                            >
                                <Card.Img src={LinkedIn}/>
                                <Card.Body>
                                    <Card.Text>
                                        <h4>{"Reach out to me on \n"}
                                            <a href="https://www.linkedin.com/in/rckrieger/" rel="noreferrer"
                                               target="_blank">Linkedin</a>
                                        </h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}
                                  onClick={() => {
                                      window.open("https://github.com/rckrieger", "_blank")
                                  }}>
                                <Card.Img variant="top" src={GithubPro} />
                                <Card.Body>
                                    <Card.Text>
                                        <h4>{"See what I'm building on \n"}
                                            <a href="https://github.com/rckrieger" rel="noreferrer"
                                               target="_blank">Github</a>
                                        </h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}
                                  onClick={() => {
                                      window.open("https://medium.com/@rckrieger", "_blank")
                                  }}
                            >
                                <Card.Img variant="top" src={Medium} />
                                <Card.Body>
                                    <Card.Text>
                                        <h4>{"Read what I have to say on \n"}
                                            <a href="https://medium.com/@rckrieger" rel="noreferrer"
                                               target="_blank">Medium</a>
                                        </h4>
                                    </Card.Text>
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
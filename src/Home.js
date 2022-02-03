import React, { Component } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LittleMermaid from "./Media/LMdraft.png";

const MOTTO = "“I want to be where the people are”\n"
const MOTTOCREDIT = "The Little Mermaid, and me building products \n"
const BIO = "I love working on products that make people’s eyes light up. I’m a technical PM by experience; I " +
    "design APIs for Windows at MSFT and was a SWE intern at Apple. My real passion is in HCI, " +
    "especially accessibility and mixed reality. In college, I double majored in Software Engineering and Psychology." +
    " Psych gave me a lens to understand users’ problems. Software engineering gave me a tool kit to solve them.\n"
class Home extends Component {
    render() {
        return(
            <div class={"home"}>
                <Container>
                    <Col>
                        <Row><h1>{MOTTO}</h1></Row>
                        <Row><h2>{MOTTOCREDIT}</h2></Row>
                        <Row><h3>{BIO}</h3></Row>
                        <Row>
                            <img src = {LittleMermaid}
                                 alt = "The little mermaid's silhoutte but she's holding a laptop"/>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}
export default Home;
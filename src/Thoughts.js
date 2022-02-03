import React, { Component } from 'react';
import {Col, Container, Row} from "react-bootstrap";


class WhatIamlookingFor extends Component {
    render() {
        return (
            <div>
                <h2>What I am looking for in my next job</h2>
                <text>Chances are if you are reading this you are either a recruiter or a hiring manager.
                To that end I thought I'd cover what I look for in a team/ role. As I'm a PM, I'll use the MoSCoW
                 prioritization model to structure it.</text>
                <br></br>
                <br></br>
                <h5>
                   Must have
                </h5>
                <ol>
                    <li>Laughter. Even if I work on a team that does serious work,
                        I still want to be able to laugh together over lunch</li>
                    <li>A great manager. I want a manager who is invested in helping employees achieve their long-term
                        career goals.</li>
                </ol>
                <h5>
                    Should have
                </h5>
                <ol>
                    <li>The product genuinely makes people lives better. I want to feel like I'm helping someone.</li>
                    <li>Work life balance. I don't mind occasional late meetings to work across time zones, but I don't
                        want to be in a culture where its expected you answer your emails through 7 pm</li>
                    <li>Office with either company shuttles or near public transit stops. I don't know how to drive.</li>
                </ol>
                <h5>
                    Could have
                </h5>
                <ol>
                    <li>Some degree of creative control. Product sense is one of my favorite parts of being a PM.</li>
                    <li>New product incubation. My greatest strength as a PM is brainstorming new ideas and creating
                        momentum for them.</li>
                    <li>In an ideal situation, I'd prefer to work from Seattle at least through Summer 2023
                        and then transition to the Bay or NY.</li>
                </ol>
                <div body-color = {"#d9534f"}>
                <h5>
                    Won't have
                </h5>
                </div>
                <ol>
                    <li>Tiger-parent style management. Between my internships and full-time work, I've had roughly a
                    dozen managers, and this style has never worked for me.</li>
                    <li>A team with turnover >40%. My next move is culture-motivated. I want to work on a
                        team with a healthy culture.</li>
                </ol>




            </div>
        );
    }
}

class TenThingsAboutMe extends Component {
    render() {
        return(
            <div>
                <h2>Ten Fun Facts about Me</h2>
                <text>These topics never come up in interviews, but I really wish they did.</text>
                <ol>
                    <li>I made Tim Cook laugh once</li>
                    <li>I am really good at writing techie musical parodies</li>
                    <li>I used to go to pun competitions, and even won one</li>
                    <li>I took 96 classes in college, and and I wish I had taken 5 more so  I could say "I've taken
                        hundreds of classes on this"</li>
                    <li>I was in theatre for almost 10 years before I started doing CS in college</li>
                    <li>I type one handed"</li>
                    <li>I am the oldest of 4 sisters"</li>
                    <li>I campaigned successfully for Microsoft to offer interns female-cut shirts</li>
                    <li>I campaigned unsuccessfully for Apple to offer interns female-cut shirts</li>
                    <li>I am single-handily responsible for Satya Nadella reading Harry Potter</li>
                </ol>
            </div>
        );
    }
}


class careerShowers extends Component {
    render() {
        return(
            <div>
                <h2>Career Showers</h2>
            </div>
        );
    }
}


class Thoughts extends Component {
    render() {
        return(
            <div class={"thoughts"}>
                <Container>
                    <Col>
                        <Row>
                            <div className={"thoughts-h1"}>
                                <h1>Thoughts</h1>
                            </div>
                        </Row>
                        <Row>
                            <br></br>
                            <TenThingsAboutMe></TenThingsAboutMe>
                        </Row>
                        <br></br>
                        <WhatIamlookingFor></WhatIamlookingFor>
                        <Row>

                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}
export default Thoughts;
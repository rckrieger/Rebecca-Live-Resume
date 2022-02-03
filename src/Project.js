import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col,Container} from "react-bootstrap";
import MoodBandVideoFile from "./Media/Moodband.mp4";
import CodeCadetsVideoFile from "./Media/CodeCadetsDance.mp4";
import ChickenDanceVideoFile from "./Media/chickendance.MOV";
import GHCSpeaker from "./Media/GHCspeaking19.jpeg";
import Pointing from "./Media/CCpoints.jpg"
import GodotVideo from "./Media/GodotVideo.mp4"



class MediaPart extends Component {

    render() {
        switch (this.props.media) {
            case "MoodBandVideoFile":
            {
                return(
                    <video width="480" height="270" controls>
                        <source src={MoodBandVideoFile}/>
                    </video>


                );

            }
            case "CodeCadetsVideoFile":
            {
                return(
                    <div>
                    <video width="480" height="270" controls>
                        <source src={CodeCadetsVideoFile}/>
                    </video>
                        <div>
                            <text><i>
                                The students' laptops were delayed in shipping, so for the first class I got the
                                them giant sticky notes to program their instructors to dance, in a scratch-like drag
                                and drop coding style.
                            </i>
                            </text>
                        </div>
                    <img src = {Pointing} width="480" height="270" alt = "Two students pointing to a computer"/>
                        <div>
                            <text><i>
                                Students working after their laptops arrived
                            </i>
                            </text>
                        </div>
                    </div>
                );
            }
            case "ChickenDanceVideoFile":
            {
                return(
                    <video width="480" height="270" controls>
                        <source src={ChickenDanceVideoFile}/>
                    </video>
                );
            }
            case "Animation": {
                return (
                    <video width="480" height="270" controls autoPlay loop muted>
                        <source src={GodotVideo}/>
                    </video>
                );
            }
            case "GHCSpeaker": {
                return (
                    <img src={GHCSpeaker} width="480" height="270"
                         alt = "3 women speaking at the Grace Hopper Celebration"/>
                );
            }
            default:
                return (
                    <p>Need to insert file</p>
                );
        }
    }
}


class LinkPart extends Component {
    render() {
        switch (this.props.link) {
            case null:
                return (
                    <div/>
                );
            case "null":
                return (
                    <div/>
                );
            case "https://docs.google.com/document/d/1nc5umZIOnc9gYyEnCVwbTrlqJUyacRj9HJwXnfBkccU/edit?usp=sharing":
                return (
                    <div align="left">
                        <h3>Link</h3>
                        <a href={this.props.link} target="_blank" rel="noreferrer">Lesson Plan</a>
                    </div>
                );
            default:
                return(
                    <div align="left">
                        <h3>Link</h3>
                        <a href={this.props.link} target="_blank" rel="noreferrer">{this.props.link}</a>
                    </div>)
                ;
        }
    }
}

class Project extends Component {
    constructor(props) {
        super(props);
        this.props = {
            project: props.project,
        };
    }

    render() {
        return (
            <div className="ProjectBox">
                <div className="Name">
                    <h1>{this.props.project.name + " (" + this.props.project.year + ")"}</h1>
                </div>
                <Container>
                        <Col>
                            <Row>
                                <div>
                                    <h3>About</h3>
                                    <p>{this.props.project.description}</p>
                                </div>
                                <LinkPart link = {this.props.project.link}></LinkPart>
                            </Row>
                            <Row>
                                <div align="left">
                                    <h3>Impact</h3>
                                    <p>{this.props.project.impact}</p>
                                </div>
                            </Row>
                            <Row>
                                <div align="left">
                                    <h3>Skills Strengthened</h3>
                                    <ul>
                                        {this.props.project.skills.map((skill, index) =>
                                            (
                                                <li>{skill}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Row>
                        </Col>
                        <Col sm={1}><div/></Col>
                        <Col>
                            <MediaPart media={this.props.project.media}/>
                        </Col>
                </Container>
            </div>
        );
    }
}

export default Project;
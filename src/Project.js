import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {NavItem, Nav, Row, Col,Container, Tab, Tabs} from "react-bootstrap";
import KeyboardVideoFile from "./Media/UncroppedAppDemo.mov";
import MoodBandVideoFile from "./Media/Moodband.mp4";
import CodeCadetsVideoFile from "./Media/CodeCadetsDance.mp4";
import ChickenDanceVideoFile from "./Media/chickendance.MOV";
import Pointing from "./Media/CCpoints.jpg"
import Animation from "./Media/Animation.pdf"
import GodotVideo from "./Media/GodotVideo.mp4"
import { Document, Page } from 'react-pdf';



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
                    <img src = {Pointing} width="480" height="270"/>
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
                    <video width="480" height="270" controls  autoPlay loop muted>
                        <source src={GodotVideo}/>
                    </video>
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
                    <div></div>
                );
            case "null":
                return (
                    <div></div>
                );
            default:
                return(
                    <div align="left">
                        <a href={this.props.link} target="_blank">{this.props.link}</a>
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
                                <div align="left">
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
                        <Col>
                            <MediaPart media={this.props.project.media}/>
                        </Col>
                </Container>
            </div>
        );
    }
}

export default Project;
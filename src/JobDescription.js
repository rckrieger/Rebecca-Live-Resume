import React, { Component } from 'react';
import Radar from 'react-d3-radar';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import {
    BodyContent,
    Container as TimelineContainer,
    Description,
    Section,
    YearContent
} from "vertical-timeline-component-react";

import KeyboardVideoFile from "./Media/UncroppedAppDemo.mov";

class KeyBoardVideo extends Component {
    render () {
        return(
            <video width="221" height="480" controls autoPlay loop muted>
                <source src={KeyboardVideoFile}/>
            </video>
        );
    }
}


class JobBase extends Component {
  //  render() {
     //   return ();
}

class JobDescription extends Component {
    team;
    contributions;
    impact;
    learnings;
    constructor(props) {
        super(props);
        this.props = {
            job: props.job,
        };
    }

    render() {
        return (
            <TimelineContainer>
                <YearContent startDate='2019/08/05' currentYear/>
                <BodyContent>
                    <Section font-size = {'50px'} title={this.props.job.title}>
                        <Description variant='subtitle' text={this.props.job.team}/>
                        <Row>
                            <Col>
                                <text>Contributions</text>
                                <ul>
                                    {this.props.job.contributions.map((bullet) => (
                                            <li>{bullet}</li>
                                    ))}
                                </ul>
                                <text>Impact</text>
                                {this.props.job.impact.map((bullet) => (
                                    <li>{bullet}</li>
                                ))}
                                <text>Learnings</text>
                                {this.props.job.learnings.map((bullet) => (
                                    <li>{bullet}</li>
                                ))}
                            </Col>

                            <Col>
                                <KeyBoardVideo></KeyBoardVideo>
                            </Col>
                        </Row>
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}
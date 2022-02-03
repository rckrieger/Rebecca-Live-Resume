import {Col, Container, Row} from "react-bootstrap";
import React, {Component} from "react";
import './App.css';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


//Skills section - consider rephrasing to "areas of expertise"
const data = [
    {
        data: {
            java: 0.8,
            mobileDev: 0.6,
            webDev: 0.8,
            windowsDev: 0.4,
            accessibility: 0.5
        },
        meta: { color: 'red' }
    }
];
const captions = {
    // columns
    webDev: 'WebDev (ReactJS + HTML)',
    accessibility: 'Accessibility',
    windowsDev: 'Windows Development (Win32 + UWP)',
    mobileDev: 'Mobile Development (SwiftUI + UIKit)',
    java: 'Java'
};
const softdata = [
    {
        data: {
            specWriting: 0.9,
            marketResearching: 0.75,
            conferenceSpeaking: 1,
            emailWriting: 0.7,
            speakingDev: 0.8
        },
        meta: { color: 'red' }
    }
];
const softcaptions = {
    // columns
    specWriting: 'Spec Writing',
    marketResearching: 'Market Researching',
    conferenceSpeaking: 'Conference Speaking',
    emailWriting: 'Email Writing',
    speakingDev: 'Speaking Dev'
};
class SoftSkills extends Component {
    render () {
        return (
            <div className={"skills"}>
                <Container>
                    <Col>
                        <div style={{alignItems: 'center'}}>
                        <Row>
                            <h1>What I Do</h1>
                        </Row>
                        <Row>
                            <RadarChart
                                captions={softcaptions}
                                data={softdata}
                                size={450}
                            />
                        </Row>
                        </div>
                    </Col>
                </Container>
            </div>
        );
    }
}
class TechnicalSkills extends Component {
    render () {
        return (
            <div className={"skills"}>
                <Container>
                    <Col>
                        <Row>
                            <h1>What I Know</h1>
                        </Row>
                        <Row>
                            <RadarChart
                                captions={captions}
                                data={data}
                                size={450}
                            />
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}


class Skills extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <SoftSkills/>
                    </Col>
                    <Col>
                        <TechnicalSkills/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Skills;
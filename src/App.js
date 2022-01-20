import './App.css';
import React, { Component } from 'react';
import './App.css';
import {NavItem, Nav, Row, Col,Container, Tab, Tabs} from "react-bootstrap";
import KeyboardVideoFile from "./Media/UncroppedAppDemo.mov";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import {
    Timeline,
    Container as TimelineContainer,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';



const TABS = [
    {name: "Home"},
    {name: "Work"},
    {name: "Projects"},
    {name: "Skills"},
    {name: "Thoughts"},
    {name: "Contact"}];

// constants
// Home
const MOTTO = "“I want to be where the people are”\n"
const MOTTOCREDIT = "The Little Mermaid, and me building products \n"
const BIO = "I love working on products that make people’s eyes light up. I’m a technical PM by experience - I " +
    "design APIs for Windows at MSFT and was a SWE intern at Apple. My real passion is in HCI, " +
    "especially accessibility and mixed reality. In college, I double majored in Software Engineering and Psychology." +
    " Psych gave me a lens to understand users’ problems. Software engineering gave me a tool kit to solve them.\n"

//Work
const customTheme = {
    yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#262626',
};

class KeyBoardVideo extends Component {
    render () {
        return(
                <video width="221" height="480" controls autoPlay loop muted>
                    <source src={KeyboardVideoFile}/>
                </video>
        );
    }
}

class HomeDisplay extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Col>
                    <Row><h1>{MOTTO}</h1></Row>
                    <Row><h2>{MOTTOCREDIT}</h2></Row>
                    <Row><h3>{BIO}</h3></Row>
                    </Col>
                </Container>
            </div>
        );
    }
}




// Double check the dates
class MSFTPM1 extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2019/08/05' currentYear />
                <BodyContent>
                    <Section title='Microsoft - Program Manager 1'>
                        <Description variant='subtitle' text='Developer Ecosystem and Platforms Team' />
                            <Row>
                                <Col>
                                    <Description text='Description' />
                                    <Description text='Another description' />
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

class MSFTPMIntern extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2018/06/14' endDate= '2018/09/05'/>
                <BodyContent>
                    <Section title='Microsoft - Program Manager Intern'>
                        <Description variant='subtitle' text='Developer Ecosystem and Platforms Team' />
                        <Description text= {BIO + BIO} />
                        <Description text='Another description' />
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}

class GoDaddy extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2017/06/14' endDate= '2017/09/05'/>
                <BodyContent>
                    <Section title='GoDaddy - Mobile Development Intern'>
                        <Description variant='subtitle' text='ReactNative Mobile Dev Team' />
                        <Description text='Description' />
                        <Description text='Another description' />
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}


class Apple extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2017/04/02' endDate= '2017/06/12'/>
                <BodyContent>
                    <Section title='Apple - SWE Intern'>
                        <Description variant='subtitle' text='CoreOS Operations' />
                        <Description text='Description' />
                        <Description text='Another description' />
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}
class MSFTExploreIntern extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2016/06/14' endDate= '2016/09/05'/>
                <BodyContent>
                    <Section title='Microsoft - Explore Intern'>
                        <Description variant='subtitle' text='Outlook Data Storage' />
                        <Description text='Description' />
                        <Description text='Another description' />
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}
class Ancestry extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2015/06/14' endDate= '2015/09/05'/>
                <BodyContent>
                    <Section title='Ancestry - Back-End Development Intern'>
                        <Description variant='subtitle' text='SEO team' />
                        <Description text='Description' />
                        <Description text='Another description' />
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}


class WorkDisplay extends  Component{
    render() {
        return(
            <div>
                <h1>Work History</h1>
                <Timeline theme={customTheme} dateFormat='ll'>
                    <MSFTPM1></MSFTPM1>
                    <MSFTPMIntern></MSFTPMIntern>
                    <GoDaddy></GoDaddy>
                    <Apple></Apple>
                    <MSFTExploreIntern></MSFTExploreIntern>
                    <Ancestry></Ancestry>
                </Timeline>
            </div>
        );
    }
}

const data = [
    {
        data: {
            java: 0.9,
            mobileDev: 0.5,
            webDev: 0.7,
            windowsDev: 0.6,
            mixedReality: 0.5
        },
        meta: { color: 'red' }
    }
];


//Skills section - consider rephrasing to "areas of expertise"
const captions = {
    // columns
    webDev: 'WebDev (ReactJS + HTML)',
    mixedReality: 'Mixed Reality',
    windowsDev: 'Windows Development (Win32 + UWP)',
    mobileDev: 'Mobile Development (SwiftUI + UIKit)',
    java: 'Java Middleware'
};
const softdata = [
    {
        data: {
            specWriting: 0.9,
            marketResearching: 0.8,
            conferenceSpeaking: 1,
            emailWriting: 0.7,
            speakingDev: 0.7
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
            <div>
                <h1>What I do</h1>
                <RadarChart
                    captions={softcaptions}
                    data={softdata}
                    size={450}
                />
            </div>
        );
    }
}
class TechnicalSkills extends Component {
   render () {
        return (
            <div>
                <h1>What I know</h1>
                <RadarChart
                    captions={captions}
                    data={data}
                    size={450}
                />
            </div>
        );
    }
}


class Contact extends Component {
    render () {
        return (
            <div>
                <h4>Reach out to me on LinkedIn</h4>
            </div>
        );
    }
}

//App Nav parts should change tabd
class TabDisplay extends Component {
    render() {
        switch (this.props.name) {
            case "Home":
                return (
                    <HomeDisplay></HomeDisplay>
                );
            case "Work":
                return (
                    <WorkDisplay></WorkDisplay>
                );
            case "Skills":
                return (
                    <Container>
                        <Row>
                            <Col>
                                <SoftSkills></SoftSkills>
                            </Col>
                            <Col>
                                <TechnicalSkills></TechnicalSkills>
                            </Col>
                        </Row>
                    </Container>
                );
            default:
                return (
                    <h1>Displaying info for tab {this.props.name}</h1>
                );
        }
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Nav activeKey="/home">
                    {TABS.map((tab, index) => (
                        <Nav.Item
                            onClick={() => {
                                this.setState({ activePlace: index });
                            }}
                        >
                            <Nav.Link key={index} eventKey={index}>{tab.name}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <TabDisplay
                    key={activePlace}
                    name={TABS[activePlace].name}
                />
            </div>
        );
    }
}

export default App;

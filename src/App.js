import './App.css';
import React, { Component } from 'react';
import './App.css';
import {NavItem, Nav, Row, Col,Container, Tab, Tabs} from "react-bootstrap";
import KeyboardVideoFile from "./Media/UncroppedAppDemo.mov";
import MoodBandVideoFile from "./Media/Moodband.mp4";
import CodeCadetsVideoFile from "./Media/CodeCadetsDance.mp4";
import ChickenDanceVideoFile from "./Media/chickendance.MOV";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import {Timeline, Container as TimelineContainer, YearContent, BodyContent, Section, Description,} from 'vertical-timeline-component-react';
import Project from "./Project";


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
class HomeDisplay extends Component {
    render() {
        return(
            <div className={"home"}>
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


class JobDescription extends Component {
    render() {
        switch (this.props.name) {
            case "Home":
                return (
                    <HomeDisplay></HomeDisplay>
                );
            default:
                return (
                    <WorkDisplay></WorkDisplay>
                );
        }
    }
}


const SOFTKEY = "You know when you are using a Windows device or an iPhone in touch mode and the virtual keyboard " +
    "pops up? We call it a SIP (Software Input Panel). One project I led was improving the animation of the SIP. " +
    "In Windows 10, when you pulled up the SIP and the app window had to hop out of the way, their movements weren't" +
    " in sync. This was an okay design back when touch was new, but now that users are accustomed to the seamless " +
    "popping up of the sip on their iPhone, ours just looked wonky. By changing the eventing model we were able to " +
    "sync the animation of the app window with the keyboard, giving users a more delightful experience. Right now " +
    "our solution is limited to input pane aware apps (mostly UWPs), but V2 will fix the animation for unaware apps " +
    "too. I was responsible for spec writing, leading weekly syncs between my dev team and a partner team in Tokyo, " +
    "and tracking the work in ADO (Microsoft's alternative to jira). "
// Double check the dates
class MSFTPM1 extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2019/08/05' currentYear />
                <BodyContent>
                    <Section title='Microsoft - Program Manager 1' font-size="+200 !important">
                        <Description variant='subtitle' text='Developer Ecosystem and Platforms Team' />
                            <Row>
                                <Col>
                                    <h4>Software Keyboard</h4>
                                    <text>{SOFTKEY}</text>
                                    <text>Impact</text>
                                    <ul>
                                        <li>test</li>
                                    </ul>
                                    <text>Learnings</text>
                                    <ul>
                                        <li>test</li>
                                    </ul>
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

var codeCadets = {
    name: "Code Cadets",
    year: "2016",
    media: "CodeCadetsVideoFile",
    description: "When I was researching Seattle to prepare for my Microsoft internship I noticed the area " +
        "had many free high school camps but very few middle school ones, and being a tech hub the city had an " +
        "abundance of interns who could code. So I thought why not give the interns the opportunity to teach and " +
        "the girls the opportunity to learn to code this summer? I teamed up with interns from Microsoft, Amazon, " +
        "and Google interns to teach 40 girls and allies C# over the course of 7 Saturdays " +
        ". What made the camp unique was besides being the only free coding camp " +
        "for middle schoolers in the area, we introduced the students to full time engineers and PMs who are thriving" +
        " in tech via the Q&As so the girls could see that they could grow up to succeed too.",
    link: "https://rckrieger.github.io/SeniorProjectPortfolio/",
    impact: "Before the camp started I surveyed students about their skills, experiences, and perceptions of " +
        "computer science. Tellingly, when asked \"What are 3 words you think of when you think of " +
        "computer science?\", answers included \"geeks, boys, nerds\" and \"difficult strategetic sciencey\". " +
        "Fortunately, when we informally surved them at the last camp session, most said it was more fun than they " +
        "expected. Students also metioned their favorite part was meeting local women in tech they could look up to. " +
        "Although some had parents in engineering, many of the girls reported not knowing anyone who looked like them " +
        "succeeding in the industry before the camp began. Pacific science center reached out to ask if we would be " +
        "interested in running the camp through them the summer after. Although flattered, we turned them down " +
        "because all of the non-graduating interns thought it would be too much work to manage.",
    skills: ["Effective communication",
        "Setting success criteria",
        "Grant writing and budgeting"]
};

class ProjectsDisplay extends  Component{
    render() {
        return(
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Projects</h1>
                </div>
                <Project project = {codeCadets}/>
            </div>
        );
    }
}




class WorkDisplay extends  Component{
    render() {
        return(
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Work History</h1>
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <text font-size="9"><i>Apologies for the odd font sizes, the timeline and its CSS is from an npm library w/o
                    parameters for font size and it won't recompile with my CSS changes.
                    </i>
                    </text>
                </div>
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



//Skills section - consider rephrasing to "areas of expertise"
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
                <h4>{"Reach out to me on "}
                <a href="https://www.linkedin.com/in/rckrieger/" target="_blank">Linkedin</a>
                </h4>
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
            case "Contact":
                return (
                    <Contact></Contact>
                );
            case "Projects":
                return (
                    <ProjectsDisplay></ProjectsDisplay>
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

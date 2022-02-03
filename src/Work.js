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
import {Timeline, Container as TimelineContainer, YearContent, BodyContent, Section, Description,} from 'vertical-timeline-component-react';


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




const SOFTKEY = "You know when you are using a Windows device or an iPhone in touch mode and the virtual keyboard " +
    "pops up? We call it a SIP (Software Input Panel). One project I led was improving the animation of the SIP. " +
    "In Windows 10, when you pulled up the SIP and the app window had to hop out of the way, their movements weren't" +
    " in sync. This was an okay design back when touch was new, but now that users are accustomed to the seamless " +
    "popping up of the sip on their iPhone, ours just looked wonky. By changing the eventing model we were able to " +
    "sync the animation of the app window with the keyboard, giving users a more delightful experience. Right now " +
    "our solution is limited to input pane aware apps (mostly UWPs), but a future release will fix the animation " +
    "for unaware apps " + "too. I was responsible for spec writing, leading weekly syncs between my dev team and " +
    "a partner team in Tokyo, and tracking the work in ADO (Microsoft's alternative to jira). "

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

class Work extends  Component{
    render() {
        return(
            <div className={"work"}>
                <div className={"work-head"}>
                    <h1>Work History</h1>
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <text font-size="9"><i>Apologies for the odd font sizes, the timeline and its CSS are from an npm library w/o
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


export default Work;
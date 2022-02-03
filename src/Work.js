import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col} from "react-bootstrap";
import KeyboardVideoFile from "./Media/UncroppedAppDemo.mov";
import {Timeline, Container as TimelineContainer, YearContent, BodyContent, Section, Description,} from 'vertical-timeline-component-react';
import Compare from "./Media/HPCompare.JPG"
import Houses from "./Media/HPHouses.JPG"
import MyLetter from "./Media/HPZoomedLetter.JPG"
import Scott1 from "./Media/Scott1.PNG"
import Scott2 from "./Media/Scott2.PNG"
import WWDCGroup from "./Media/wwdcgroupshot.jpeg"
import WWDCSelfie from "./Media/WWDCselfie.jpeg"

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


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
    "for unaware apps too. I was responsible for spec writing, leading weekly syncs between my dev team and " +
    "a partner team in Tokyo, and tracking the work in ADO (Microsoft's alternative to jira). "


const iOS = "Because our customers are developers and I needed to do compete research, I built out a few sample apps to" +
    " better understand iOS's API offerings. In the demo shown, I was investigating keyboard customization offerings" +
    " for app developers. Here is a link to the repo: "
const iOSLink = "https://github.com/rckrieger/IXP-Mega-keyboard"
const iOS2 =  " In the first half you see a SwiftUI app that samples features like keyboard theme changing, " +
    "hosting UIKit views within SwiftUI, and using the input accessory view.  Around 50 seconds" +
    " in you can see a sticker iMessage app I worked on in conjunction. All the stickers are either team memes or " +
    "pictures of dogs with my sub-team's name on them."
const Gaze = "My primary passion has always been accessibility, so I've been running the Windows Gaze story. " +
    "This work is about creating experience parity for users with no or limited reach. I was responsible for market " +
    "research to study industry trends, and because the work concerns lots of teams I did a lot of ADO upkeep. " +
    "I also wrote specs for this area. \n" +
    "\n" +
    "I also built out a gaze sample app to better understand our offerings which you can check out on my github, " +
    "but it requires an eye tracker to test it. "
const GazeLink = "https://github.com/rckrieger/gazeinputtry2"
// Double check the dates
class MSFTPM1 extends Component {
    render() {
        return(
            <TimelineContainer>
                <YearContent startDate='2019/08/05' currentYear />
                <BodyContent>
                    <Section title='Microsoft - Program Manager 1' font-size="200 !important">
                        <Description variant='subtitle' text='Developer Ecosystem and Platforms Team' />
                        <Row>
                            <Col>
                                <h4>Software Keyboard</h4>
                                <text>{SOFTKEY}</text>
                                <br/>
                                <h4>iOS Development</h4>
                                <text>{iOS}</text>
                                <a href={iOSLink} target="_blank" rel="noreferrer">{iOSLink}</a>
                                <text>{iOS2}</text>
                                <br/>
                                <h4>Gaze</h4>
                                <text>{Gaze}</text>
                                <a href={GazeLink} target="_blank" rel="noreferrer">{GazeLink}</a>
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

const ToDo = "To do"

class MSFTPMIntern extends Component {

    render() {
        const images = [
            {
                original: Compare,
                originalHeight: 480,
                originalWidth: 221,
            },
            {
                original: MyLetter,
                originalHeight: 480,
                originalWidth: 221,
            },
            {
                original: Houses,
                originalHeight: 480,
                originalWidth: 221,
            }
        ];
        return(
            <TimelineContainer>
                <YearContent startDate='2018/06/14' endDate= '2018/09/05'/>
                <BodyContent>
                    <Section title='Microsoft - Program Manager Intern'>
                        <Description variant='subtitle' text='Developer Ecosystem and Platforms Team' />
                            <Row>
                                <Col>
                                    <h4>Mixed Reality</h4>
                                    <text>I analyzed market trends to prioritize which mixed reality (AR/VR) UI elements
                                        Windows should implement APIs for, and wrote specs for them with KPIs and metrics.
                                    </text>
                                    <br/>
                                    <h4>High School Outreach</h4>
                                    <text>I volunteered up with both DigiGirlz and Girls Make Games to teach students
                                        more about  the industry. For Girls Make Games I taught the students about
                                        narrative design. For DigiGirlz I served as a mentor to teach students about
                                        product planning and feature prioritization during a Hackathon-like event.
                                    </text>
                                    <br/>
                                    <h4>Diversity and Inclusion</h4>
                                    <text>I worked with executives to kick off new diversity and inclusion efforts.
                                        I led a successful petition for university recruiting to offer female-cut
                                        t-shirts in addition to unisex at intern events. HR also agreed to change their
                                        event guidance to say if an event is held at a org-wide level or higher and is
                                        providing shirts, both female and unisex cuts should be offered.
                                    </text>
                                    <h4>Got Satya to read Harry Potter</h4>
                                    <text>This is a very long story, but as a TLDR; after learning Satya had
                                        never read it, I convinced his Chief of Staff to give him an annotated copy of
                                        Harry Potter, with a forward I wrote to parody the forward in his book "Hit
                                        Refresh", which he gave to employees.</text>
                                </Col>
                                <Col>
                                    <ImageGallery items={images}/>;
                                </Col>
                            </Row>
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}

class GoDaddy extends Component {
    render() {
        const images = [
            {
                original: Scott2,
                originalHeight: 480,
                originalWidth: 221,
            },
            {
                original: Scott1,
                originalHeight: 480,
                originalWidth: 221,
            }
        ];
        return(
            <TimelineContainer>
                <YearContent startDate='2017/06/14' endDate= '2017/09/05'/>
                <BodyContent>
                    <Section title='GoDaddy - Mobile Development Intern'>
                        <Row>
                            <Col>
                                <h4>Accessibility Development Team Establishment</h4>
                                <text>When I interned Blake Irving was CEO. My initial goal was smaller. I just wanted
                                    a disability ERG. When I pitched it to him at an intern event, his exact words were
                                    "we want our employee groups to reflect our users, and we don't have a sizable
                                    number of users with disabilities". My jaw was on the ground. Fortunately he
                                    announced weeks later that he was retiring and Scott Wagner was becoming the new CEO.
                                    I united with a couple of coworkers to pitch the ERG again at Scott Wagner's meeting
                                    of the WA employees. I thought it would be harder to ignore the voices of many than
                                    the voice of one. As we presented, another engineer in the room pointed out his team
                                    had no accessibility guidance for their product, and he had to learn everything on his
                                    own as th company offered no support or education on it. As the other engineers started
                                    shared their stories, it became clear there was no accessibility at Godaddy. Thanks
                                    to my campaign, GoDaddy spun up an accessibility team and a year later publicly announced
                                    the creation of an Abilities ERG.
                                </text>
                                <h4>React Native</h4>
                                <text>I developed views in React Native and deployed them using Jenkins, Docker,
                                    and Kubernettes.
                                </text>
                                <h4>Accessibility Hackathon Project</h4>
                                <text>For the intern hackathon, I mocked up a tool that would allow users to run
                                    accessibility checks for their websites without needing to use external tools.
                                    This would allow more users to shop on their sites.
                                </text>
                            </Col>
                            <Col>
                                <ImageGallery items={images}/>;
                            </Col>
                        </Row>
                    </Section>
                </BodyContent>
            </TimelineContainer>
        );
    }
}


class Apple extends Component {
    render() {
        const images = [
            {
                original: WWDCSelfie,
                originalHeight: 480,
                originalWidth: 221,
            },
            {
                original: WWDCGroup,
                originalHeight: 480,
                originalWidth: 221,
            }
        ];
        return(
            <TimelineContainer>
                <YearContent startDate='2017/04/02' endDate= '2017/06/12'/>
                <BodyContent>
                    <Section title='Apple - SWE Intern'>
                        <Description variant='subtitle' text='CoreOS Operations' />
                        <Row>
                            <Col>
                                <h4>ReactJS Intern Project</h4>
                                <text> I evaluated over 300 user complaints to identify pain-points to design a new
                                    internal support tool. I prioritized the features, and then built it out from
                                    start to finish using ReactJS, Sass, and npm libraries. Because of the
                                    secrecy of Apple, there is not much I can say about this.
                                </text>
                            </Col>
                            <Col>
                                <ImageGallery items={images}/>;
                            </Col>
                        </Row>
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
                        <Row>
                            <Col>
                                <h4>Server Throttling Viewer</h4>
                                <text> I designed mockups, executed usability studies, tracked deliverables, and led
                                    stand-ups on behalf of my Explore pod. As the other two were happier as devs, I took
                                    charge of the PM work for the group. I collaborated across teams to develop a new
                                    full-stack tool using C#, ASP.NET, CSS, Azure, and JavaScript.
                                </text>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
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
                        <Row>
                            <Col>
                                <h4>SEO</h4>
                                <text> I made SEO changes so Ancestry links would show up higher when people Googled
                                    names. Most of my tasks focused on improving the pages' metadata so they would
                                    fare better with Google and Bing's algorithms. My work was in C#, and the site used
                                    ASP.NET framework.
                                </text>
                                <br/>
                                <h4>Musical Hackathon Project</h4>
                                <text> I led ideation, pitching, and execution for a Spotify plug-in for Ancestry so
                                    users could listen to the top hits their Ancestors listened to. We thought this
                                    would build users' empathy for older family members. Although it was never publicly
                                    released, we placed first in the company-wide Hackathon.
                                </text>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
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
                    <MSFTPM1/>
                    <MSFTPMIntern/>
                    <GoDaddy/>
                    <Apple/>
                    <MSFTExploreIntern/>
                    <Ancestry/>
                </Timeline>
            </div>
        );
    }
}


export default Work;
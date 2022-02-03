import './App.css';
import React, { Component } from 'react';
import {Navbar, Nav} from "react-bootstrap";
import 'react-svg-radar-chart/build/css/index.css'

import Work from "./Work";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import Thoughts from "./Thoughts";
import Contact from "./Contact";

const TABS = [
    {name: "Home"},
    {name: "Work"},
    {name: "Projects"},
    {name: "Skills"},
    {name: "Thoughts"},
    {name: "Contact"}];

// constants


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

var godot = {
    name: "Godot Game Development Workshop",
    year: "2019",
    media: "Animation",
    description: "My college’s game development professor wanted to pilot a new gaming engine to use in his " +
        "classes. As a member of the Game development club, I volunteered to make experiment with the engine, " +
        "identify common onboarding problems and create a sample lab he could tweak for his intro to game development class.",
    link: "https://docs.google.com/document/d/1nc5umZIOnc9gYyEnCVwbTrlqJUyacRj9HJwXnfBkccU/edit?usp=sharing",
    impact: "I created a lab that clearly explains how to build a game with Godot. The lab also articulates pitfalls " +
        "to avoid and explains when to use which element.",
    skills: ["Technical documentation writing",
        "Lesson plan building",
        "Game development"]
};

var conference = {
    name: "Conference Speaking",
    year: "2017-2019",
    media: "GHCSpeaker",
    link: null,
    description: "I have spoken at GHC (twice!), Tapia, and SoCal CWIC on different tech ethics topics. " +
        "Although I normally speak on disability and tech, I've also spoken on privacy for online dating and for VR.",
    impact: "I'm comfortable speaking in front of large crowds",
    skills: ["Conference Speaking", "Accessibility awareness"]
};

var moodband = {
    name: "Moodband",
    year: "2016",
    link: null,
    media: "MoodBandVideoFile",
    description: "As a kid, I had no filter. This was hard on friendships, so for AT&T's " +
        "Hackathon, I worked on a wearable bracelet to help wearers read the room. It used colors to signal when a " +
        "wearer so should be on alert or stop what they are saying, like a traffic signal. We used Watson APIs " +
        " to turn the wearer's speech to text, and then used a tone analyzer on the text to give it a sentiment score." +
        " The processing was done on a Raspberry Pi. " +
        " I was responsible for project organization, pitching, and prototyping an accompanying iPhone app that could " +
        "help the wearer set goals or notice historical trends. We thought this could potentially be a helpful " +
        "tool for cognitive behavioral therapy.",
    impact: "We were invited to pitch in the international semifinals. Unfortunately, the team was spread out all over " +
        "California and I was at GHC the weekend the pitch was due, so our recorded pitch was lower quality than " +
        "I would have hoped.",
    skills: ["Project management",
        "Invision prototyping"]
};

var chicken = {
    name: "Chicken Dance Robot",
    year: "2014",
    media: "ChickenDanceVideoFile",
    description: "After I finished my lab early, I reprogrammed my scribbler bot to do the chicken dance when it" +
        " perceives it hit an obstacle. The collision detection was done with a light sensor. The tune was done with pure grit " +
        "and imagination.",
    link: null,
    impact: "The robot dances. It is cute.",
    skills: ["Robotics"]
};

class ProjectsDisplay extends  Component{
    render() {
        return(
            <div className={"projects"}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Projects</h1>
                </div>
                <Project project = {codeCadets}/>
                <Project project = {godot}/>
                <Project project = {conference}/>
                <Project project = {moodband}/>
                <Project project = {chicken}/>
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
                    <Home/>
                );
            case "Work":
                return (
                    <Work/>
                );
            case "Skills":
                return (
                    <Skills/>
                );
            case "Contact":
                return (
                    <Contact/>
                );
            case "Projects":
                return (
                    <ProjectsDisplay></ProjectsDisplay>
                );
            case "Thoughts":
                return (
                    <Thoughts/>
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
            <div class={"Nav"}>
                <Navbar className='shadow-0'>
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
                </Navbar>

                <TabDisplay
                    key={activePlace}
                    name={TABS[activePlace].name}
                />

            </div>
        );
    }
}

export default App;

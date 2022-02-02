import React, { Component } from 'react';
import './App.css';
import Project from "./Project";


var name = "Code Cadets";
var year = "2016";
var media = null;
var description = "When I was researching Seattle to prepare for my Microsoft internship I noticed the area " +
    "had many free high school camps but very few middle school ones, and being a tech hub the city had an " +
    "abundance of interns who could code. So I thought why not give the interns the opportunity to teach and " +
    "the girls the opportunity to learn to code this summer? I teamed up with interns from Microsoft, Amazon, " +
    "and Google interns to teach 40 girls and allies C# over the course of 7 Saturdays" +
    "(http://codecadets.wixsite.com/ home). What made the camp unique was besides being the only free coding camp " +
    "for middle schoolers in the area, we introduced the students to full time engineers and PMs who are thriving" +
    " in tech via the Q&As so the girls could see that they could grow up to succeed too.";
var impact = "Before the camp started I surveyed students about their skills, experiences, and perceptions of " +
    "computer science. Tellingly, when asked \"What are 3 words you think of when you think of " +
    "computer science?\", answers included \"geeks, boys, nerds\" and \"difficult strategetic sciencey\". " +
    "Fortunately, when we informally surved them at the last camp session, most said it was more fun than they " +
    "expected. Students also metioned their favorite part was meeting local women in tech they could look up to. " +
    "Although some had parents in engineering, many of the girls reported not knowing anyone who looked like them " +
    "succeeding in the industry before the camp began. Pacific science center reached out to ask if we would be " +
    "interested in running the camp through them the summer after. Although flattered, we turned them down " +
    "because all of the non-graduating interns thought it would be too much work to manage.";
var skills = ["Effective communication",
    "Setting success criteria",
    "Grant writing and budgeting"];

class CodeCadets extends Project {

    constructor() {
        super(name, year, media, description, impact, skills);
    }
    render() {
        return (
            <div>
                <h1>Rendering student</h1>
            </div>
        );
    }
}

export default CodeCadets;

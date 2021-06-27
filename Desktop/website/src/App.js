import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ResumePage from "./ResumePage.js";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import styles from './App.css'; 

 
// link codewars, leetcode

class App extends React.Component {
  render(){
    return(
      <div>
        <Banner/>
        <AboutMe/>
        <ContactMe/>
        <Experiences/>
        <Education/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
      )
    }
}

function Icons() {
  return(
    <div className = "icons">
    <a href="https://www.linkedin.com/in/peterdimitrov/" target="_blank">
    <img className = "so12" src="./linkedInIcon.png"/>
    </a>
    <a href="https://github.com/peter-dimitrov/" target="_blank">
      <img className = "so21" src="./githublogo.png"/>
    </a>
    </div>
  )
}

function Banner() {
  return (
    <div className="banbg" >
      <div className = "layer">
      </div>
      <h1 className = "name">Peter Dimitrov</h1>
      <h2 className = "tit">Software Engineer | Front-End Developer</h2>
      <div className = "bar">
          <Navbar/> 
        </div>
      <a href = "./Peter_R_Dimitrov_Resume-converted.pdf" className = "resumeButton" download>
        Download Resume (PDF)
      </a>
      {/* <div className = "icons">
        <Icons/>
      </div> */}
    </div>
  )
}


function AboutMe() {
  return (
    <div id = "abme" className = "abme">
    <div className = "abmeCombo">
        <img className = "pic" src="./pete-jtree2.png"/>
        <h className = "abmeheader">About Me</h>
      </div>
        <div className = "abmetext"> Hello and welcome to my website! My name is Peter and I am a React.JS developer. I created this website with the intentions of sharing my background, what I've been working on, and what I plan to do next!Hello and welcome to my website! My name is Peter and I am a React.JS developer. I created this website with the intentions of sharing my background, what I've been working on, and what I plan to do next! </div>
    </div>
    )
}

function ContactMe() {
  return (
    <div className = "come">
        <h className = "comeHeader">Contact Me</h>
          <h className = "so13text">
        <a className = "so13link" href="https://www.linkedin.com/in/peterdimitrov/" target="_blank">
          <img className = "so13" src="./linkedInIcon.png"/>
        peterdimitrov        </a></h>
        <h className = "so31text">
        <a className = "so31link" href="https://github.com/peter-dimitrov/" target="_blank">
          <img className = "so31" src="./githublogo.png"/>
        peter-dimitrov        </a></h>
      <h className = "phone">
      <img className = "phoneIcon" src="./phoneIcon.png"/>
      (309) 259-9243
      </h>
      <h className = "loc">
        <img className = "locIcon" src="./locationIcon.png"/>
        Los Angeles, CA
      </h>
      <a className = "email" href="mailto:peter.r.dimitrov@gmail.com">
      <img className = "mailIcon" src="./mail.png"/>
      peter.r.dimitrov@gmail.com
      </a>
      <div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className = "nav">
      <a className = "navLink" href="#abme">About Me </a>
      <a className = "navLink" href="#exp">Experience </a>
      <a className = "navLink" href="#edu">Education </a>
      <a className = "navLink" href="#proj">Projects </a>
      <a className = "navLink" href="#skills">Skills </a>
    </div>
  );
};

function Experiences(){
  return(
    <div id = "exp" className = "exp">
      <h className = "expheader">Experience</h>
      <div className = "circleTexts">
        <div className = "circle1text">June 2020 - September 2020</div>
        <div className = "circle2text">May 2020 - August 2020</div>
        <div className = "circle3text">June 2019 - August 2019</div>
      </div>
      

      <div className = "timeline">
      <div className = "circle1"/>
      <div className = "circle2"/>
      <div className = "circle3"/>
      </div>
        <div className = "exps">



        <div className = "exp1">
        <h className = "comp">SeedStages, Los Angeles, CA</h>
        <br/>
        <h className = "title ">Full-Stack Software Engineering Intern</h>
        <br/>
        <br/>
        <div className = "bullet">
        • Used React Native to develop new customer-facing features for a mobile app ahead of product launch
        </div>
        <div className = "bullet">
        • Wrote Python scripts to import, export, manipulate, and back up data from Firebase database
        </div>
        <div className = "bullet">
        • Conducted weekly usability testing, quality assurance, and debugging in React Native
        </div>
        <div className = "bullet">
        • Collaborated with UX team to conceptualize and implement user interfaces
        </div>
        <div className = "bullet">
        •	Managed version control and build deployments using Bitbucket
        </div>
        </div>




        <div className = "exp2">
        <h className = "comp">Claremont McKenna College, Claremont, CA</h>
        <br/>
        <h className = "title ">Natural Language Processing Researcher</h>
        <br/>
        <br/>
        <div className = "bullet">
        •	Used natural language algorithms to parse metadata from 750+ news articles on geopolitical events
        </div>
        <div className = "bullet">
        • Developed Python test cases for 500+ hostnames to improve algorithm’s language capabilities
        </div>
        <div className = "bullet">
        •	Collaborated with fellow researchers using Git to commit and push changes to Professor Michael Izbicki’s open-source repository
        </div>
        </div>
        <div className = "exp3">
        <h className = "comp">Arvato Financial Solutions, Seattle, WA</h>
        <br/>
        <h className = "title ">Product Management Intern</h>
        <br/>
        <br/>
        <div className = "bullet">
        •	Collaborated with software and data teams to develop and launch a dashboard built in Power BI
        </div>
        <div className = "bullet">
        •	Developed use cases for sales and marketing teams to demonstrate to potential customers         
        </div>
        <div className = "bullet">
        •	Conducted research and analyzed competitive landscapes in the financial services and tech industries to inform market entry strategy and provide recommendations for management
        </div>
        </div>
      </div>
      </div>
  )
}

function Education() {
  return(
    <div id = "edu" className = "edu">
      <h className = "eduheader">Education</h>
      <div className = "edus">
        <div className = "edu1">
        {/* Pomona College, Claremont, CA 	August 2016 – May 2020
Bachelor of Arts in Economics 
•	Regular GPA: 3.3/4.0
•	STEM GPA: 3.5/4.0
•	Relevant Coursework: Data Structures & Algorithms (Python), Foundations of Data Science (R, SQL), Intro to Computer Science (Python), Linear Algebra (MATLAB), Econometrics (Stata), Statistics (Stata)
 */}
          <h className = "comp">Pomona College</h>
          <div>Claremont, CA</div>
          <div>Bachelor of Arts in Economics, Class of 2020</div>
          <br/>
          <div className = "bullet">
          • GPA: 3.5/4.0
          </div>
          <div className = "bullet">
          • Relevant Coursework: Data Structures & Algorithms (Python), Foundations of Data Science (R, SQL), Intro to Computer Science (Python), Linear Algebra (MATLAB), Econometrics (Stata), Statistics (Stata)
          </div>
        </div>
        <div className = "edu2">
          <h className = "comp">West High School </h>
          <div>Iowa City, IA</div>
          <div>Class of 2016</div>
          <br/>
          <div className = "bullet">
          • GPA: 3.84/4.00
          </div>
          <div className = "bullet">
          • Awards: National Merit Scholar, National Honor Society, AP Scholar with Distinction
          </div>
          <div className = "bullet">
          • Relevant Coursework: Linear Algebra (MATLAB), AP Computer Science (Java)
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return(
    <div id = "proj" className = "proj">
      <h className = "projheader">Projects</h>
      <a className = "navLink" href="#jerseySlice">Projects </a>
    </div>
  )
}

function Skills() {
  return(
    <div id = "skills" className = "skills">
      <h className = "skillheader">Skills</h>
        <div className = "skill"> React.JS </div>
        <div className = "skill"> React Native </div>
        <div className = "skill"> JavaScript </div>
        <div className = "skill"> Python </div>
        <div className = "skill"> Java </div>
        <div className = "skill"> HTML </div>
        <div className = "skill"> CSS </div>
        <div className = "skill"> AWS </div>
        <div className = "skill"> Git/Github </div>
        <div className = "skill"> Firebase </div>
        <div className = "skill"> Unix/Linux </div>
        <div className = "skill"> SQL </div>
        <div className = "skill"> R </div>
        {/* <div className = "skill"> MATLAB </div> */}
    </div>
  )
}

function Footer(){
  return(
    <div className = "footer">
    <a className = "buttons" href="mailto:peter.r.dimitrov@gmail.com">
      <img className = "mailIcon2" src="./mail.png"/>
      </a> 
        <a className = "buttons" href="https://www.linkedin.com/in/peterdimitrov/" target="_blank">
          <img className = "so1" src="./linkedInIcon.png"/>
        </a>
        <a className = "buttons" href="https://github.com/peter-dimitrov/" target="_blank">
          <img className = "so2" src="./githublogo.png"/>
        </a>

    </div>
  )
}

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* const ResumeButton = () => {
  return (
    <button onClick = {() => console.log('The link was clicked.')}>Resume</button>
  )
}

const ProjectsButton = () => {
  return (
    <button onClick = {() => console.log('The link was clicked.')}>Projects</button>
  )
} */}

export default App;
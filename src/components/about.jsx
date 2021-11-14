import React from "react";
import "./aboutMe.css";
import person from "../img/me.png";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={person} alt="person icon" 
        width="250" 
        height="250"/>
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
        I am an aspiring web/software developer. I am a recent University graduate in
          IT and Business and decided to take this bootcamp opportunity to enhance my knowledge in the web development
          sector.
          </p><p>
I have throughly  enjoyed my time on the course and now feel this is  the right time to take the next step. I  have learnt a variety 
of different languages, programmes and  frameworks that i have put to use to build many different projects.
          You can see more of my work on {""}
          <a href="https://github.com/dan297" target="_blank">
            GitHub
          </a>{" "}
          and {""}
          <a
            href="https://www.linkedin.com/in/daniel-white-8148b9159/"
            target="_blank"
          >
            LinkedIn
          </a>
          
        </p>
        <p>
          <a
            href="https://docs.google.com/document/d/1aohOfDi-Lhx93hfEkixzCHLm49GliLS9NetAZTGZjFE/edit"
            target="_blank"
          >
            View CV/Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
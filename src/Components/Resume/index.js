import React from "react";
import Container from "react-bootstrap/Container";

function Resume() {
  return (
    <section>
      <Container>
        <div>
          <h2 className="my-4 px-5 py-2 col-sm-4" style={{textAlign:"center"}}  id="resume">Resume</h2>
          <span>___________________________________</span>
          <h4 className="my-4">
            Download a PDF version{" "}
            <a
              href={require("../../assets/downloadable-files/resume.pdf")}
              download="Christian Dehek Resume"
            >
              <span>here</span>
            </a>
            !
          </h4>
        </div>
        <div className="my-2 px-1 py-4 pl-3 col-sm-4" id="skills">
          <h3>Front-End Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h3>Back-End Proficiencies</h3>
          <ul>
            <li>SQL Databases</li>
            <li>NoSQL Databases</li>
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Resume;

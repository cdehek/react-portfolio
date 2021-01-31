import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const projects = [
    {
      name: "Run Buddy",
      description: "Running App",
      fileName: "run-buddy-preview",
      src: "../../assets/run-buddy-preview.PNG",
      link: "https://github.com/cdehek/run-buddy",
      deployed: "https://cdehek.github.io/run-buddy/",
    },
    {
      name: "Space Time Research",
      fileName: "space-research-preview",
      description: "App for researching space terms",
      src: "../../assets/space-time-research-preview.PNG",
      link: "https://github.com/ChazzKreutzkamp/group-project-one-Group4",
      deployed: "https://chazzkreutzkamp.github.io/group-project-one-Group4/",
    },
    {
      name: "All Leaf No Beef",
      fileName: "all-leaf-no-beef-preview",
      description: "App for green thumbs growing inside",
      src: "../../assets/all-leaf-no-beef-preview.PNG",
      link: "https://github.com/LoganMerchant/all-leaf-no-beef",
      deployed: "https://tranquil-brushlands-81839.herokuapp.com/",
    },
    {
      name: "Password Generator",
      fileName: "password-generator-preview",
      description: "Password generating application",
      src: "../../assets/password-generator-preview.PNG",
      link: "https://github.com/cdehek/javascript-password-generator",
      deployed: "https://cdehek.github.io/javascript-password-generator/",
    },
    {
      name: "Trackt",
      fileName: "trackt-preview",
      description: "Goal Tracking Social Media App",
      src: "../../assets/trackt-preview.PNG",
      link: "https://github.com/heather-everton/trackt",
      deployed: "https://fierce-basin-22098.herokuapp.com/login",
    },
  ];

  return (
    <section>
      <h3
        style={{ textAlign: "center" }}
        className="my-5 px-5 py-2 ml-5"
        id="project"
      >
        Current Projects:
      </h3>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-sm-12 col-lg-6 py-2" key={project.name}>
              <div className="card h-100" >
                <div className="card-background">
                  <img
                    className="card-img"
                    id="background-img"
                    src={
                      require(`../../assets/${project.fileName}.PNG`).default
                    }
                    alt="preview img"
                  />
                </div>
                <div className="card-img-overlay">
                  <h1 className="link">
                    <a
                      id="github-icon"
                      target="_blank"
                      rel="noreferrer"
                      href={project.link}
                    >
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                  </h1>
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success"
                    id="project-btn"
                  >
                    Check it out!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;

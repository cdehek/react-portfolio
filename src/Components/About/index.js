import React from "react";
import Container from "react-bootstrap/Container";
import portrait from "../../assets/me_65.jpg";

function About() {
  return (
    <Container>
      <section>
        <div className="mt-5">
          <h3 id="about" className="my-4 px-5 py-2 col-sm-4 about">About Me</h3>
          <img
            className="portrait"
            src={portrait}
            style={{ width: "10%" }}
            alt=""
          />
          <p className="about-me">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tristique dui non justo accumsan accumsan. Integer ut
            porta massa. Phasellus facilisis, arcu vel luctus mollis, diam
            turpis tristique ex, cursus lacinia libero dui varius nisi. Fusce
            vel ex ligula. Praesent magna lectus, auctor et lobortis ut,
            bibendum vel enim. Curabitur efficitur, orci sit amet rhoncus
            rhoncus, ex lacus rutrum lectus, sed lobortis sapien tellus non
            dolor. Praesent ex ligula, porttitor vitae nisl non, facilisis
            mattis metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam suscipit nisl at felis vestibulum, a blandit ante
            consectetur. Donec justo magna, viverra eget posuere eu, facilisis
            nec arcu. Vivamus iaculis lorem non malesuada bibendum. Nulla id
            vehicula ligula. Curabitur facilisis ultricies cursus. Praesent odio
            urna, ultricies vitae dui non, pretium molestie magna. Proin
            tristique libero ante, id commodo lacus rutrum consequat.{" "}
          </p>
          <p className="about-me">
            Cras in bibendum magna. Vivamus mattis pharetra lectus in posuere.
            Sed convallis arcu sed molestie condimentum. In ut libero aliquam,
            scelerisque purus ac, tempor purus. Nullam et leo urna. Vestibulum
            vitae nunc cursus tellus tempor sodales quis fermentum odio.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
            pharetra diam sit amet vulputate imperdiet. Nullam velit risus,
            volutpat sit amet arcu ut, aliquam lobortis nisi. Aenean tempus et
            elit ac vehicula. Phasellus libero libero, molestie in mi a, congue
            ultricies sem. Proin et sapien turpis. Vestibulum elementum ligula
            at turpis auctor ullamcorper.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default About;

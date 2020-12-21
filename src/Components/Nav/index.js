import React, { useEffect } from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation({ currentCategory, setCurrentCategory, categories }) {
  useEffect(() => {
    document.title = `${currentCategory} | Christian Dehek`;
  }, [currentCategory]);

  return (
    <Navbar
      id="navigation"
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <i>Christian Dehek</i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {categories.map((item, index) => (
              <Nav.Link
                className={`nav-item mx-4 ${
                  currentCategory.name === item.name && "navActive"
                }`}
                key={index}
                eventKey={item}
              >
                <span
                  // data-toggle="collapse"
                  className="nav-link btn py-4"
                  onClick={() => setCurrentCategory(item)}
                >
                  {item}
                </span>
              </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

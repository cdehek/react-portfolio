import React, { useEffect } from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Nav({ currentCategory, setCurrentCategory, categories }) {
  useEffect(() => {
    document.title = `${currentCategory} | Christian Dehek`;
  }, [currentCategory]);


  return (
    <header id="navigation">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">
              <i>Christian Dehek</i>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                {categories.map((item, index) => (
                  <li
                    className={`nav-item mx-4 ${
                      currentCategory.name === item.name && "navActive"
                    }`}
                    key={index}
                  >
                    <span
                      data-toggle="collapse"
                      className="nav-link btn py-4"
                      onClick={() => setCurrentCategory(item)}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;

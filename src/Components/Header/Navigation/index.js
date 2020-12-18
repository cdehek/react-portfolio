import React from "react";

function Nav() {
  const categories = [
    {
      name: "About Me",
    },
    {
      name: "Contact",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <nav>
        <ul className="flex-row list-group">
          <h2>
            <a className="" href="/" style={{ backgroundColor: "#ebdccb" }}>
              Christian Dehek
            </a>
          </h2>
          {categories.map((category) => (
            <li
              className="mx-2 list-group-item"
              style={{ backgroundColor: "#ebdccb", fontSize: "20px" }}
              key={category.name}
            >
              <span onClick={() => categorySelected(category.name)} >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

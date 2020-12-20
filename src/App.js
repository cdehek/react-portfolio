import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact/";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Resume from "./Components/Resume";

function App() {
  const [categories] = useState(["About Me", "Contact", "Portfolio", "Resume"]);

  const [currentCategory, setCurrentCategory] = useState("About Me");

  function renderPage() {
    switch (currentCategory) {
      case "About Me":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return "About Me";
    }
  }

  return (
    <div>
      <Nav
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categories}
      />
      <main>{renderPage(currentCategory)}</main>
      <Footer />
    </div>
  );
}

export default App;

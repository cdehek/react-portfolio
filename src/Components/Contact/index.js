import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log("errorMessage", errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <div className="container">
        <h3 id="contact" className="my-5 px-1 py-2 pl-5 col-sm-4">Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onBlur={handleChange}
              defaultValue={name}
              className="form-control"
              style={{width: "40%"}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onBlur={handleChange}
              defaultValue={email}
              className="form-control"
              style={{width: "40%"}}

            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="75"
              onBlur={handleChange}
              defaultValue={message}
              className="form-control"
              style={{width: "40%"}}

            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

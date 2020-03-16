import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

const mystyle = {
  topPadding: "30px"
};

class Contact extends Component {
  render() {
    return (
      <div>
        <center>
          <ContactForm />
        </center>
      </div>
    );
  }
}

export default Contact;

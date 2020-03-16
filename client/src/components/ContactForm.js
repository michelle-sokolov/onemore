import React from "react";

const mystyle = {
  borderStyle: "solid",
  contentAlign: "center",
  padding: "25px",
  width: "400px",
  height: "400px"
};

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <br />
        The sky is the limit at Raven's Restoration, Custom Orders are our
        speciality.
        <br />
        Please leave a detailed message about your custom project and we'll get
        back to you right away.
        <br />
        <br />
        <form
          style={mystyle}
          onSubmit={this.submitForm}
          action="https://formspree.io/xyypebqn"
          method="POST"
        >
          <label>Email:</label>
          <br />
          <input type="email" name="email" />
          <br />
          <br />
          <label>Phone Number:</label>
          <br />
          <input type="number" name="number" />
          <br />
          <br />
          <label>Message:</label>
          <br />
          <input
            style={{ height: "150px", width: "300px" }}
            type="text"
            name="message"
          />
          <br />
          <br />
          {status === "SUCCESS" ? (
            <p>Message Sent! We'll be in touch soon about your custom order.</p>
          ) : (
            <button>Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

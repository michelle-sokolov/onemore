import React from "react";

const mystyle = {
  borderStyle: "solid",
  contentAlign: "center",
  padding: "25px",
  width: "500px",
  height: "500px",
  bottomPadding: "100px"
};

const textstyle = {
  marginLeft: "150px",
  marginRight: "150px"
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
        <h1> Contact Us</h1>
        <br />
        <p style={textstyle}>
          Raven’s Restoration wants to emphasize collaboration. The best
          projects are made with a shared vision between the craftsmen and the
          visionary. Please, reach out with any ideas or concepts and let’s
          bring them to realization. Each of these pieces have their unique
          story and that’s what makes them truly special to both parties. I am
          grateful to have the opportunity to work with my pops moving forward
          and I’m excited for the timeless joy these pieces will create for
          everyone involved.
          <br />
          <br />
          <i>
            “The place to improve the world is first in one's own heart and head
            and hands, and then work outward from there.”
          </i>
        </p>
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
          <input type="email" name="email" style={{ width: "300px" }} />
          <br />
          <br />
          <label>Phone Number:</label>
          <br />
          <input type="number" name="number" style={{ width: "300px" }} />
          <br />
          <br />
          <label>Message:</label>
          <br />
          <input
            style={{ height: "200px", width: "400px" }}
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

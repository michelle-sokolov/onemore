import React from "react";
import "./style.css";

const mystyle = {
  color: "black",
  contentAlign: "center",
  padding: "20px",
  marginLeft: "150px",
  marginRight: "150px"
};
const styler = {
  fontSize: "36px",
  fontWeight: "bold",
  width: "1000px"
};
const imgstyler = {
  width: "1000px",
  height: "300px"
};

function About() {
  return (
    <div>
      <img
        style={imgstyler}
        src="https://i.ibb.co/1JFF5vN/download-3.jpg"
        alt="img"
      />
      <br />
      <center>
        <div className="about">
          <div style={styler}> About Us</div>
          <p style={mystyle}>
            This company was born out of a period of my life that would be
            largely considered a low point and series of unfortunate events. I
            was dealing with health issues that put my life on pause and
            required me to move back home indefinitely. I spent countless days
            reflecting on my past decisions and intentions moving forward. I
            knew I needed a change in direction but I wasn’t sure what exactly
            it would entail. That is until, one windy night an enormous oak tree
            came crashing down and barreled through our deck.
            <br />
            <br />
            The following morning I was in awe of the destruction caused by the
            weight of the tree with a little help from gravity. My father and I
            took on the project of slabbing the tree and fixing the deck
            ourselves. Not only did I cherish the time spent learning from my
            father but working with wood sparked a fire inside me. Something
            about taking a fallen tree and creating artwork to be cherished by
            others resonated deeply with my father and I.
            <br />
            <br />
            Raven’s Restoration is the result of some hard learned lessons. I
            want the company to reflect the principles that now dictate my days
            moving forward. This website contains a catalogue of our work as
            well as a blog intended for projects, a tab dedicated to my love for
            literature, and travel videos and tips. The goal is to inspire
            everyone to pursue something that fills them with the same joy the
            Raven Family feels when they work with wood.
            <br />
            <br />
            <i>
              “What lies behind us and what lies before us are tiny matters
              compared to what lies within us.”
            </i>
            <br />
            -Ralph Waldo Emerson
          </p>
        </div>
      </center>
    </div>
  );
}

export default About;

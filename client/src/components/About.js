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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc
          scelerisque viverra mauris in. Quis ipsum suspendisse ultrices gravida
          dictum. Tincidunt lobortis feugiat vivamus at augue. Varius duis at
          consectetur lorem donec massa sapien faucibus et. Vel eros donec ac
          odio tempor orci. Morbi tincidunt augue interdum velit euismod in
          pellentesque massa. Enim nunc faucibus a pellentesque sit amet
          porttitor. Non odio euismod lacinia at. Ullamcorper a lacus vestibulum
          sed arcu non odio euismod. Viverra accumsan in nisl nisi. Fermentum
          posuere urna nec tincidunt. Vulputate odio ut enim blandit volutpat
          maecenas.
        </p>
        </div>
      </center>
    </div>
  );
}

export default About;

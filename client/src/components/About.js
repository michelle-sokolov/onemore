import React from "react";

const mystyle = {
  color: "black",
  contentAlign: "center",
  padding: "20px"
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
      <img style={imgstyler} src="https://imgur.com/HdB1hmV.png" alt="img" />
      <br />
      <center>
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
      </center>
    </div>
  );
}

export default About;
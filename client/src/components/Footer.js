import React from "react";

const styler = {
  position: "floating",
  width: "100%",
  height: "150px",
  backgroundColor: "black",
  color: "white"
};
const imgstyler = {
  top: "10px",
  height: "80px",
  float: "right"
};

function Footer() {
  return (
    <div style={styler}>
      {/*<img style={imgstyler} src="https://imgur.com/XWmkQCs.png" alt="ig" /> */}
      <br />
      <br />
      <br />
      <center>
      <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
      Raven's Restoration Copyright 2020
   </center> </div>
  );
}

export default Footer;

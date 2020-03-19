import React from "react";

const styler = {
  position: "sticky",
  width: "100%",
  height: "100px",
  backgroundColor: "black",
  color: "white"
};
const imgstyler = {
  top: "10px",
  height: "100px",
  float: "right"
};

function Footer() {
  return (
    <div style={styler}>
      <img style={imgstyler} src="https://imgur.com/XWmkQCs.png" alt="ig" />
      <br />
      <br />
      <br />
      Raven's Restoration Copyright 2020
    </div>
  );
}

export default Footer;

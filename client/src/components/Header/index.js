import React from "react";
import "./style.css";

function Header() {
  const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "'Poiret One', cursive"
  };

  return (
    <header>
      <h2 style={mystyle}>Raven's Restoration</h2>
      <br />
    </header>
  );
}

export default Header;

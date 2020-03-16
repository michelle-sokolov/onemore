import React from "react";
//mongodb+srv://michelleSokolov:<password>@cluster0-cfbou.gcp.mongodb.net/test?retryWrites=true&w=majority
function Nav() {
  const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px"
  };
  return (
    <nav style={mystyle}>
      <div className="links">
        <a style={mystyle} href="/">
          Home{" "}
        </a>
        <a style={mystyle} href="/search">
          Shop All{" "}
        </a>
        <a style={mystyle} href="/contact">
          Custom Woodwork{" "}
        </a>
        <a style={mystyle} href="/blog">
          Our Blog{" "}
        </a>
      </div>
    </nav>
  );
}
export default Nav;

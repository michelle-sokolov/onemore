import React from "react";

//mongodb+srv://michelleSokolov:<password>@cluster0-cfbou.gcp.mongodb.net/test?retryWrites=true&w=majority
function Nav() {
  const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px"
  };
  const style = {
    padding: "10px",
    margin: 0,
    top: 100,
    right: 10,
    left: 'auto',
    position: 'fixed',
    color: "white",
    backgroundColor: "black",
  }
  const styles = {
    padding: "10px",
    margin: 0,
    top: 100,
    right: 50,
    left: 'auto',
    position: 'fixed',
    color: "white",
    backgroundColor: "black",
  }


  return (
    <nav style={mystyle}>
      <div className="links">
        <a style={mystyle} href="/">
          Home{" "}
        </a>
        <a style={mystyle} href="/search">
          Shop All{" "}
        </a>
        <a style={mystyle} href="/wishlist">
          My Wishlist{" "}
        </a>
        <a style={mystyle} href="/contact">
          Custom Woodwork{" "}
        </a>
        <a style={mystyle} href="/blog">
          Our Blog{" "}
        </a>
      
        <a style={styles} href="/cart">
          My cart{" "}
        </a>
        <a style={style} href="/cart">
          {" "}<i class="fa fa-shopping-cart"></i>
        </a>
      </div>
    </nav >
  );
}
export default Nav;

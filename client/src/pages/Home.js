import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from "../components/category";
import About from "../components/About";
import Category from "../components/category";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
          <About />
          <Category />
        </center>
      </div>
    );
  }
}
export default Home;

import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from "../components/category";
import Principles from "../components/Principles";
//import CarouselDemo from "../components/CarouselDemo";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
          <Category />
          <br />
          <Principles />
          <br />
        </center>
      </div>
    );
  }
}
export default Home;

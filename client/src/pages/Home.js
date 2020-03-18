import React, { Component } from "react";
import HomeItem from "../components/home";
import DemoCarousel from "../components/Carousel/DemoCarousel";
class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
         <DemoCarousel />
        </center>
      </div>
    );
  }
}

export default Home;

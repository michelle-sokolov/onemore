import React, { Component } from "react";
import HomeItem from "../components/home";
// import DemoCarousel from "../components/Carousel/DemoCarousel";
import About from "../components/About"
import Category from '../components/category'
class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
         {/* <DemoCarousel /> */}
         <About />
          <Category />
        </center>
      </div>
    );
  }
}
export default Home
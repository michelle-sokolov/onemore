import React, { Component } from "react";
import HomeItem from "../components/home";
import  Layout from "../components/BackgroundSlider";
// import DemoCarousel from "../components/Carousel/DemoCarousel";
// import About from "../components/About"


import Category from '../components/category'

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />

         {/* <DemoCarousel /> */}
         {/* <About /> */}

          <Category />
<Layout />
        </center>
      </div>
    );
  }
}
export default Home
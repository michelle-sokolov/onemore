import React, { Component } from "react";
import HomeItem from "../components/home";
<<<<<<< HEAD
// import DemoCarousel from "../components/Carousel/DemoCarousel";
// import About from "../components/About"
=======
import DemoCarousel from "../components/Carousel/DemoCarousel";
import About from "../components/About"
import Category from '../components/category'
>>>>>>> 2a2dd94a8f6844d112dbb2a6abacc16b7ab71343
class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
<<<<<<< HEAD
         {/* <DemoCarousel /> */}
         {/* <About /> */}
=======
         <DemoCarousel />
         <About />
          <Category />
>>>>>>> 2a2dd94a8f6844d112dbb2a6abacc16b7ab71343
        </center>
      </div>
    );
  }
}
export default Home
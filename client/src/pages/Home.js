import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from '../components/category';
import Carousel from '../components/Carousel';
class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
          <Carousel />
         {/* <About /> */}

          <Category />
        </center>
      </div>
    );
  }
}
export default Home
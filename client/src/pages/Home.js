import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from '../components/category';
import CarouselDemo from '../components/CarouselDemo';
class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
          <CarouselDemo />
          <Category />
        </center>
      </div>
    );
  }
}
export default Home
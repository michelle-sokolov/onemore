import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from "../components/category";
import CarouselDemo from "../components/CarouselDemo";
import Principles from "../components/Principles";
//import CarouselDemo from "../components/CarouselDemo";


class Home extends Component {
  render() {
    return (
      <div>
        <center>
          {/* <HomeItem /> */}
          <HomeItem />
          <Category />
          <br />
          <Principles />
          <br />
        </center>
      </div>
    )
  }
}

  // const mapStateToProps = (state) => {
  //   return {
  //     items: state.items
  //   }
  // }
  
  export default Home;

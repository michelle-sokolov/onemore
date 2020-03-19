import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from "../components/category";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
          <Category />
          <br />
        </center>
      </div>
    );
  }
}
export default Home;

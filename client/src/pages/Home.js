import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from "../components/category";
import Principles from "../components/Principles";
//import CarouselDemo from "../components/CarouselDemo";

class Home extends Component {
  render() {
    // let itemList = this.props.items.map(item => {
    //   return (
    //     <div className="card" key={item.id}>
    //       <div className="card-image">
    //         <span className="card-title">{item.title}</span>
    //         <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
    //       </div>


    //     </div>
    //   )
    // })
    return (
      <div>
        <center>
          {/* <HomeItem /> */}
          <About />
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

  const mapStateToProps = (state) => {
    return {
      items: state.items
    }
  }
  
  export default (Home)

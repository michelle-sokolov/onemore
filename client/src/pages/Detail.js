import React, { Component } from "react";
import Items from "../components/Items";
import SaveBtn from "../components/SaveBtn";
import items from "../items.json";

class Detail extends Component {
  state = {
    items
  };
  render() {
    return (
      <div>
        <br /> <br />
        <center>
          <h2>Shop All Items</h2>
        </center>
        <center>
          <h5>
            Our product is made to order. Once your ready to make a purchase,
            <a href="/contact">contact us here</a> and we'll get the process
            started.
          </h5>
        </center>
        {this.state.items.map(item => (
          <Items {...item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Detail;

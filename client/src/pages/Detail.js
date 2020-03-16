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
        <h2>Shop All Items</h2>
        {this.state.items.map(item => (
          <Items {...item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Detail;

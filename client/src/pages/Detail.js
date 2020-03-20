import React, { Component } from "react";
import Items from "../components/Items";
import items from "../items.json";

class Detail extends Component {
  state = {
    items
  };

  render() {
    var myarray = [];
    function handleClick(e) {
      e.preventDefault();
      var checkboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      for (var i = 0; i < checkboxes.length; i++) {
        myarray.push(checkboxes[i].value);
      }
      console.log(myarray);
      document.getElementById("new").innerHTML = myarray;
    }
    return (
      <div>
        <div>
        <br />
        <center>
          <h2>Shop All Items</h2>
        </center>
        <br />
        <center>
          <h5>
            Our product is made to order. Once you are ready to make a purchase,
            <a href="/contact">contact us here</a> and we'll get the process
            started.
          </h5>
          <br />
          <h6>check off your favorites to save for later! </h6>
          <button onClick={handleClick}>Save to Wishlist</button>
        </center>
         </div>
        
        {this.state.items.map(item => (
          <Items {...item} key={item.id} />
        ))}

        <center style={{ fontSize: "30px" }}>MY WISHLIST:</center>
        <center>
          <div id="new"></div>
        </center>
      </div>
    );
  }
}

export default Detail;

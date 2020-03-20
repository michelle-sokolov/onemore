import React, { Component } from "react";
import WishlistItem from "../components/wishlist";
import myarray from "./Detail";

function Wishlist(props) {
  // state = {
  //  myarray: myarray
  // };
  return (
    <div>
      <center>
        <h1> content </h1>
        {/*this.state.myarray.map(item => (
          <Items {...item} key={item.id} />
          )) */}
        {console.log(myarray)}
      </center>
    </div>
  );
}

export default Wishlist;

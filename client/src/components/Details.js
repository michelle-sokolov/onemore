import React from "react";
import Items from "../components/Items";
import items from "../items.json";
import "./style.css";

const mystyle = {
  display: "flex"
};

function Detail(props) {
  return (
    <div  style={mystyle}>
      <br /> <br />
      {props.items.map(item => (
        <Items {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Detail;

import React from "react";
import SaveBtn from "../components/SaveBtn";

const mystyle = {
  height: "100px",
  width: "100px"
};

function Items(props) {
  var added = [];
  function handleClick(e) {
    e.preventDefault();
    alert(props.name + " was clicked");
    added.push(props.name);
    console.log(added);
  }
  return (
    <div>
      <div>
        <img style={mystyle} alt={props.name} src={props.image} />
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <button onClick={handleClick}>{props.button}</button>
        </ul>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Items;

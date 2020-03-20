import React from "react";
import "./style.css";

const mystyle = {
  height: "200px",
  width: "25%"
};
const pagestyle = {
  width: "100%"
};

function Items(props) {
  return (
    <div className="wrapper">
      <div>
        <div className="card">
          <div className="content">
            <center>
              <div className="img-container">
                <img style={mystyle} alt={props.name} src={props.image} />
              </div>
            </center>
            <ul>
              <li style={pagestyle}>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Description:</strong> {props.description}
              </li>
              <li>
                <strong>Dimensions:</strong> {props.dimensions}
              </li>
              <li>
                <strong>Price:</strong> {props.price}
              </li>
              <input
                type="checkbox"
                id={props.id}
                name={props.name}
                value={props.name}
              />
            </ul>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;

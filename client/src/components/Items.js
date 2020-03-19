import React from "react";
import "./Details.css";

// import SaveBtn from "../components/SaveBtn";

const mystyle = {
  height: "100px",
  width: "100px"
};
const pagestyle = {
  width: "500px"
};

function Items(props) {
  var myarr = [];
  function handleClick(e) {
    e.preventDefault();
    myarr.push(props.name);
    console.log(myarr);
  }

  return (
    <div className="wrapper">
      <div>
        <div className="card">
          <div>items i like: {myarr}</div>
          <div className="content">
            <center>
              <img style={mystyle} alt={props.name} src={props.image} />
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
              <button onClick={handleClick}>{props.button}</button>
              {/*<input
                type="checkbox"
                id={props.id}
                name={props.name}
                value={props.name}
              />*/}
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

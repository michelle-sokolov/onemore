import React from "react";

const mystyle = {
  color: "white"
};

function SaveBtn(props) {
  return (
    <button className="btn btn-warning save-btn" style={mystyle} {...props}>
      Save
    </button>
  );
}

export default SaveBtn;

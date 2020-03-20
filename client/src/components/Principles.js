import React from "react";

const imgstyler = {
  width: "1000px",
  height: "300px"
};

function Principles() {
  return (
    <div>
      <img
        style={imgstyler}
        src="https://i.ibb.co/McnxN0x/mountain-sunrise-800x500.jpg"
        alt="mountain-sunrise"
      />
      <br />
      <br />
      <h1>Our Principles</h1>
      <br />
      1. Valuing time with loved ones
      <br />
      <br />
      2. Finding a mentor for work/life
      <br />
      <br />
      3. The value of seeing the final product of work done with your two hands
      <br />
      <br />
      4. Having good intention behind every action
      <br />
      <br />
      5. Get out there and live because every day is a bonus
      <br />
      <br />
      6. Even if its just a hobby, find a way to do what you love
      <br />
      <br />
      7. Its all up to you, whether you want to believe it or not
      <br />
      <br />
    </div>
  );
}

export default Principles;

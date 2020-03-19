
import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Image1 from "./assets/1.jpeg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";

const CarouselDemo = () => (
  <div
    className="App"
    style={{ width: "1200px", margin: "auto", padding: "50px" }}
  >
    <Carousel arrows infinite>
      <img src={Image1} />
      <img src={Image2} />
      <img src={Image3} />
    </Carousel>
  </div>
);

export default CarouselDemo;
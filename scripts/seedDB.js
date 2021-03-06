const mongoose = require("mongoose");
const Product = require("../models/Product");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernapp");

const products = [
  {
    info: {
      id: 1,
      name: "Oak Barrell Stave Trays",
      image: "https://imgur.com/M9pYoNA.png",
      description:
        "Made out of used wine barrels from our Frostwatch label.These barrels no longer impart the flavors needed for our wines, but that doesn’t mean they can’t be enjoyed. We glue three staves together and add four foot pads for added stability. This piece is oil finished and great for home display or unique serving method.",
      dimensions: "37 feet by 8.5 feet",
      price: "$45"
    }
  },
  {
    info: {
      id: 2,
      name: "Oak Barrell Lazy Susan",
      image: "https://imgur.com/YuLDWRF.png",
      description:
        "Made out of used barrels from our Frostwatch label. The headboards are glued together forming a sturdy yet beautiful surface. Underneath the Lazy Susan we have reinforced the headboards with a circular ¼ inch Masonite piece. To allow the Lazy Susan to spin easily we attach a ball bearing circular turntable with rubber feet to avoid scratching.  Perfect for serving any number of guests in a creative and efficient manner.",
      dimensions: "Diameterof 22 feet and Height of 1.5 feet",
      price: "$45"
    }
  },
  {
    info: {
      id: 3,
      name: " Custom Cribbage Board",
      image: "https://imgur.com/HdB1hmV.png",
      description:
        "These boards are slabbed from enormous oak trees that have fallen down over the years, the ages range from 160-300 year old. They are slabbed, planed, sanded, and holes are drilled. The three pairs of pegs are crafted from ¼ inch diameter rods of brass, stainless steel and mild steel (Mild Steel painted black for better differentiation from stainless steel and corrosion resistance). The pegs are then milled with ridges for appearance and grip. Underneath the board is a hollowed space for peg storage with a copper plate attached to a brass hinge for easy accessibility. Each board is meticulously crafted and inscriptions are customized for each customer. Hand engraved titles and messages are encouraged!",
      dimensions: "Length of 22.5 feet by Width of 7.5 feet by Height: 4 feet",
      price: "$160"
    }
  },
  {
    id: 4,
    name: "Aluminum Epoxy Coffee Table",
    image: "https://imgur.com/YuLDWRF.png",
    description:
      "Beautiful 300 year old oak that fell down on the property. Years of termite damage left beautiful fragmented piece. We saw an opportunity to create a unique piece by filling in the damaged areas with layer after layer of epoxy. The wood and epoxy now seamlessly integrate to form a single piece. The table was finished with several layers of polyurethane for protection and water resistance. The stand is an aluminum beam that gives the table a modern look paired with extra stability.",
    dimensions: "Length of 60 feet by Width of 17 feet by Height of 20 feet",
    price: "$475"
  },
  {
    id: 5,
    name: "Epoxy Coffee Table",
    image: "https://imgur.com/YuLDWRF.png",
    description:
      "Twin piece to the “Aluminum Epoxy Coffee Table”, this piece was crafted in a similar manner. The 300-year-old oak was sanded down and finished with several layers of polyurethane. This table is also a blend of oak and epoxy, however, we decided to go a different route with the legs. The table is held in place by 3/8 inch flat bar steel bent to shape with an oxyacetylene torch. These custom-made legs make the table extremely rugged and durable.",
    dimensions: "Length of 58 feet by Width of 16 feet by Height of 21.5 feet",
    price: "$450"
  },
  {
    id: 6,
    name: "Custom Cutting Boards",
    image: "https://imgur.com/YuLDWRF.png",
    description:
      "We make a variety of different cutting boards. They range in shapes, sizes, thicknesses, type of wood, live edge vs cut edge, laminates vs one piece. All boards are finished with food grade mineral oil/beeswax/carnauba wax and have customized inscriptions. We love working with customers to create their perfect board!",
    dimensions: "All boards can be made to your specific dimensions.",
    price: "$45"
  },
  {
    id: 7,
    name: "Silver Steel Bench",
    image: "https://imgur.com/YuLDWRF.png",
    description:
      "Made of 160-year-old White Oak. Once slabbed the outer bark was chipped away, giving it the semi-round bottom. We custom made the 3/8 inch flat steel by bending it to fit directly in the notches underneath the bench. This bench was also finished with polyurethane, so it can remain outside regardless of weather conditions.",
    dimensions: "Length of 58 feet by Width of 14 feet by Height of 19.5 feet",
    price: "$475"
  },
  {
    id: 8,
    name: "Copper Plated Outdoor Bench",
    image: "https://imgur.com/YuLDWRF.png",
    description:
      "This behemoth of a bench was an enormous piece that was slabbed off a 300-year-old oak. We sanded the piece down and decided to keep the live edge. The termite damage creates a unique pattern which gives the bench a natural feel. The legs are also oak with copper plated feet to avoid rot or unwanted moisture from the soil. This bench belongs outdoors, overlooking a beautiful view. The inscription states “May the view and the people you share it with, be equally spectacular.",
    dimensions: "Length of 11 feet by Width of 16 feet by Height of 16 feet",
    price: "n/a"
  },
  {
    id: 9,
    name: "Outdoor Bench",
    image: "https://imgur.com/YuLDWRF.png",
    description: "n/a",
    dimensions: "Length of 65 feet by Width of 20 feet by Height of 16 feet",
    price: "$399"
  }
];

const seedProducts = () => {
  Product.remove({}, err => {
    if (err) {
      console.log(err);
    }
    console.log("PRODUCTS REMOVED");
    products.forEach(product => {
      Product.create(product, (err, createdProduct) => {
        if (err) {
          console.log(err);
        } else {
          console.log("PRODUCT CREATED");
          createdProduct.save();
        }
      });
    });
  });
};

module.exports = seedProducts;

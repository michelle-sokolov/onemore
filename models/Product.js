const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  info: {
    id: Number,
    name: String,
    image: String,
    description: String,
    dimensions: String,
    price: String
  }
});

const Item = mongoose.model("Item", productSchema);

module.exports = Item;

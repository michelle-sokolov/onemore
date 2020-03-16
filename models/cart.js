const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  image: { type: String, required: true }
});

const Item = mongoose.model("Item", cartSchema);

module.exports = Item;

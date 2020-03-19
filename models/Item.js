const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    }
  ]
});
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;

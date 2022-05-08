// product schema
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
  },
  { timetamps: true }
);

module.exports =
  mongoose.models.product || mongoose.model("product", ProductSchema);

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
    },
    slug: {
      type: String,
      required: true,
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

    img: {
      type: String,
      required: true,
    },
  },
  { timetamps: true }
);

module.exports =
  mongoose.models.product || mongoose.model("product", ProductSchema);

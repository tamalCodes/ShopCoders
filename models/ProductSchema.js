import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
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

const Products =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default Products;

// import Product from "../../../models/ProductSchema";
const Products = require("../../../models/ProductSchema");

export default async function viewallproducts(req, res) {
  try {
    const allproducts = await Products.find({});
    res.json(allproducts);
  } catch (error) {
    console.log(error);
  }
}

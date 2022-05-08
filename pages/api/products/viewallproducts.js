const Products = require("../../../models/ProductSchema");
const connectToMongo = require("../../../middleware/db");
// import ProductModel from "../../models/Product";

connectToMongo();

export default async function viewallproducts(req, res) {
  try {
    // const cat = req.body.cat;
    const allproducts = await Products.find();

    res.json(allproducts);
  } catch (error) {
    console.log(error);
  }
}

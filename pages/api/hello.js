const connectToMongo = require("../../middleware/db");
// import ProductModel from "../../models/Product";

connectToMongo();

export default async function handler(req, res) {
  // let products = await ProductModel.find();
  res.json("products");
}

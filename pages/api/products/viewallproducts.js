import connectDb from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  let products = await Products.find();

  res.status(200).json({ products });
};

export default connectDb(handler);

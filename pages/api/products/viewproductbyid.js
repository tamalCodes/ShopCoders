import connectDb from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  let singleproduct = await Products.findOne({ slug: req.body.slug });

  return res.status(200).json(singleproduct);
};

export default connectDb(handler);

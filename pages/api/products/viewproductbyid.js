import connectDb from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  try {
    let id = req.query.id;
    const product = await Products.findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

import connectDb from "@/middleware/db";
import Products from "@/models/ProductSchema";

const handler = async (req, res) => {
  try {
    let type = req.query.type;
    const product = await Products.find({ productType: type });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

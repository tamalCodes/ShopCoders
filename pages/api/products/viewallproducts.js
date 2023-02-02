import db from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  try {
    await db.connect();
    let category = req.query.category;
    const products = await Products.find({ category: category });
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

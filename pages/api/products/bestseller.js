import connectDb from "@/middleware/db";
import Products from "@/models/ProductSchema";

const bestSellerHandler = async (req, res) => {
  try {
    const bestSellers = await Products.find();
    return res.status(200).json(bestSellers);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(bestSellerHandler);

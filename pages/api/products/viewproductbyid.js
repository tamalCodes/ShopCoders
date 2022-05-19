import connectDb from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  console.log(req.body);
  var singleproduct = [];
  for (let index = 0; index <= 1; index++) {
    console.log(req.body[index].slug);
    let item = await Products.find({ slug: req.body[index].slug });
    singleproduct.push(item);
  }
  return res.status(200).json(singleproduct);
};

export default connectDb(handler);

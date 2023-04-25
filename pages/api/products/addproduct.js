import connectDb from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  try {
    let newprod = new Products({
      productType: req.body.productType,
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productImage: req.body.productImage,
      productDescription: req.body.productDescription,
      productQty: req.body.productQty,
      productSize: req.body.productSize,
      productSlug: req.body.productSlug,

    });

    await newprod.save();
    return res.status(200).json({ newprod });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

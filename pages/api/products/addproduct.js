import connectDb from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

const handler = async (req, res) => {
  try {
    let newprod = new Products({
      name: req.body.name,
      qty: req.body.qty,
      size: req.body.size,
      slug: req.body.slug,
      price: req.body.price,
      category: req.body.category,
      desc: req.body.desc,
      img: req.body.img,
    });

    await newprod.save();
    return res.status(200).json({ newprod });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

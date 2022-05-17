import connectDb from "../../../middleware/db";
import Product from "../../../models/ProductSchema";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let newprod = new Product({
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
    res.status(200).json({ newprod });
  } else {
    res.status(400).json({ error: "This is not a good request" });
  }
};

export default connectDb(handler);

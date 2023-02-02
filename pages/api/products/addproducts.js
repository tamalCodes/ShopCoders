import db from "../../../middleware/db";
import Products from "../../../models/ProductSchema";

/* const handler = async (req, res) => {
  if (req.method == "POST") {
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
    res.status(200).json({ sucess: "sucess" });
  } else {
    res.status(400).json({ error: "This is not a good request" });
  }
};

export default connectDb(handler); */

const handler = async (req, res) => {
  try {
    await db.connect();

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
    await db.disconnect();
    return res.status(200).json({ newprod });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

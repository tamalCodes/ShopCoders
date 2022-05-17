// import connectDb from "../../../middleware/db";
// import Products from "../../../models/ProductSchema";

// connectToMongo();

// export default async function addproduct(req, res) {
//   try {
//     const prod = req.body;

//     const newprod = Products({
//       name: prod.name,
//       qty: prod.qty,
//       size: prod.size,
//       slug: prod.slug,
//       price: prod.price,
//       category: prod.category,
//       desc: prod.desc,
//       img: prod.img,
//     });

//     await newprod.save();

//     return res.json(newprod);
//   } catch (error) {
//     console.log(error);
//     res.json(error);
//   }
// }

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

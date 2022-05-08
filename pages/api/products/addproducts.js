// import Product from "../../../models/ProductSchema";
const Products = require("../../../models/ProductSchema");
const connectToMongo = require("../../../middleware/db");

connectToMongo();

export default async function addproduct(req, res) {
  try {
    const prod = req.body;

    const newprod = Products({
      name: prod.name,
      qty: prod.qty,
      size: prod.size,
      slug: prod.slug,
      price: prod.price,
      category: prod.category,
      desc: prod.desc,
    });

    await newprod.save();

    return res.json(newprod);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

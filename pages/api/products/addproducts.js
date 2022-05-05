// import Product from "../../../models/ProductSchema";
const Products = require("../../../models/ProductSchema");

export default async function addproduct(req, res) {
  try {
    const prod = req.body;

    const newprod = Products({
      name: prod.name,
      slug: prod.slug,
      price: prod.price,
      category: prod.category,
      desc: prod.desc,
    });

    newprod.save();

    return res.json(newprod);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

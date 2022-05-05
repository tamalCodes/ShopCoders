const Products = require("../../../models/ProductSchema");

export default async function viewallproducts(req, res) {
  try {
    const cat = req.body.cat;
    const allproducts = await Products.find({ category: cat });

    res.json(allproducts);
  } catch (error) {
    console.log(error);
  }
}

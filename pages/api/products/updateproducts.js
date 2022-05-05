const Products = require("../../../models/ProductSchema");

export default async function updateproducts(req, res) {
  try {
    const { name, slug, price, category, desc } = req.body;
    const newProducts = {};

    //* If the data is send then update it

    if (name) {
      newProducts.name = name;
    }

    if (slug) {
      newProducts.slug = city;
    }

    if (price) {
      newProducts.price = price;
    }

    if (category) {
      newProducts.category = category;
    }

    if (desc) {
      newProducts.desc = desc;
    }

    const updatedproduct = await Products.findByIdAndUpdate(
      req.body._id,
      { $set: newProducts },
      { new: true }
    );

    return res.json({ sucess: true });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

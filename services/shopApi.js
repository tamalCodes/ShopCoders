import db from "../middleware/db";

export const fetchallShirts = async (req, res) => {
  try {
    await db.connect();
    const res = await fetch(
      "http://localhost:3000/api/products/viewallproducts?category=tshirts"
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch products");
      return;
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

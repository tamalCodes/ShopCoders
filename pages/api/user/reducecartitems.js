import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const handler = async (req, res) => {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }
    const user = await Users.findOne({ email: session.user.email });

    if (user) {
      const product = req.body;
      const foundProduct = user.cartproducts.find(
        (cartproduct) => cartproduct.productSlug === product.productSlug
      );

      if (foundProduct) {
        foundProduct.totalPrice = foundProduct.totalPrice - product.productPrice;
        foundProduct.purchasedQty = foundProduct.purchasedQty - 1;
      }

      await user.save();

      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

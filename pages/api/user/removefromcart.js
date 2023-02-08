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
    console.log(user.cartproducts);

    if (user) {
      const product = req.body;

      user.cartproducts = user.cartproducts.filter(
        (cartproduct) => !cartproduct._id.equals(product._id)
      );
      await user.save();

      console.log(user);

      return res.status(200).json({ user });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const handler = async (req, res) => {
  try {
    const session = await getServerSession(req, res, authOptions);
    const emptycart = [];

    if (!session) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }
    const user = await Users.findOne({ email: session.user.email });

    if (user) {
      user.cartproducts = emptycart;
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

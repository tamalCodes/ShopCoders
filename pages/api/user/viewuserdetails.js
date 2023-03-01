/* import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    let email = req.query.email;
    const user = await Users.findOne({ email: email });
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler); */

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
      return res.status(200).json({ user });
    } else {
      return res.status(200).json({ user, error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

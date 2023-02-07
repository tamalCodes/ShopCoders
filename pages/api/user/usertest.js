import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const handler = async (req, res) => {
  try {
    const session = await getServerSession(req, res, authOptions);

    console.log(session?.user);

    if (!session) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    return res.status(200).json(session.user);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

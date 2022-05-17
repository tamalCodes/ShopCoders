import connectDb from "../../../middleware/db";
import User from "../../../models/UserSchema";

const handler = async (req, res) => {
  let userdetail = await User.find();

  res.status(200).json({ userdetail });
};

export default connectDb(handler);

import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    const users = await Users.find({});
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

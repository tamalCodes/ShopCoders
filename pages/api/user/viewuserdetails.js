/* import connectDb from "../../../middleware/db";
import User from "../../../models/UserSchema";

const handler = async (req, res) => {
  let userdetail = await User.findOne({ email: req.body.email });

  return res.status(200).json(userdetail);
};

export default connectDb(handler);
 */

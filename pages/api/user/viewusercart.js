/* import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  let usercart = await Users.find({ email: req.body.email });
  return res.status(200).json(usercart);
};

export default connectDb(handler);
 */

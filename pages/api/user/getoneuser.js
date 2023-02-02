/* import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  const { email } = req.body;
  const newuser = {};

  let searcheduser = await Users.findOne({ email: email });

  if (searcheduser) {
    return res.status(200).json({ sucess: "sucess" });
  } else {
    return res.status(200).json({ sucess: "nosucess" });
  }
};

export default connectDb(handler);
 */

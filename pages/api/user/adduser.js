import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    var username =
      req.body.email.split("@")[0] + Math.floor(Math.random() * 1000);
    let newuser = new Users({
      email: req.body.email,
      username: username,
    });

    await newuser.save();
    return res.status(200).json({ newuser });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

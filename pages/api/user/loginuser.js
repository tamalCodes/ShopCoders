import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        return res.status(200).json({ user });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(500).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

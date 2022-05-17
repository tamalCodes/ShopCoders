import connectDb from "../../../middleware/db";
import User from "../../../models/UserSchema";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let newuser = new User({
      name: req.body.name,
      email: req.body.email,
      cart: req.body.cart,
    });

    await newuser.save();
    res.status(200).json({ newuser });
  } else {
    res.status(400).json({ error: "This is not a good request" });
  }
};

export default connectDb(handler);

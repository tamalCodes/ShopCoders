// gyansujan69@gmail.com"

import connectDb from "../../../middleware/db";
import User from "../../../models/UserSchema";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let u = await User.findOneAndUpdate(
      { email: req.body.email },
      {
        $push: {
          cart: req.body.newprod,
        },
      }
    );

    let u1 = await User.find({ email: req.body.email });

    res.status(200).json({ u1 });
  } else {
    res.status(400).json({ error: "This is not a good request" });
  }
};

export default connectDb(handler);

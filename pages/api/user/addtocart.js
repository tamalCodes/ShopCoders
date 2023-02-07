import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    const email = req.query.email;
    const user = await Users.findOne({ email: email });

    if (user) {
      const product = req.body;
      console.log(product);
      user.cartproducts.push(product);

      await user.save();
      /*   console.log(user); */
      res.revalidate("/cart");
      return res.status(200).json(user);
    } else {
      // user does not exist
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

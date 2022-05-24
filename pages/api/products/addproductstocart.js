import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.cartproducts.length);

  let searcheduser = await Users.findOne({ email: req.body.email });
  if (searcheduser) {
    let u = await Users.findOneAndUpdate(
      { email: req.body.email },
      { cartproducts: req.body.cartproducts }
    );

    return res.status(200).json({ sucess: "sucess" });
  }

  let p = new Users({
    email: req.body.email,
    cartproducts: req.body.cartproducts,
  });

  await p.save();

  return res.status(200).json(p);
};

export default connectDb(handler);

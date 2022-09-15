import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  console.log(req.body);
  const {
    email,
    cartproducts,
    address,
    state,
    pincode,
    city,
    phone,
    sellproducts,
  } = req.body;
  const newuser = {};

  let searcheduser = await Users.findOne({ email: email });

  if (searcheduser) {
    if (email) {
      newuser.email = email;
    }

    if (cartproducts) {
      newuser.cartproducts = cartproducts;
    }

    if (address) {
      newuser.address = address;
    }

    if (state) {
      newuser.state = state;
    }

    if (pincode) {
      newuser.pincode = pincode;
    }

    if (city) {
      newuser.city = city;
    }

    if (phone) {
      newuser.phone = phone;
    }

    if (sellproducts) {
      newuser.sellproducts = sellproducts;
    }

    let u = await Users.findOneAndUpdate({ email: email }, newuser);

    return res.status(200).json({ sucess: "sucess" });
  } else {
    if (email) {
      newuser.email = email;
    }

    if (cartproducts) {
      newuser.cartproducts = cartproducts;
    }

    if (address) {
      newuser.address = address;
    }

    if (state) {
      newuser.state = state;
    }

    if (pincode) {
      newuser.pincode = pincode;
    }

    if (city) {
      newuser.city = city;
    }

    if (phone) {
      newuser.phone = phone;
    }

    if (sellproducts) {
      newuser.sellproducts = sellproducts;
    }

    let p = new Users(newuser);

    await p.save();

    return res.status(200).json(p);
  }
};

export default connectDb(handler);

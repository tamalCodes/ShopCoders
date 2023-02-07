import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    console.log(req.body);
    /*   var username =
      req.body.email.split("@")[0] + Math.floor(Math.random() * 1000); */
    const {
      name,
      email,
      password,
      username,
      address,
      state,
      pincode,
      city,
      phone,
    } = req.body;
    let newuser = new Users({
      name: name,
      email: email,
      password: password,
      username: username,
      address: address,
      state: state,
      pincode: pincode,
      city: city,
      phone: phone,
    });

    await newuser.save();
    return res.status(200).json({ newuser });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb(handler);

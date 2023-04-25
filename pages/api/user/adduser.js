import connectDb from "../../../middleware/db";
import Users from "../../../models/UserSchema";

const handler = async (req, res) => {
  try {
    console.log(req.body);



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
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
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

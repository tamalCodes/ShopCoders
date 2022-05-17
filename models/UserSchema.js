// product schema
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cart: [
      {
        type: String,
      },
    ],
  },
  { timetamps: true }
);

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);

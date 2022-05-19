// product schema
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cartproducts: [
      {
        name: {
          type: String,
        },
        qty: {
          type: String,
        },
        size: {
          type: String,
        },
        slug: {
          type: String,

          unique: true,
        },

        price: {
          type: Number,
        },
        category: {
          type: String,
        },

        desc: {
          type: String,
        },

        img: {
          type: String,
        },
      },
    ],
  },
  { timetamps: true }
);

// module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default mongoose.models.Users || mongoose.model("Users", UserSchema);

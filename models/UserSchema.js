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
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  { timetamps: true }
);

// module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default mongoose.models.Users || mongoose.model("Users", UserSchema);

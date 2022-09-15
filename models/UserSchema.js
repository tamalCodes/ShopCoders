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
    sellproducts: [
      {
        name: {
          type: String,
          required: true,
        },
        qty: {
          type: String,
          required: true,
        },
        size: {
          type: String,
        },
        slug: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },

        desc: {
          type: String,
          required: true,
        },

        img: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timetamps: true }
);

// module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default mongoose.models.Users || mongoose.model("Users", UserSchema);

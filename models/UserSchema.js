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
    password: {
      type: String,
    },
    username: {
      type: String,
    },
    cartproducts: [
      {
        name: {
          type: String,
        },
        qty: {
          type: Number,
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
      type: String,
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

const Users = mongoose.models.user || mongoose.model("user", UserSchema);

export default Users;

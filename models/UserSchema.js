const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
        productType: {
          type: String,
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        productPrice: {
          type: Number,
          required: true,
        },
        productDescription: {
          type: String,
          required: true,
        },
        productImage: {
          type: String,
          required: true,
        },
        productQty: {
          type: Number,
          required: true,
        },
        productSize: {
          type: String,
        },
        productSlug: {
          type: String,
          required: true,
        },
        purchasedQty: {
          type: Number,
          default: 0,
        },
        totalPrice: {
          type: Number,
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

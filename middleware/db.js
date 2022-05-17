import mongoose, { connect } from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(
    "mongodb+srv://tamaldas69:tamaldas69@cluster0.ewwdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return handler(req, res);
};

export default connectDb;

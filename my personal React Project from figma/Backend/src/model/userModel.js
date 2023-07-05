import Mongoose from "mongoose";

const schema = Mongoose.Schema;

export const userSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = Mongoose.model("User", userSchema);

export default userModel;

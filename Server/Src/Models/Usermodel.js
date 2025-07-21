import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  image: {
    type: String,
  },
  email:{
    type:String
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    minLength:7,
  },
  name: {
    type: String,
  },
  phonenumber: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
  },
});
const User = mongoose.model("User" , UserSchema)
export default User ;
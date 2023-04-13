import mongoose, { Schema } from "mongoose";

const userCollection = 'users';

const UserModel = new Schema({
  firstName: { type: Schema.Types.String, require: true }
});

export default mongoose.model(userCollection, UserModel);

import mongoose, { Schema } from "mongoose";

const userCollection = 'users';

const UserModel = new Schema({
  firstName: { type: Schema.Types.String, require: true },
  email: { type: Schema.Types.String, require: true },
  role: { type: Schema.Types.String, require: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'orders' }]
});

export default mongoose.model(userCollection, UserModel);

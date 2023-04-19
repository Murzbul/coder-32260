import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const orderCollection = 'orders';

const OrderModel = new Schema({
  number: { type: Schema.Types.String, default: uuidv4 },
  business: { type: Schema.Types.ObjectId, ref: 'businesses' },
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  products: [{ type: Schema.Types.Mixed }],
  totalPrice: { type: Schema.Types.Number }
});

export default mongoose.model(orderCollection, OrderModel);

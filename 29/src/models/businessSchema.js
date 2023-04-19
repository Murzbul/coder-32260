import mongoose, { Schema } from "mongoose";

const businessCollection = 'businesses';

const BusinessModel = new Schema({
  name: { type: Schema.Types.String, require: true },
  products: [{ type: Schema.Types.Mixed }]
});

export default mongoose.model(businessCollection, BusinessModel);

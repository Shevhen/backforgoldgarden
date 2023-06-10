import { Schema, model } from "mongoose";

const plantsSchema = new Schema({
  plantsName: { type: String, require: true },
  plantsAbout: { type: String },
  plantsPrice: { type: Number, require: true },
});

export const Plants = model("Plants", plantsSchema);

import { boolean } from "joi";
import { model, Schema } from "mongoose";

const productSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: [{ type: String }],
});

const UserSchema = new Schema(
  {
    email: { type: String, minLength: [5, "Email too short"], required: true },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean },
    product: {
      type: productSchema,
    },
  },
  { timestamps: true, versionKey: "" }
);
export const UserModel = model("user", UserSchema);

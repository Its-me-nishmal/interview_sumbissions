import mongoose from "mongoose";
import crypto from "crypto";
import categorySchema from "./catogory.js";

const productSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: () => `prod_${crypto.randomUUID()}`,
    },
    name: String,
    category: categorySchema,
    brand: brandSchema,
    description: String,
    image: String,
    variants: [
        {
            color: String,
            size: String,
            price: Number,
            quantity: Number,
            image: String,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});


productSchema.index({ category: 1 });
productSchema.index({ brand: 1 });
productSchema.index({ uuid: 1 });

export default mongoose.model("Product", productSchema);
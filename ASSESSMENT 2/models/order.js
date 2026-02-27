import mongoose from "mongoose";
import crypto from "crypto";
import productSchema from "./product.js";

const orderSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: () => `order_${crypto.randomUUID()}`,
    },
    product: {
        type: String,
        ref: productSchema,
    },
    quantity: Number,
    price: Number,
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

orderSchema.index({ product: 1 });
orderSchema.index({ uuid: 1 });

export default mongoose.model("Order", orderSchema);
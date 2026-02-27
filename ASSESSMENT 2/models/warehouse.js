import mongoose from "mongoose";
import crypto from "crypto";

const warehouseSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: () => `warehouse_${crypto.randomUUID()}`,
    },
    name: String,
    description: String,
    image: String,
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
    productsavalablilty: {
        type: Number,
        default: 0,
        min: 0,
        max: 10000,
    },
});

export default mongoose.model("Warehouse", warehouseSchema);
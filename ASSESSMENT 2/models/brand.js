import mongoose from "mongoose";
import crypto from "crypto";

const brandSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    uuid: {
        type: String,
        default: () => `brand_${crypto.randomUUID()}`,
    },
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

export default mongoose.model("Brand", brandSchema);
import Product from "../models/product.js";
import Brand from "../models/brand.js";
import Category from "../models/catogory.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, image, variants, brand, category } = req.body;
        const product = await Product.create({ name, description, image, variants, brand, category });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProducts = async (req, res) => {
    const { category, color, size, price, lessthan, greaterthan, sort, skip, limit, search } = req.query;
    try {
        // with sorting and filtering
        const products = await Product.find(
            {
                category: category,
                color: color,
                size: size,
                price: { $gte: lessthan, $lte: greaterthan },
            }
        ).sort({ price: sort }).skip(skip).limit(limit);
        if (search) {
            products = await Product.find({ name: { $regex: search, $options: "i" } });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    const { uuid } = req.params;
    try {
        const product = await Product.findOne({ uuid });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { uuid } = req.params;
    const { name, price, quantity, color, size, category, description, image } = req.body;
    try {
        const product = await Product.findOneAndUpdate({ uuid }, { name, price, quantity, color, size, category, description, image }, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    const { uuid } = req.params;
    try {
        const product = await Product.findOneAndUpdate({ uuid }, { isDeleted: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  
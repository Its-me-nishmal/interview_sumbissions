import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from "../services/product.js";
import { ERROR_500 } from "../utility/error.js";

export const createProduct = async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: ERROR_500 });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await getProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await deleteProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
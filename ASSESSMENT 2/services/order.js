import Order from "../models/order.js";

export const createOrder = async (req, res) => {
    try {
        const { product, quantity, price } = req.body;
        const order = await Order.create({ product, quantity, price });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrders = async (req, res) => {
    const { uuid } = req.params;
    try {
        const orders = await Order.find({ uuid }).populate("product", "name", "price", "quantity", "color", "size", "category", "description", "image");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrder = async (req, res) => {
    const { uuid } = req.params;
    try {
        const order = await Order.findOne({ uuid });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOrder = async (req, res) => {
    const { uuid } = req.params;
    const { product, quantity, price } = req.body;
    try {
        const order = await Order.findOneAndUpdate({ uuid }, { product, quantity, price }, { new: true });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    const { uuid } = req.params;
    try {
        const order = await Order.findOneAndUpdate({ uuid }, { isDeleted: true });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
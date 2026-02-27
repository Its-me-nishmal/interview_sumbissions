import { createOrder, getOrders, getOrder, updateOrder, deleteOrder } from "../services/order.js";
import { ERROR_500 } from "../utility/error.js";
import { orderValidation } from "../utility/validation.js";

export const createOrder = async (req, res) => {
    try {
        const { error } = orderValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const order = await createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: ERROR_500 });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await getOrder(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOrder = async (req, res) => {
    const { error } = orderValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const order = await updateOrder(req.params.id, req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteOrder = async (req, res) => {
    try {
        const order = await deleteOrder(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

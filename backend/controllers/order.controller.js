import Order from "../mongodb/models/order.js";
import Client from "../mongodb/models/client.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const getAllOrders = async (req, res) => {
    const {
        _end,
        _order,
        _start,
        _sort,
        title_like = "",
        orderType = "",
    } = req.query;

    const query = {};

    if (orderType !== "") {
        query.orderType = orderType;
    }

    if (title_like) {
        query.title = { $regex: title_like, $options: "i" };
    }

    try {
        const count = await Order.countDocuments({ query });

        const orders = await Order.find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order });

        res.header("x-total-count", count);
        res.header("Access-Control-Expose-Headers", "x-total-count");

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderDetail = async (req, res) => {
    const { id } = req.params;
    const orderExists = await Order.findOne({ _id: id }).populate(
        "creator",
    );

    if (orderExists) {
        res.status(200).json(orderExists);
    } else {
        res.status(404).json({ message: "Order not found" });
    }
};

const createOrder = async (req, res) => {
    try {
        const {
            title,
            description,
            orderType,
            location,
            email,
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const client = await Client.findOne({ email }).session(session);

        if (!client) throw new Error("Client not found");
        const newOrder = await Order.create({
            title,
            description,
            orderType,
            location,
            creator: client._id,
        });

        client.allOrders.push(newOrder._id);
        await client.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Order created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, orderType, location} =
            req.body;

        await Order.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                orderType,
                location,
            },
        );

        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const orderToDelete = await Order.findById({ _id: id }).populate(
            "creator",
        );

        if (!orderToDelete) throw new Error("Order not found");

        const session = await mongoose.startSession();
        session.startTransaction();

       orderToDelete.remove({ session });
        orderToDelete.creator.allOrders.pull(orderToDelete);

        await orderToDelete.creator.save({ session });
        await session.commitTransaction();

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllOrders,
    getOrderDetail,
    createOrder,
    updateOrder,
    deleteOrder,
};
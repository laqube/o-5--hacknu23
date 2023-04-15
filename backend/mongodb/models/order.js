import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    propertyType: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    maker:{ type: mongoose.Schema.Types.ObjectId, ref: "Brigada" }
});

const orderModel = mongoose.model("Order", OrderSchema);

export default orderModel;
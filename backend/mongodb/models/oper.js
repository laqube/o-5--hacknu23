import mongoose from "mongoose";

const OperSchema = new mongoose.Schema({
    role:{ type: String, required: true },
    password:{ type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const operModel = mongoose.model("Oper", OperSchema);

export default operModel;
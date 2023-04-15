import mongoose from "mongoose";

const BrigadaSchema = new mongoose.Schema({
    password:{ type: String, required: true },
    role:{ type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const brigadaModel = mongoose.model("Brigada", BrigadaSchema);

export default brigadaModel;
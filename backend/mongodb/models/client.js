import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    password:{ type: String, required: true },
    role:{ type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const clientModel = mongoose.model("Client", ClientSchema);

export default clientModel;
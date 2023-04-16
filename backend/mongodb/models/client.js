import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    password: { type: String, required: false },
    role: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false },
    allOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  });
  
const clientModel = mongoose.model("Client", ClientSchema);

export default clientModel;
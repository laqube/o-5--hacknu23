import Client from "../mongodb/models/client.js";

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find({}).limit(req.query._end);

        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createClient = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        const clientExists = await Client.findOne({ email });

        if (clientExists) return res.status(200).json(clientExists);

        const newClient = await Client.create({
            name,
            email,
            avatar,
        });

        res.status(200).json(newClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getClientInfoByID = async (req, res) => {
    try {
        const { id } = req.params;

        const client = await Client.findOne({ _id: id }).populate("allOrders");

        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: "Client not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllClients, createClient, getClientInfoByID };

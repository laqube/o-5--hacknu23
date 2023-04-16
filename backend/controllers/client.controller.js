import Client from "../mongodb/models/client.js";

export const createClient = async (req, res) => {
    const { name, email, password, role } = req.body;
    const newClient = new Client({
      name,
      email,
      password,
      role,
    });
    try {
      const savedClient = await newClient.save();
      res.status(201).json(savedClient);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  

export const getClientInfoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const updatedClient = { name, email, password, role, _id: id };
    await Client.findByIdAndUpdate(id, updatedClient, { new: true });
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    await Client.findByIdAndRemove(id);
    res.status(200).json({ message: "Client deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

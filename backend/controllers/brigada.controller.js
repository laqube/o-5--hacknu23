import Brigada from "../mongodb/models/brigada.js";

const getAllBrigada = async (req, res) => {
  try {
    const brigada = await Brigada.find({});
    res.status(200).json(brigada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBrigada = async (req, res) => {
  try {
    const { name, email, avatar, password, role } = req.body;

    const brigadaExists = await Brigada.findOne({ email });

    if (brigadaExists) {
      return res.status(200).json(brigadaExists);
    }

    const newBrigada = await Brigada.create({
      name,
      email,
      avatar,
      password,
      role,
    });

    res.status(200).json(newBrigada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBrigadaInfoByID = async (req, res) => {
  try {
    const { id } = req.params;

    const brigada = await Brigada.findOne({ _id: id }).populate("allOrders");

    if (brigada) {
      res.status(200).json(brigada);
    } else {
      res.status(404).json({ message: "Brigada not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBrigada = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, avatar, password, role } = req.body;

    await Brigada.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        avatar,
        password,
        role,
      }
    );

    res.status(200).json({ message: "Brigada updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBrigada = async (req, res) => {
  try {
    const { id } = req.params;

    const brigadaToDelete = await Brigada.findById({ _id: id }).populate(
      "allOrders"
    );

    if (!brigadaToDelete) {
      throw new Error("Brigada not found");
    }

    await brigadaToDelete.remove();

    res.status(200).json({ message: "Brigada deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllBrigada,
  createBrigada,
  getBrigadaInfoByID,
  updateBrigada,
  deleteBrigada,
};

import Oper from "../mongodb/models/oper.js";

const getAllOpers = async (req, res) => {
    try {
        const opers = await Oper.find({}).limit(req.query._end);

        res.status(200).json(opers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOper = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        const operExists = await User.findOne({ email });

        if (operExists) return res.status(200).json(operExists);

        const newOper = await Oper.create({
            name,
            email,
            avatar,
        });

        res.status(200).json(newOper);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOperInfoByID = async (req, res) => {
    try {
        const { id } = req.params;

        const oper = await Oper.findOne({ _id: id }).populate("allProperties");

        if (oper) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Oper not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllOpers, createOper, getOperInfoByID };
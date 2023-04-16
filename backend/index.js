import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Import routes
import brigadaRoutes from "./routes/brigada.routes.js";
import clientRoutes from "./routes/client.routes.js";
import operRoutes from "./routes/oper.routes.js";
import orderRoutes from "./routes/order.routes.js";

// CONFIG
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "24mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "24mb", extended: true }));
app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });

// Connect to MongoDB database
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Set up routes
app.use("/brigada", brigadaRoutes);
app.use("/client", clientRoutes);
app.use("/oper", operRoutes);
app.use("/order", orderRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Start server
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server running on port ${port}`));

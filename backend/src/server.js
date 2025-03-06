import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ideaRoutes from "./routes/ideaRoutes.js"; // Import API routes

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ideas", ideaRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

import express from "express";
import aiRoutes from "./routes/ai.js";

const app = express();
app.use(express.json()); // ✅ Needed to parse JSON body

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/ai", aiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

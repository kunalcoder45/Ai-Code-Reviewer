import aiService from "../services/ai.js";

const getReview = async (req, res) => {
  try {
    const { code } = req.body; // ✅ Use req.body instead of req.query

    if (!code) {
      return res.status(400).json({ error: "Code input is required" });
    }

    const response = await aiService(code);
    res.json({ review: response });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Failed to generate AI review" });
  }
};

export default getReview;

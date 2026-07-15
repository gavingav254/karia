import express from "express";
import cors from "cors";
import { askGemma } from "./services/gemmaService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "KARIA Backend Running",
  });
});

app.post("/api/analyze", async (req, res) => {

  try {

    const { prompt } = req.body;

    console.log("========== NEW REQUEST ==========");
console.log(req.body);

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt missing.",
      });
    }

    console.log("🧠 Sending prompt to Gemma...");

    const response = await askGemma(prompt);

    console.log("✅ Gemma finished.");

    res.json({
      success: true,
      response,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      error: err.toString(),
    });

  }

});

app.listen(3001, () => {
  console.log("🚀 KARIA Backend running on http://localhost:3001");
});
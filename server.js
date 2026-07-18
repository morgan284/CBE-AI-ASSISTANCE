
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: `You are a CBC Exam Assistant. Answer clearly and simply.\n\nStudent: ${message}`,
    });

    res.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Sorry, something went wrong.",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: `You are a CBC Exam Assistant. Answer clearly and simply.\n\nStudent: ${message}`,
    });

    res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Something went wrong.",
    });
  }
}

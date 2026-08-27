import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy initialize GenAI client
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// API: Generate Book Outline
app.post("/api/gemini/generate-outline", async (req, res) => {
  try {
    const { topic, language = "Assamese", audience = "Beginner to Advanced", chaptersCount = 6 } = req.body;
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const ai = getGenAI();
    const prompt = `You are a world-class book author and educator.
Create a comprehensive, structured book outline for the topic: "${topic}".
Language: ${language} (Ensure authentic terminology and fluent explanations).
Target Audience: ${audience}.
Desired Number of Chapters: ${chaptersCount}.

Provide your response in structured JSON format with this exact schema:
{
  "title": "Book Title",
  "subtitle": "Inspiring Subtitle",
  "author": "Author Name or Pen Name",
  "edition": "2026 Edition",
  "description": "Short 2-3 sentence overview of this masterclass book",
  "language": "${language}",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "chapters": [
    {
      "id": "ch-1",
      "title": "Chapter 1 Title in ${language}",
      "subtitle": "Chapter subtitle / summary",
      "volume": "Part/Volume 1 Name (e.g., খণ্ড ১ or Part 1)",
      "estimatedPages": 4,
      "topics": ["Key topic 1", "Key topic 2", "Key topic 3"],
      "summary": "Brief summary of what this chapter covers"
    }
  ]
}
Return ONLY valid JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error: any) {
    console.error("Error generating outline:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate book outline",
    });
  }
});

// API: Generate / Expand Chapter Content
app.post("/api/gemini/generate-chapter", async (req, res) => {
  try {
    const {
      bookTitle,
      chapterTitle,
      chapterSubtitle,
      volume,
      topics = [],
      language = "Assamese",
      detailLevel = "comprehensive",
    } = req.body;

    if (!chapterTitle) {
      return res.status(400).json({ error: "Chapter title is required" });
    }

    const ai = getGenAI();
    const prompt = `You are an expert technical author, textbook writer, and master educator.
Write a rich, beautifully formatted, deeply educational chapter for the book "${bookTitle || 'Comprehensive Masterclass'}".

Chapter Volume/Part: ${volume || 'Part 1'}
Chapter Title: ${chapterTitle}
Chapter Subtitle: ${chapterSubtitle || ''}
Topics to cover: ${topics.join(', ') || 'Core principles, code architecture, real-world examples, and best practices'}
Language: ${language}
Detail Level: ${detailLevel} (produce comprehensive, publication-grade markdown with realistic, practical code blocks, clean formatting, subheadings, tables, and callouts).

Guidelines:
1. Use clean Markdown formatting with clear H2 (##) and H3 (###) headers.
2. Include runnable, production-ready code examples inside triple-backtick markdown blocks with appropriate language tags (python, typescript, javascript, bash, sql, etc.).
3. Add practical real-world use cases, analogies, and detailed commentary.
4. Include markdown tables, bullet point summaries, or comparison boxes where appropriate.
5. End with a "Key Takeaways" / "সাৰাংশ" or "Exercises" section.
6. Write naturally and authoritatively in ${language}.

Write the full chapter text in Markdown directly now:`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
    });

    const content = response.text || "";
    return res.json({ content });
  } catch (error: any) {
    console.error("Error generating chapter:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate chapter content",
    });
  }
});

// API: AI Chapter Assistant / Polisher (Rewrite, Expand, Translate, Add Quizzes)
app.post("/api/gemini/ai-assist", async (req, res) => {
  try {
    const { action, text, instructions, targetLanguage } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const ai = getGenAI();
    let prompt = "";

    switch (action) {
      case "expand":
        prompt = `Expand the following chapter section with deeper technical depth, more code examples, diagrams/tables, and clear explanations:\n\n${text}`;
        break;
      case "summarize":
        prompt = `Create a concise, executive summary and key takeaways of this chapter in clean markdown:\n\n${text}`;
        break;
      case "translate":
        prompt = `Translate and adapt the following chapter text into ${targetLanguage || 'English'}, maintaining all code formatting, markdown tables, and educational quality:\n\n${text}`;
        break;
      case "add-quiz":
        prompt = `Generate a 5-question multiple choice & coding exercise quiz based on this chapter content with solutions:\n\n${text}`;
        break;
      case "custom":
      default:
        prompt = `Perform the following edit or improvement on this chapter content: ${instructions || 'Refine and improve readability'}\n\nContent:\n${text}`;
        break;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
    });

    return res.json({ result: response.text || "" });
  } catch (error: any) {
    console.error("Error in AI assist:", error);
    return res.status(500).json({
      error: error.message || "AI assist failed",
    });
  }
});

async function startServer() {
  // Vite middleware in dev or static files in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Book Studio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

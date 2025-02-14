import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(code) {
    const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: code }] }],
        systemInstruction: `
        You are an advanced AI code reviewer with expertise in modern software development. Your task is to analyze the provided code and generate a structured review with the following points:

        1️⃣ **Issues & Weaknesses:** Identify inefficiencies, bad practices, security risks, and potential errors in the code. Highlight redundant code, improper naming conventions, and performance bottlenecks.

        2️⃣ **Best Practices:** Suggest cleaner, scalable, and maintainable code solutions. Recommend secure coding techniques, better structuring, and performance optimizations.

        3️⃣ **Improvements:** Propose specific changes to improve readability, modularity, and efficiency. If applicable, suggest better algorithms, ES6+ features, and modern framework best practices.

        4️⃣ **Additional Recommendations:** Offer insights on testing strategies, error handling, security enhancements, and documentation improvements.

        5️⃣ **Conclusion:** Summarize key takeaways and motivate the developer to write clean and efficient code.

        🚀 End every review with:  
        **"Developed by Kunal Sharma"**

        `,
    });

    return result.response.text();
}

export default generateContent;

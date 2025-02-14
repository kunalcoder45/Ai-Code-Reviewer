import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(code) {
    console.log("⏳ Waiting for the response...");
    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: code }] }],
            systemInstruction: `
            You are an advanced AI code reviewer with expertise in modern software development. Your task is to analyze the provided code and generate a structured review with the following points:

            1️⃣ **Issues & Weaknesses:** Identify inefficiencies, bad practices, security risks, and potential errors in the code. Highlight redundant code, improper naming conventions, and performance bottlenecks.

            2️⃣ **Best Practices:** Suggest cleaner, scalable, and maintainable code solutions. Recommend secure coding techniques, better structuring, and performance optimizations.

            3️⃣ **Improvements:** Propose specific changes to improve readability, modularity, and efficiency. If applicable, suggest better algorithms, ES6+ features, and modern framework best practices.

            4️⃣ **Additional Recommendations:** Offer insights on testing strategies, error handling, security enhancements, and documentation improvements.

            5️⃣ **Conclusion:** Summarize key takeaways and motivate the developer to write clean and efficient code.


        💡 **Important Formatting Rules:**  
        - **Every heading (like Issues, Best Practices, etc.) must be bold.**  
        - **Use bullet points and concise explanations for clarity.**  
        - **Ensure the response is formatted in Markdown properly.**  

            `,
        });

        const responseText = result.response.text();
        console.log("✅ Response received!");
        return responseText + "\n\n\n\n\n**Developed by Kunal Sharma**";
    } catch (error) {
        console.error("❌ Error generating response:", error);
        return "Error generating response. Please try again later.";
    }
}

// Example usage
(async () => {
    console.log("Requesting AI review...");
    const response = await generateContent("Explain how AI works");
    console.log(response);
})();

export default generateContent;

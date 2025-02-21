# 🚀 AI Code Reviewer

AI Code Reviewer is an intelligent code review tool powered by **Google Gemini AI**. It analyzes code, identifies issues, suggests improvements, and provides best practices in a structured and easy-to-read format.

---

## 🔥 Features
- **Automatic Code Analysis** – Detects inefficiencies, bad practices, and security risks.
- **Best Practice Suggestions** – Recommends optimized solutions for cleaner and scalable code.
- **Detailed Improvements** – Suggests specific changes to enhance readability and efficiency.
- **Markdown Formatting** – Uses bold headings and bullet points for better readability.
- **Real-time Feedback** – Displays 'Waiting for the response...' until the AI review is generated.
- **Well-Formatted Output** – Ends every review with:

  ```
  Developed by Kunal Sharma
  ```
  (with spacing for a clean look)

---

## 🛠️ Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
https://github.com/kunalcoder45/Ai-Code-Reviewer.git
cd ai-code-reviewer
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory and add your **Google Gemini API Key**:
```sh
GOOGLE_GEMINI_KEY=your_api_key_here
```

### 4️⃣ **Run the Application**
```sh
npm start
```

---

## 🚀 Usage

1️⃣ **Enter Your Code** – Paste your code into the left panel.
2️⃣ **Submit for Review** – Click the **Submit** button.
3️⃣ **Get AI Feedback** – View structured code review in the right panel.

---

## 🖥️ Tech Stack
- **Frontend:** React, React Markdown, Prism.js
- **Backend:** Express.js, Google Generative AI API

---

## 🎯 Example Response Format
```
### **Issues & Weaknesses**
- ❌ Unused variables found.
- ❌ Function names should follow camelCase.

### **Best Practices**
- ✅ Use `const` instead of `var` for better scope management.

### **Improvements**
- 🔹 Refactor functions to be more modular.
- 🔹 Optimize database queries for performance.

### **Conclusion**
Write clean, maintainable, and efficient code for scalability.




Developed by Kunal Sharma
```

---

## 🤝 Contributing
Feel free to submit issues and pull requests to improve this project!

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 💬 Contact
For any inquiries or suggestions, contact **Kunal Sharma** at:
📧 Email: kunalcoder45@gmail.com
👨‍💻 Portfolio: https://kunalportfolio45.netlify.app/

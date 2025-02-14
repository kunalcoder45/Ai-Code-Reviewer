import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import Editor from 'react-simple-code-editor';
import prism from "prismjs";
import { useEffect, useState } from 'react';
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // ✅ GitHub Flavored Markdown support

function App() {

  useEffect(() => {
    prism.highlightAll()
  });

  const [code, setcode] = useState("");
  const [review, setreview] = useState("");

  async function reviewCode() {
    setreview("⏳ Waiting for the response..."); // ✅ Show waiting message in UI

    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });

      // ✅ Check if response is an object, extract string content
      if (typeof response.data === "object" && response.data.review) {
        setreview(response.data.review); // Sirf review ka content store hoga
      } else {
        setreview(response.data);
      }

    } catch (error) {
      console.error("Error fetching review:", error);
      setreview("⚠️ Error fetching review. Please try again."); // ✅ Show error in UI
    }
  }

  return (
    <>
      <div className="container">
        <div className="left">
          <Editor
            value={code}
            onValueChange={setcode}
            highlight={code => prism.highlight(code, prism.languages.javascript)}
            padding={10}
            placeholder='Write a code for review'
            className='editor'
          />
          <button onClick={reviewCode}>Check Your Code for Review</button>
        </div>

        <div className="right">
          <Markdown className="prose" remarkPlugins={[remarkGfm]}>{review}</Markdown>
        </div>
      </div>
    </>
  )
}

export default App;

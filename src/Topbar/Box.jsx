import React, { useState } from "react";

const App = () => {
  const [questionImage, setQuestionImage] = useState(null);
  const [answerImage, setAnswerImage] = useState(null);
  const [correctAnswerImage, setCorrectAnswerImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!questionImage || !answerImage || !correctAnswerImage) {
      alert("Please upload all three images!");
      return;
    }

    const formData = new FormData();
    formData.append("questionImage", questionImage);
    formData.append("answerImage", answerImage);
    formData.append("correctAnswerImage", correctAnswerImage);

    const response = await fetch("http://localhost:5000/process-images", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Question-Answer Evaluation</h1>
      <div>
        <label>
          <strong>Upload Question Image:</strong>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setQuestionImage)}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Upload Student Answer Image:</strong>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setAnswerImage)}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Upload Correct Answer Image:</strong>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setCorrectAnswerImage)}
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        style={{ margin: "20px 0", padding: "10px 20px" }}
      >
        Submit
      </button>
      <div>
        <h2>Results:</h2>
        {results.map((result, index) => (
          <div key={index}>
            <p>
              <strong>Question {index + 1}:</strong> {result.question}
            </p>
            <p>
              <strong>Students Answer:</strong> {result.studentAnswer}
            </p>
            <p>
              <strong>Correct Answer:</strong> {result.correctAnswer}
            </p>
            <p>
              <strong>Correctness:</strong> {result.correctness}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

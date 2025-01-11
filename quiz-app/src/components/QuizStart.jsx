import React, { useState } from "react";

const QuizStart = ({ onStartQuiz }) => {
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState("5");
  const [showHistory, setShowHistory] = useState(false);
  const quizHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];

  return (
    <div className="main-container">
      <div className="card">
        <h1 className="text-2xl font-bold mb-4">Quiz App</h1>
        <select className="select-field" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="9">General Knowledge</option>
          <option value="17">Science</option>
          <option value="23">History</option>
          <option value="12">Entertainment</option>
        </select>
        <select className="select-field" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select className="select-field" value={amount} onChange={(e) => setAmount(e.target.value)}>
          <option value="5">5 Questions</option>
          <option value="10">10 Questions</option>
        </select>
        <button className="button mt-4" onClick={() => onStartQuiz(category, difficulty, amount)}>Start Quiz</button>
        <button className="button mt-4 bg-gray-500 hover:bg-gray-700" onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? "Hide History" : "View Quiz History"}
        </button>

        {showHistory && (
          <div className="mt-4 text-left">
            <h3 className="text-lg font-bold">Quiz History:</h3>
            {quizHistory.length === 0 ? <p>No quiz history available.</p> : (
              <ul className="list-disc pl-4">
                {quizHistory.map((quiz, index) => (
                  <li key={index}>
                    <strong>{quiz.category}</strong> ({quiz.difficulty}) - Score: {quiz.score}/{quiz.totalQuestions} <br />
                    <span className="text-sm text-gray-600">{quiz.timestamp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizStart;

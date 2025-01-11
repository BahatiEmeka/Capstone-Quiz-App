import React, { useState, useEffect } from "react";

const QuizPage = ({ category, difficulty, amount, onRestart }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await res.json();
        if (data.results.length === 0) throw new Error("No questions found.");
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [category, difficulty, amount]);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correct_answer;
    if (isCorrect) setScore(score + 1);
    setSelectedAnswers([...selectedAnswers, { question: questions[currentQuestion].question, answer, isCorrect }]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      saveQuizHistory();
      setShowSummary(true);
    }
  };

  const saveQuizHistory = () => {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    const newEntry = {
      category,
      difficulty,
      score,
      totalQuestions: questions.length,
      timestamp: new Date().toLocaleString(),
    };
    localStorage.setItem("quizHistory", JSON.stringify([newEntry, ...history]));
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowSummary(false);
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  return (
    <div className="quiz-container">
      {showSummary ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p className="score">Final Score: {score} / {questions.length}</p>
          <h3>Summary:</h3>
          <ul>
            {selectedAnswers.map((item, index) => (
              <li key={index} className={item.isCorrect ? "text-green-600" : "text-red-600"}>
                {item.question}: <strong>{item.answer}</strong> {item.isCorrect ? "✅" : "❌"}
              </li>
            ))}
          </ul>
          <button className="button mt-4" onClick={restartQuiz}>Retake Quiz</button>
          <button className="button mt-4 ml-2 bg-gray-500 hover:bg-gray-700" onClick={onRestart}>Go to Home</button>
        </div>
      ) : (
        <div>
          <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
          <div className="answer-buttons">
            {questions[currentQuestion].incorrect_answers.concat(questions[currentQuestion].correct_answer)
              .sort(() => Math.random() - 0.5)
              .map((answer, index) => (
                <button key={index} className="answer-button" onClick={() => handleAnswerClick(answer)}>
                  {answer}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;

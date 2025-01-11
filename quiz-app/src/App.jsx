import React, { useState } from "react";
import QuizStart from "./components/QuizStart";
import QuizPage from "./components/QuizPage";

function App() {
  const [quizSettings, setQuizSettings] = useState(null);

  return (
    <div>
      {quizSettings ? (
        <QuizPage 
          category={quizSettings.category} 
          difficulty={quizSettings.difficulty} 
          amount={quizSettings.amount} 
          onRestart={() => setQuizSettings(null)}
        />
      ) : (
        <QuizStart onStartQuiz={(category, difficulty, amount) => setQuizSettings({ category, difficulty, amount })} />
      )}
    </div>
  );
}

export default App;

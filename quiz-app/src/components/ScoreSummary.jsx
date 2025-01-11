import React from "react";

const ScoreSummary = ({ score, totalQuestions, restartQuiz }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-md text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-4">You scored {score} out of {totalQuestions}!</p>
            <button
                onClick={restartQuiz}
                className="p-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
            >
                Retake Quiz
            </button>
        </div>
    );
};

export default ScoreSummary;

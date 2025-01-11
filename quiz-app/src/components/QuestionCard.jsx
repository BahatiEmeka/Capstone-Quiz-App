import React from "react";

const QuestionCard = ({ question, answers, handleAnswer }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">{question}</h2>
            <div className="grid grid-cols-2 gap-4">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(answer)}
                        className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;

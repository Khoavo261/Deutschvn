import React, { useState } from "react";
import "./RewriteTest.css";

const RewriteTest = ({ sentences }) => {
  const [answers, setAnswers] = useState(sentences.map(() => ""));
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correct = 0;
    const updatedAnswers = answers.map((answer, index) => {
      const isCorrect = answer.trim() === sentences[index].correct.trim();
      if (isCorrect) correct++;
      return answer;
    });
    setAnswers(updatedAnswers);
    setScore(correct);
  };

  const resetAnswers = () => {
    setAnswers(sentences.map(() => ""));
    setScore(0);
    setShowResults(false);
  };

  const showCorrectAnswers = () => {
    setAnswers(sentences.map((sentence) => sentence.correct));
    setShowResults(true);
  };

  return (
    <div className="rewrite-test">
      <h2 className="test-title">Bài tập viết lại câu</h2>
      {sentences.map((sentence, index) => (
        <div key={index} className="sentence">
          <p className="hint">{sentence.hint}</p>
          <textarea
            value={answers[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            className={`answer-input ${
              showResults && answers[index] !== sentence.correct ? "incorrect" : ""
            }`}
          />
        </div>
      ))}
      <div className="controls">
        <button onClick={checkAnswers} className="btn-check">Kiểm tra</button>
        <button onClick={showCorrectAnswers} className="btn-show">Xem kết quả</button>
        <button onClick={resetAnswers} className="btn-reset">Làm lại</button>
      </div>
      <div className="score">
        <p>Điểm: {score} / {sentences.length}</p>
        <progress value={score} max={sentences.length} className="score-bar"></progress>
      </div>
    </div>
  );
};

export default RewriteTest;

// Example usage
// const sentences = [
//   {
//     hint: "Câu sai: Ich bin ein Hund.",
//     correct: "Ich bin ein Mensch."
//   },
//   {
//     hint: "Câu khẳng định: Er mag Fußball.",
//     correct: "Er mag keinen Fußball."
//   }
// ];

// <RewriteTest sentences={sentences} />

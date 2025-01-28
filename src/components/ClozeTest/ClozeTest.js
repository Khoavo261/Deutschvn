import React, { useState } from "react";
import "./ClozeTest.css";

const ClozeTest = ({ sentences }) => {
  const [answers, setAnswers] = useState(
    sentences.map((sentence) => sentence.gaps.map(() => ""))
  );
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (sentenceIndex, gapIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[sentenceIndex][gapIndex] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correct = 0;
    answers.forEach((sentenceAnswers, sentenceIndex) => {
      sentenceAnswers.forEach((answer, gapIndex) => {
        if (answer.trim() === sentences[sentenceIndex].gaps[gapIndex]) {
          correct++;
        }
      });
    });
    setScore(correct);
    setShowResults(true); // Hiển thị kết quả kiểm tra
  };

  const resetAnswers = () => {
    setAnswers(sentences.map((sentence) => sentence.gaps.map(() => "")));
    setScore(0);
    setShowResults(false);
  };

  const revealCorrectAnswers = () => {
    const filledAnswers = sentences.map((sentence) => sentence.gaps);
    setAnswers(filledAnswers); // Điền thẳng đáp án đúng vào các ô
    setShowResults(true); // Hiển thị kết quả
  };

  const maxScore = sentences.reduce((sum, sentence) => sum + sentence.gaps.length, 0);

  return (
    <div className="cloze-test">
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${(score / maxScore) * 100}%`,
          }}
        ></div>
        <span className="progress-text">
          {score}/{maxScore}
        </span>
      </div>
      <h2 className="test-title">Bài tập điền từ</h2>
      <table className="cloze-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Câu hỏi</th>
          </tr>
        </thead>
        <tbody>
          {sentences.map((sentence, sentenceIndex) => (
            <tr key={sentenceIndex}>
              <td>{sentenceIndex + 1}</td>
              <td>
                {sentence.text[0]}
                <input
                  type="text"
                  value={answers[sentenceIndex][0]}
                  onChange={(e) =>
                    handleChange(sentenceIndex, 0, e.target.value)
                  }
                  className={`gap-input ${
                    showResults &&
                    answers[sentenceIndex][0] !== sentence.gaps[0]
                      ? "incorrect"
                      : ""
                  }`}
                />
                {sentence.text[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="controls">
        <button onClick={checkAnswers} className="btn-check">
          Kiểm tra
        </button>
        <button onClick={revealCorrectAnswers} className="btn-show">
          Xem đáp án
        </button>
        <button onClick={resetAnswers} className="btn-reset">
          Làm lại
        </button>
      </div>
      <div className="score">
        Điểm: {score} / {maxScore}
      </div>
    </div>
  );
};

export default ClozeTest;

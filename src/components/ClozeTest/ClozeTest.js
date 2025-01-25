import React, { useState } from "react";
import "./ClozeTest.css";

const ClozeTest = ({ sentences }) => {
  const [answers, setAnswers] = useState(
    sentences.map((sentence) =>
      sentence.gaps.map(() => "")
    )
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
    const updatedAnswers = answers.map((sentenceAnswers, sentenceIndex) =>
      sentenceAnswers.map((answer, gapIndex) => {
        const isCorrect = answer.trim() === sentences[sentenceIndex].gaps[gapIndex];
        if (isCorrect) correct++;
        return answer;
      })
    );
    setAnswers(updatedAnswers);
    setScore(correct);
  };

  const showCorrectAnswers = () => {
    setAnswers(
      sentences.map((sentence) => sentence.gaps)
    );
    setShowResults(true);
  };

  const resetAnswers = () => {
    setAnswers(
      sentences.map((sentence) =>
        sentence.gaps.map(() => "")
      )
    );
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="cloze-test">
      <h2 className="test-title">Bài tập điền từ</h2>
      {sentences.map((sentence, sentenceIndex) => (
        <div key={sentenceIndex} className="sentence">
          {sentence.text.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < sentence.gaps.length && (
                <input
                  type="text"
                  value={answers[sentenceIndex][index]}
                  onChange={(e) =>
                    handleChange(sentenceIndex, index, e.target.value)
                  }
                  className={`gap-input ${
                    showResults &&
                    answers[sentenceIndex][index] !==
                      sentences[sentenceIndex].gaps[index]
                      ? "incorrect"
                      : ""
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className="controls">
        <button onClick={checkAnswers} className="btn-check">Kiểm tra</button>
        <button onClick={showCorrectAnswers} className="btn-show">Xem kết quả</button>
        <button onClick={resetAnswers} className="btn-reset">Làm lại</button>
      </div>
      <div className="score">
        Điểm: {score} / {sentences.reduce((sum, sentence) => sum + sentence.gaps.length, 0)}
      </div>
    </div>
  );
};

export default ClozeTest;

// Example usage
// const sentences = [
//   {
//     text: ["Ich ", " bin Khoa."],
//     gaps: ["bin"]
//   },
//   {
//     text: ["Das ist ein ", " Hund, der ", " schwarz ist."],
//     gaps: ["schöner", "sehr"]
//   }
// ];

// <ClozeTest sentences={sentences} />

import React, { useState } from 'react';
import './ClozeTestTwo.css';

const ClozeTestTwo = ({ questions, answers }) => {
  const [userAnswers, setUserAnswers] = useState(questions.map(() => ['', '']));
  const [showResults, setShowResults] = useState(false);
  const [revealAnswers, setRevealAnswers] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (index, answerIndex, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index][answerIndex] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correctCount = 0;
    userAnswers.forEach((answerPair, index) => {
      if (
        answerPair[0].trim().toLowerCase() === answers[index][0].toLowerCase() &&
        answerPair[1].trim().toLowerCase() === answers[index][1].toLowerCase()
      ) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const revealCorrectAnswers = () => {
    setRevealAnswers(true);
  };

  return (
    <div className="cloze-test-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Bài Tập Điền Vào Chỗ Trống Nâng Cao
      </h2>
      <div
        className="score-display"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            maxWidth: '300px',
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${(score / questions.length) * 100}%`,
              backgroundColor: '#28a745',
              height: '100%',
              borderRadius: '4px',
            }}
          ></div>
        </div>
        <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '16px' }}>
          {score}/{questions.length}
        </span>
      </div>
      <table
        className="cloze-test-table"
        style={{ margin: '0 auto', textAlign: 'center' }}
      >
        <thead>
          <tr>
            <th>Position 1</th>
            <th>Verb 1</th>
            <th>Mittefeld</th>
            <th>Präfix</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>
                <div className="input-wrapper" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={userAnswers[index][0]}
                    onChange={(e) => handleChange(index, 0, e.target.value)}
                    placeholder="..."
                    className={
                      showResults
                        ? userAnswers[index][0].trim().toLowerCase() ===
                          answers[index][0].toLowerCase()
                          ? 'cloze-test-input correct'
                          : 'cloze-test-input incorrect'
                        : 'cloze-test-input'
                    }
                    disabled={revealAnswers}
                  />
                  {showResults && (
                    <span
                      className="feedback-icon"
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color:
                          userAnswers[index][0].trim().toLowerCase() ===
                          answers[index][0].toLowerCase()
                            ? '#28a745'
                            : '#dc3545',
                      }}
                    >
                      {userAnswers[index][0].trim().toLowerCase() ===
                      answers[index][0].toLowerCase()
                        ? '✔'
                        : '✘'}
                    </span>
                  )}
                  {revealAnswers &&
                    userAnswers[index][0].trim().toLowerCase() !==
                      answers[index][0].toLowerCase() && (
                      <span className="correct-answer">
                        ({answers[index][0]})
                      </span>
                    )}
                </div>
              </td>
              <td>{row[1]}</td>
              <td>
                <div className="input-wrapper" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={userAnswers[index][1]}
                    onChange={(e) => handleChange(index, 1, e.target.value)}
                    placeholder="..."
                    className={
                      showResults
                        ? userAnswers[index][1].trim().toLowerCase() ===
                          answers[index][1].toLowerCase()
                          ? 'cloze-test-input correct'
                          : 'cloze-test-input incorrect'
                        : 'cloze-test-input'
                    }
                    disabled={revealAnswers}
                  />
                  {showResults && (
                    <span
                      className="feedback-icon"
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color:
                          userAnswers[index][1].trim().toLowerCase() ===
                          answers[index][1].toLowerCase()
                            ? '#28a745'
                            : '#dc3545',
                      }}
                    >
                      {userAnswers[index][1].trim().toLowerCase() ===
                      answers[index][1].toLowerCase()
                        ? '✔'
                        : '✘'}
                    </span>
                  )}
                  {revealAnswers &&
                    userAnswers[index][1].trim().toLowerCase() !==
                      answers[index][1].toLowerCase() && (
                      <span className="correct-answer">
                        ({answers[index][1]})
                      </span>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="cloze-test-buttons"
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <button onClick={checkAnswers} className="check-button">
          Kiểm Tra
        </button>
        <button onClick={revealCorrectAnswers} className="reveal-button">
          Xem Kết Quả
        </button>
      </div>
    </div>
  );
};

export default ClozeTestTwo;

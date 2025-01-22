// Import các component cần thiết
import React, { useState } from 'react';
import './ClozeTestBasic.css'; // Import file CSS

const ClozeTestBasic = ({ questions, answers }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [finalCheck, setFinalCheck] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.trim().toLowerCase() === answers[index].toLowerCase()) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
    setFinalCheck(false); // Allow users to edit their answers
  };

  const revealAnswers = () => {
    setFinalCheck(true);
  };

  return (
    <div className="cloze-test-container" style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Bài Tập Điền Vào Chỗ Trống</h1>
      <div className="score-display" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ flexGrow: 1, maxWidth: '300px', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', position: 'relative' }}>
          <div
            style={{
              width: `${(score / questions.length) * 100}%`,
              backgroundColor: '#28a745',
              height: '100%',
              borderRadius: '4px'
            }}
          ></div>
        </div>
        <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '16px' }}>{score}/{questions.length}</span>
      </div>
      <table className="cloze-test-table" style={{ margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Position 1</th>
            <th>Verb 1</th>
            <th>Mittefeld</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((row, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center' }}>{row[0]}</td>
              <td style={{ textAlign: 'center' }}>
                <div className="input-wrapper" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={userAnswers[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder="..."
                    className={
                      showResults
                        ? userAnswers[index].trim().toLowerCase() === answers[index].toLowerCase()
                          ? 'cloze-test-input'
                          : 'cloze-test-input incorrect'
                        : 'cloze-test-input'
                    }
                    disabled={finalCheck} // Disable input only for final reveal
                  />
                  {showResults && (
                    <span
                      className={
                        userAnswers[index].trim().toLowerCase() === answers[index].toLowerCase()
                          ? 'correct-mark'
                          : 'incorrect-mark'
                      }
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: userAnswers[index].trim().toLowerCase() === answers[index].toLowerCase() ? 'green' : 'red'
                      }}
                    >
                      {userAnswers[index].trim().toLowerCase() === answers[index].toLowerCase() ? '✔' : '✘'}
                    </span>
                  )}
                  {finalCheck && userAnswers[index].trim().toLowerCase() !== answers[index].toLowerCase() && (
                    <span className="correct-answer">({answers[index]})</span>
                  )}
                </div>
              </td>
              <td style={{ textAlign: 'center' }}>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cloze-test-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button onClick={checkAnswers} className="check-button">Kiểm Tra</button>
        <button onClick={revealAnswers} className="reveal-button">Xem Kết Quả</button>
      </div>
    </div>
  );
};

export default ClozeTestBasic;

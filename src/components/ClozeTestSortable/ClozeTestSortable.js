import React, { useState } from 'react';
import './ClozeTestSortable.css';

const ClozeTestSortable = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(questions.map(() => []));
  const [showResults, setShowResults] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [score, setScore] = useState(0);

  const handleInputChange = (e, questionIndex, wordIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex][wordIndex] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (JSON.stringify(answer) === JSON.stringify(questions[index].correctAnswer)) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
    setShowCorrectAnswers(false);
  };

  const revealAnswers = () => {
    const correctedAnswers = questions.map((question, questionIndex) => {
      return question.correctAnswer.map((word, wordIndex) =>
        userAnswers[questionIndex][wordIndex] === word ? word : word
      );
    });
    setUserAnswers(correctedAnswers);
    setShowCorrectAnswers(true);
  };

  return (
    <div className="sortable-cloze-test-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
      <div className="sortable-cloze-test-container" style={{ maxWidth: '1000px', width: '100%', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="test-title" style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Sắp Xếp Câu</h2>

        {/* Progress Bar */}
        <div className="progress-bar-container" style={{ marginBottom: '20px', position: 'relative', textAlign: 'center' }}>
          <div style={{ height: '20px', background: '#ddd', borderRadius: '10px', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                width: `${(score / questions.length) * 100}%`,
                backgroundColor: '#4caf50',
                height: '100%',
                transition: 'width 0.5s ease-in-out'
              }}
            ></div>
          </div>
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#000'
            }}
          >
            {score}/{questions.length}
          </span>
        </div>

        <table className="sortable-cloze-test-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f9f9f9', width: '50%' }}>Sentence</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f9f9f9', width: '20%' }}>Word</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f9f9f9', width: '30%' }}>Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, questionIndex) => (
              <tr key={questionIndex}>
                <td style={{
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  textAlign: 'left', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis'
                }}>
                  {question.prompt}
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{question.word}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <div className="input-row" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    {question.correctAnswer.map((word, wordIndex) => (
                      <div key={wordIndex} className="input-wrapper" style={{ position: 'relative', flex: '1', minWidth: '80px' }}>
                        <input
                          type="text"
                          className={`sortable-input ${
                            showResults && userAnswers[questionIndex][wordIndex] !== word
                              ? 'incorrect'
                              : ''
                          }`}
                          style={{ width: '100%', padding: '5px', textAlign: 'center', borderRadius: '4px', border: '1px solid #ddd' }}
                          value={userAnswers[questionIndex][wordIndex] || ''}
                          onChange={(e) => handleInputChange(e, questionIndex, wordIndex)}
                          disabled={showCorrectAnswers}
                        />
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons-container" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={checkAnswers} className="check-button" style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            Kiểm Tra
          </button>
          <button onClick={revealAnswers} className="reveal-button" style={{ padding: '10px 20px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            Xem Kết Quả
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClozeTestSortable;

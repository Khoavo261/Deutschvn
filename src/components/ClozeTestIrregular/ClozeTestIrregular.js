import React, { useState } from 'react';
import './ClozeTestIrregular.css';

const ClozeTestIrregular = ({ data }) => {
  const [userAnswers, setUserAnswers] = useState(
    data.map(() => ({ prateritum: '', perfekt: '', meaning: '' }))
  );
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e, index, field) => {
    const newAnswers = [...userAnswers];
    newAnswers[index][field] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      const { prateritum, perfekt, meaning } = data[index];
      if (
        answer.prateritum === prateritum &&
        answer.perfekt === perfekt &&
        answer.meaning === meaning
      ) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setChecked(true); // Đánh dấu đã kiểm tra
    setShowResults(false); // Chỉ đổi màu, không hiển thị đáp án đúng
  };

  const revealAnswers = () => {
    setShowResults(true); // Hiển thị đáp án đúng
  };

  return (
    <div className="irregular-cloze-test-wrapper">
      <div className="irregular-cloze-test-container">
        <h2 className="test-title">Irregular Verbs Cloze Test</h2>

        {/* Thanh điểm */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(score / data.length) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {score}/{data.length}
          </span>
        </div>

        {/* Bảng động từ */}
        <div className="table-wrapper">
          <table className="irregular-cloze-test-table">
            <thead>
              <tr>
                <th>Verb 1</th>
                <th>Präteritum</th>
                <th>Perfekt</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="bold-text">{row.verb.toUpperCase()}</td>
                  <td>
                    <input
                      type="text"
                      value={
                        showResults &&
                        userAnswers[index].prateritum !== row.prateritum
                          ? row.prateritum
                          : userAnswers[index].prateritum
                      }
                      onChange={(e) => handleInputChange(e, index, 'prateritum')}
                      className={
                        (checked && userAnswers[index].prateritum !== row.prateritum) ||
                        (showResults && userAnswers[index].prateritum !== row.prateritum)
                          ? 'incorrect'
                          : ''
                      }
                      disabled={showResults}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={
                        showResults &&
                        userAnswers[index].perfekt !== row.perfekt
                          ? row.perfekt
                          : userAnswers[index].perfekt
                      }
                      onChange={(e) => handleInputChange(e, index, 'perfekt')}
                      className={
                        (checked && userAnswers[index].perfekt !== row.perfekt) ||
                        (showResults && userAnswers[index].perfekt !== row.perfekt)
                          ? 'incorrect'
                          : ''
                      }
                      disabled={showResults}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={
                        showResults &&
                        userAnswers[index].meaning !== row.meaning
                          ? row.meaning
                          : userAnswers[index].meaning
                      }
                      onChange={(e) => handleInputChange(e, index, 'meaning')}
                      className={
                        (checked && userAnswers[index].meaning !== row.meaning) ||
                        (showResults && userAnswers[index].meaning !== row.meaning)
                          ? 'incorrect'
                          : ''
                      }
                      disabled={showResults}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nút hành động */}
        <div className="buttons-container">
          <button onClick={checkAnswers} className="check-button">
            Kiểm Tra
          </button>
          <button onClick={revealAnswers} className="reveal-button">
            Xem Kết Quả
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClozeTestIrregular;

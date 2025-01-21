import React from 'react';
import './ChallengesSection.css'; // Import CSS

const ChallengesSection = ({ features = [] }) => {
  return (
    <section className="challenges-section">
      <h2 className="challenges-title">Thách thức bạn đang đối mặt</h2>
      <div className="challenges-container">
        {features.map((feature, index) => (
          <div key={index} className="challenge-card">
            <img src={feature.icon} alt={feature.title} className="challenge-icon" />
            <h3 className="challenge-title">{feature.title}</h3>
            <p className="challenge-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;

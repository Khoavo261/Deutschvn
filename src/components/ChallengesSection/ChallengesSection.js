import React from 'react';
import './ChallengesSection.css'; // Import CSS

const features = [
  {
    title: 'Tài liệu học rõ ràng',
    description: 'Đây là những tài liệu mình đã trực tiếp sử dụng trong hành trình học tiếng Đức từ A1 đến B2. Mình đã sắp xếp chúng rõ ràng, dễ hiểu, giúp bạn học tập một cách có hệ thống và hiệu quả.',
    icon: '/img/clear.png', // Đường dẫn đến hình ảnh
  },
  {
    title: 'Miễn phí',
    description: 'Mình là một du học sinh Áo, vì vậy may mắn tiếp cận được rất nhiều tài liệu chất lượng mà không mất phí. Ở đây mình chỉ muốn đơn giản trao lại cho các bạn, những người đi sau!',
    icon: '/img/free.png',
  },
  {
    title: 'Cộng đồng năng động',
    description: 'Cộng đồng này được mình xây dựng từ những người học tiếng Đức giống bạn, cùng với những thầy cô và bạn bè đã hỗ trợ mình trong quá trình học. Đây là nơi để bạn kết nối, đặt câu hỏi, và cùng nhau tiến bộ.',
    icon: '/img/community.png',
  },
];

const ChallengesSection = () => {
    console.log('ChallengesSection rendered');
    return (
      <section className="challenges-section">
        <h2 className="challenges-title">Thách thức bạn đang đối mặt</h2>
        <div className="challenges-container">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <img src={challenge.icon} alt={challenge.title} className="challenge-icon" />
              <h3 className="challenge-title">{challenge.title}</h3>
              <p className="challenge-description">{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
export default ChallengesSection;

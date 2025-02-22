import React from 'react';
import Layout from '@theme/Layout';
import PureHero from '@site/src/components/PureHero/PureHero';
import FAQSection from '@site/src/components/FAQSection/FAQSection';
import IntroductionSection from '@site/src/components/IntroductionSection/IntroductionSection';

const faqData = [
  {
    question: "Nếu tôi có thắc mắc hoặc cần giúp đỡ, tôi liên hệ ai?",
    answer: "Bạn có thể tham gia vào cộng đồng `Deutsch.vn` – nơi không chỉ có những người học như bạn mà còn có các thầy cô dạy tiếng Đức và những người bạn với trình độ vững chắc. Tại đây, mọi người luôn sẵn lòng chia sẻ kinh nghiệm và giúp bạn giải đáp mọi thắc mắc trong hành trình chinh phục tiếng Đức.",
  },
  {
    question: "Liệu bạn có đang sử dụng cộng đồng để quảng cáo hay thu lợi không?",
    answer: "Mục tiêu của tôi là xây dựng một không gian học tập thân thiện, không bị chi phối bởi quảng cáo.",
  },
  {
    question: "Đây có thật sự là trang web miễn phí không?",
    answer: "Hoàn toàn miễn phí! Với hơn 5 năm kinh nghiệm xây dựng nhiều cộng đồng chất lượng, mình hiểu rõ giá trị của việc chia sẻ kiến thức. Trang web này đơn thuần chỉ là nơi mình công khai những tài liệu học tập cá nhân mà mình đã tích lũy và sử dụng trong quá trình học tiếng Đức. Vì vậy, bạn có thể yên tâm rằng đây chắc chắn là một trang web miễn phí.",
  },
];

const Home = () => {
  return (
    <Layout
      title="Cùng học tiếng Đức với mình nhé!"
      description="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!"
    >
      <div>
        {/* Hero Section */}
        <PureHero
          title="Cùng học tiếng Đức với mình nhé!"
          subtitle="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!"
          backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          buttonText="Tham gia cộng đồng"
          buttonLink="#"
        />

        {/* Introduction Section */}
        <IntroductionSection
          title="Tại sao lại là Deutsch.vn!"
          subtitle="Là một du học sinh tại Áo, mình có cơ hội tiếp cận với rất nhiều nguồn tài liệu học tiếng Đức miễn phí. Trong quá trình học, mình đã tỉ mỉ ghi chép lại tất cả trên Notion để hệ thống hóa kiến thức. Deutsch.vn chính là nơi mình chia sẻ những tài liệu đó, giúp các bạn dễ dàng học tập và phát triển hơn."
          style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '20px auto',
          }}
        />

        {/* FAQ Section */}
        <FAQSection faqData={faqData} />
      </div>
    </Layout>
  );
};

export default Home;

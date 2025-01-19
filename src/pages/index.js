import React from 'react';
import Layout from '@theme/Layout';
import PureHero from '@site/src/components/PureHero/PureHero';
import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection';
import FeaturedProducts from '@site/src/components/FeaturedProducts/FeaturedProducts';
import FAQSection from '@site/src/components/FAQSection/FAQSection';

const products = [
  {
    image: "static/images/clear.png",
    title: "Tài liệu học rõ ràng",
    description: "Tài liệu đã được team mình tổng hợp theo trình độ cụ thể thông qua quá trình học của bản thân, từ A1 đến B2. Và sẽ được update liên tục cho đến khi hoàn thiện.",
    buttonText: '/',
    link: "#",
  },
  {
    image: "static/imagesfree.png",
    title: "Học tập miễn phí",
    description: "Khi du học tại Áo, mình may mắn được tiếp cận với rất nhiều tài liệu tiếng đức `Miễn phí` từ chính phù. Mình chỉ đơn giản là tổng hợp và chia sẽ lại cho các bạn qua quá trình mình học thôi!",
    buttonText: '',
    link: "#",
  },
  {
    image: "static/images/comunity.png",
    title: "Cộng đồng năng động",
    description: "Mình đã có nhiều năm kinh nghiệm với việc xây dựng cộng đồng rồi, vì vậy rất mong có thể xây được một cộng đồng tiếng đức sạch, thật sự giúp đỡ được những ai có nhu cầu học tiếng đức.",
    buttonText: '',
    link: "#",
  },
];

const faqData = [
  {
    question: "Nếu tôi có thắc mắc hoặc cần giúp đỡ, tôi liên hệ ai?",
    answer: "Bạn có thể tham gia vào cộng đồng `Deutshc.vn` – nơi không chỉ có những người học như bạn mà còn có các thầy cô dạy tiếng Đức và những người bạn với trình độ vững chắc. Tại đây, mọi người luôn sẵn lòng chia sẻ kinh nghiệm và giúp bạn giải đáp mọi thắc mắc trong hành trình chinh phục tiếng Đức.",
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
        <PureHero
          title="Cùng học tiếng Đức với mình nhé!"
          subtitle="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!"
          backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          buttonText="Tham gia cộng đồng"
          buttonLink="#"
          contentWidth="60%"
          contentPosition="center"
          titleColor="#ffffff"
          subtitleColor="#f0f0f0"
          buttonColor="#ffffff"
          navColor="#ffffff"
          fixedBackground
        />

        <FeaturedProducts
          products={products}
          title="Tại Sao Deutsch.vn Được Tạo Ra?"
          subtitle=""Là người học tiếng Đức, tôi hiểu rõ những khó khăn mà bạn đang gặp phải: tài liệu không rõ ràng, cảm giác lạc lối trong việc học. Đó là lý do tôi tạo ra Deutsch.vn, một nơi mà bạn có thể học tập, kết nối và phát triển miễn phí.""
          titleFontSize="2rem"
          subtitleFontSize="1rem"
          titleColor="#000000"
          subtitleColor="#333333"
          productFontSize="1rem"
          productTextColor="#333333"
          imageBorderRadius="10px"
          imageOrientation="landscape"
          itemsInView={3}
        />

        <TwoColumnSection
          title="Câu Chuyện Của Chúng Tôi"
          description="Learn Anything luôn khuyến khích bạn giống như nước – không ngừng tìm kiếm, thay đổi và thích nghi với những thử thách mới."
          buttonText="Kết nối"
          buttonLink="#"
          titleColor="#000000"
          descriptionColor="#333333"
          buttonColor="#000000"
          imageSrc="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          imageAlt="Câu chuyện của chúng tôi"
          imagePosition="right"
          columnRatio="1.5"
        />

        <FAQSection
          faqData={faqData} // Truyền `faqData` đúng tên prop
        />
      </div>
    </Layout>
  );
};

export default Home;

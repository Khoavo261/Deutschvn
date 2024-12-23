import React from 'react';
import Layout from '@theme/Layout';
import PureHero from '@site/src/components/PureHero/PureHero';
import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection';
import FeaturedProducts from '@site/src/components/FeaturedProducts/FeaturedProducts';
import FAQSection from '@site/src/components/FAQSection/FAQSection';

const products = [
  {
    image: "https://images.unsplash.com/photo-1519289455504-3510c41b7cc3?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "Docusaurus: Đơn giản hóa tài liệu",
    description: "Tối ưu hóa quy trình tạo tài liệu với Docusaurus, một trình tạo trang tĩnh mạnh mẽ được xây dựng trên nền tảng React.",
    buttonText: 'Thông tin & Đăng ký',
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1504519560822-bed2d817f87f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "React: Framework UI cho trang web động",
    description: "Tận dụng kiến trúc dựa trên thành phần của React để tạo các yếu tố giao diện tương tác và có thể tái sử dụng một cách dễ dàng.",
    buttonText: 'Thông tin & Đăng ký',
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1605762566242-bd1c73c885b0?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "Tùy chỉnh trang web bằng AI",
    description: "Khám phá cách tích hợp AI để cá nhân hóa trang Docusaurus của bạn dựa trên sở thích và hành vi của người dùng.",
    buttonText: 'Thông tin & Đăng ký',
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1643903096045-07741be1f245?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    title: "Từ con số 0 đến làm chủ kỹ năng tạo web với Docusaurus + AI",
    description: "Bắt đầu từ những minh hoạ dễ hiểu và chi tiết để khơi nguồn cảm hứng. Tự tạo component bạn muốn khi đủ khả năng.",
    buttonText: 'Thông tin & Đăng ký',
    link: "#",
  },
];

const faqData = [
  {
    question: "Docusaurus là gì? Sử dụng Docusaurus như thế nào?",
    answer: "Docusaurus là một sản phẩm mã nguồn mở do Facebook phát triển, được thiết kế đặc biệt để xây dựng trang tài liệu và blog dễ dàng với tính tuỳ biến cao. Trong khóa học này, bạn sẽ học cách cài đặt, cấu hình, và tuỳ biến các thành phần trong Docusaurus với framework React để tạo website chuyên nghiệp, hấp dẫn. Bạn không phải bắt đầu từ con số 0 vì mình sẽ chia sẻ các mẫu giao diện mình đã phát triển giúp bạn dễ dàng làm quen.",
  },
  {
    question: "Vì sao chọn Docusaurus để tạo Website?",
    answer: "Docusaurus là một công cụ mã nguồn mở mạnh mẽ và miễn phí giúp tạo website nhanh chóng mà không lo tốn kém. Định dạng website này do Facebook phát triển nên được hỗ trợ tốt và cập nhật liên tục. Docusaurus phù hợp cho trang tài liệu và blog với khả năng hỗ trợ SEO rất tốt, đa ngôn ngữ, và các cấu trúc dễ tùy biến, giúp bạn có thể xây dựng một website chuyên nghiệp mà không cần nhiều kiến thức về lập trình.",
  },
  {
    question: "Có tạo được website chuyên nghiệp nếu chưa biết lập trình hay thiết kế?",
    answer: "Đúng. Bạn có thể làm được vì mình sẽ chia sẻ với bạn các mẫu giao diện do mình phát triển để bắt đầu làm quen và tuỳ biến. Bạn được hướng dẫn và hỗ trợ từng bước để tạo ra bất kỳ giao diện website nào bạn có thể hình dung. Cách dễ nhất cho người chưa có nhiều kinh nghiệm chính là lấy cảm hứng hay thậm chí copy nguyên mẫu các thiết kế chuyên nghiệp được bán trên themeforest hoặc 1 trang web bất kỳ mà bạn ấn tượng. Việc này là khả thi vì công cụ AI như ChatGPT có thể nhận đầu vào hình ảnh, phân tích và tạo ra bộ giao diện theo hình ảnh bạn cung cấp. Mình làm được việc này và mình sẽ giúp bạn. Việc sao chép và tích luỹ dần các khái niệm về thiết kế, lập trình giúp bạn bồi dưỡng thêm năng lực sáng tạo để tự mình tạo ra giao diện độc đáo cho thương hiệu khi đủ khả năng.",
  },
];

const Home = () => {
  return (
    <Layout
      title="Học Hỏi Không Giới Hạn"
      description="Khơi dậy sự tò mò trong bạn, đắm chìm trong chân trời kiến thức mới thú vị."
    >
      <div>
        <PureHero
          title="Học Hỏi Không Giới Hạn"
          subtitle="Khơi dậy sự tò mò trong bạn, đắm chìm trong chân trời kiến thức mới thú vị."
          backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          buttonText="Khám phá"
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
          title="Những điều tuyệt vời từ khoá học"
          subtitle="Chỉn chu. Chú trọng kết quả."
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
          description="Learn Anything luôn khuyến khích bạn giống như nước – không ngừng tìm kiếm, thay đổi và thích nghi với những thử thách mới. Đối với chúng tôi, học tập là con đường rộng mở và mang tính cá nhân cao."
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

        <TwoColumnSection
          title="Khơi Nguồn Cảm Hứng"
          description="Tại Learn Anything, chúng tôi không chỉ tạo ra một nền tảng học tập – mà còn mở ra một hành trình để bạn khám phá, trải nghiệm và không ngừng biến đổi."
          buttonText="Tìm hiểu"
          buttonLink="#"
          titleColor="#000000"
          descriptionColor="#333333"
          buttonColor="#000000"
          imageSrc="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          imageAlt="Khơi nguồn cảm hứng"
          imagePosition="left"
          columnRatio="1.5"
        />

        <FAQSection
          faqData={faqData && Array.isArray(faqData) ? faqData : []} // Đảm bảo faqData luôn hợp lệ
          title="Câu Hỏi Thường Gặp"
          titleFontSize="2rem"
          titleColor="#000000"
          questionColor="#333333"
          answerColor="#666666"
        />
      </div>
    </Layout>
  );
};

export default Home;

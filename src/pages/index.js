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
    answer: "Docusaurus là một sản phẩm mã nguồn mở do Facebook phát triển, được thiết kế đặc biệt để xây dựng trang tài liệu và blog dễ dàng với tính tuỳ biến cao.",
  },
  {
    question: "Vì sao chọn Docusaurus để tạo Website?",
    answer: "Docusaurus là một công cụ mã nguồn mở mạnh mẽ và miễn phí giúp tạo website nhanh chóng mà không lo tốn kém.",
  },
  {
    question: "Có tạo được website chuyên nghiệp nếu chưa biết lập trình hay thiết kế?",
    answer: "Bạn có thể làm được vì mình sẽ chia sẻ với bạn các mẫu giao diện đã phát triển để bắt đầu làm quen.",
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

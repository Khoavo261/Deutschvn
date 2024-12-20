import React from 'react';
import Layout from '@theme/Layout';
import PureHero from '@site/src/components/PureHero/PureHero';
import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection';

const Home = () => {
  return (
    <Layout
      title="Học Hỏi Không Giới Hạn" // Thay tiêu đề trang
      description="Khơi dậy sự tò mò trong bạn, đắm chìm trong chân trời kiến thức mới thú vị." // Thay phần mô tả trang
    >
      <div>
        {/* Thành phần Hero */}
        <PureHero
          title="Học Hỏi Không Giới Hạn"
          subtitle="Khơi dậy sự tò mò trong bạn, đắm chìm trong chân trời kiến thức mới thú vị."
          backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonText="Khám phá"
          buttonLink="#" /* Thay link vào đây */
          contentWidth="60%"
          contentPosition="center"
          titleColor="#ffffff"
          subtitleColor="#f0f0f0"
          buttonColor="#ffffff"
          navColor="#ffffff"
        />

        {/* Thành phần hai cột */}
        <TwoColumnSection
          title="Câu Chuyện Của Chúng Tôi"
          description="Learn Anything luôn khuyến khích bạn giống như nước – không ngừng tìm kiếm, thay đổi và thích nghi với những thử thách mới. Đối với chúng tôi, học tập là con đường rộng mở và mang tính cá nhân cao."
          buttonText="Kết nối"
          buttonLink="#" // Đặt link thực tế vào đây
          titleColor="#000000"
          descriptionColor="#333333"
          buttonColor="#000000"
          imageSrc="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Placeholder Image"
          imagePosition="right"
          columnRatio="1.5"
        />

        <TwoColumnSection
          title="Khơi Nguồn Cảm Hứng"
          description="Tại Learn Anything, chúng tôi không chỉ tạo ra một nền tảng học tập – mà còn mở ra một hành trình để bạn khám phá, trải nghiệm và không ngừng biến đổi."
          buttonText="Tìm hiểu"
          buttonLink="#" // Đặt link thực tế vào đây
          titleColor="#000000"
          descriptionColor="#333333"
          buttonColor="#000000"
          imageSrc="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Placeholder Image"
          imagePosition="left"
          columnRatio="1.5"
        />
      </div>
    </Layout>
  );
};

export default Home;

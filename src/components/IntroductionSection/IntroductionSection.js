import React from 'react';
import styles from './IntroductionSection.module.css';

const IntroductionSection = ({
  title = "Tiêu đề",
  subtitle = "Nội dung giới thiệu",
  titleFontSize = "2rem",
  subtitleFontSize = "1.2rem",
  titleColor = "#000000",
  subtitleColor = "#555555",
}) => {
  return (
    <section className={styles.introductionSection}>
      <div className={styles.header}>
        <h2 style={{ fontSize: titleFontSize, color: titleColor }}>{title}</h2>
        <div
          style={{
            fontSize: subtitleFontSize,
            color: subtitleColor,
            lineHeight: "1.6",
          }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></div>
      </div>
    </section>
  );
};

export default IntroductionSection;

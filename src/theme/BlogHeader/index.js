import React from 'react';
import styles from './styles.module.css';

function BlogHeader() {
  return (
    <header className={styles.blogHeader}>
      <h1>
        Chào mừng bạn đến với <span className={styles.highlight}>Learn Anything Blog</span>
      </h1>
      <p>Khám phá các nội dung chia sẻ hữu ích tại đây!</p>
      {/* <button className={styles.ctaButton}>Đăng ký</button> */}
    </header>
  );
}

export default BlogHeader;

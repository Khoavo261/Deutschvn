import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BlogCard from '../BlogCard';
import BlogHeader from '../BlogHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function BlogListPage({ items }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [activeTag, setActiveTag] = useState('Tất cả');
  const [activeAuthor, setActiveAuthor] = useState('Tất cả');
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(6); // Default posts per page
  const [currentPage, setCurrentPage] = useState(1); // Current page

  // Normalize categories, tags, and authors
  const standardizedCategories = items.map(({ content: { frontMatter } }) =>
    (frontMatter.category || 'Chưa phân loại').toLowerCase()
  );
  const standardizedTags = items.flatMap(({ content: { frontMatter } }) =>
    (frontMatter.tags || []).map((tag) => tag.toLowerCase())
  );
  const standardizedAuthors = items.flatMap(({ content: { frontMatter } }) => {
    const authors = frontMatter.authors || ['Không rõ'];
    const authorList = Array.isArray(authors) ? authors : [authors];
    return authorList.map((author) => author.toLowerCase());
  });

  // Unique categories, tags, and authors
  const categories = [
    'Tất cả',
    ...new Set(
      standardizedCategories.map((category) =>
        category.charAt(0).toUpperCase() + category.slice(1)
      )
    ),
  ];
  const tags = [
    'Tất cả',
    ...new Set(
      standardizedTags.map((tag) =>
        tag.charAt(0).toUpperCase() + tag.slice(1)
      )
    ),
  ];
  const authors = [
    'Tất cả',
    ...new Set(
      standardizedAuthors.map((author) =>
        author.charAt(0).toUpperCase() + author.slice(1)
      )
    ),
  ];

  // Filtered items based on active filters and publish field
  const filteredItems = items.filter(({ content: { frontMatter } }) => {
    const publish = frontMatter.publish;
    if (publish === false) return false;

    const itemCategory = (frontMatter.category || 'Chưa phân loại').toLowerCase();
    const itemTags = (frontMatter.tags || []).map((tag) => tag.toLowerCase());
    const authors = frontMatter.authors || ['Không rõ'];
    const itemAuthors = Array.isArray(authors)
      ? authors.map((author) => author.toLowerCase())
      : [authors.toLowerCase()];

    const matchesCategory =
      activeCategory === 'Tất cả' || itemCategory === activeCategory.toLowerCase();
    const matchesTag =
      activeTag === 'Tất cả' || itemTags.includes(activeTag.toLowerCase());
    const matchesAuthor =
      activeAuthor === 'Tất cả' || itemAuthors.includes(activeAuthor.toLowerCase());

    return matchesCategory && (!isAdvancedFilter || (matchesTag && matchesAuthor));
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / postsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top when navigating pages
  };

  return (
    <Layout title="Blog" description="Các bài viết mới nhất">
      {/* Blog Header */}
      <BlogHeader />

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <h4 className={styles.filterTitle}>Danh mục</h4>
          <div className={styles.filterOptions}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.activeButton : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Advanced Filter */}
        <button
          className={`${styles.toggleFilterIcon} ${
            isAdvancedFilter ? styles.iconExpanded : ''
          }`}
          onClick={() => setIsAdvancedFilter(!isAdvancedFilter)}
          aria-label={isAdvancedFilter ? 'Ẩn bộ lọc nâng cao' : 'Hiện bộ lọc nâng cao'}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>

      {/* Advanced Filters */}
      {isAdvancedFilter && (
        <div className={styles.advancedFilterBar}>
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Thẻ</h4>
            <div className={styles.filterOptions}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.filterButton} ${
                    activeTag === tag ? styles.activeButton : ''
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Tác giả</h4>
            <div className={styles.filterOptions}>
              {authors.map((author) => (
                <button
                  key={author}
                  className={`${styles.filterButton} ${
                    activeAuthor === author ? styles.activeButton : ''
                  }`}
                  onClick={() => setActiveAuthor(author)}
                >
                  {author}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Cards Grid */}
      <div className={styles.blogGrid}>
        {paginatedItems.map(({ content: BlogPostContent }) => {
          const { frontMatter = {}, metadata = {} } = BlogPostContent;
          return (
            <BlogCard
              key={metadata.permalink}
              image={frontMatter.image || '/default-image.jpg'}
              title={frontMatter.title || 'No Title'}
              description={frontMatter.description || 'No description available.'}
              date={new Date(metadata.date || Date.now()).toLocaleDateString('vi-VN')}
              category={frontMatter.category || 'Uncategorized'}
              readingTime={metadata.readingTime}
              link={metadata.permalink}
            />
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <div className={styles.paginationOptions}>
          <label htmlFor="postsPerPage">Hiển thị: </label>
          <select
            id="postsPerPage"
            value={postsPerPage}
            onChange={(e) => {
              setPostsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
          >
            {[6, 12, 24, 36, 48].map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.paginationLinks}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageLink} ${
                currentPage === i + 1 ? styles.activePage : ''
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className={styles.pageLink}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Trang tiếp theo
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;

import React, { useState } from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";

import "../assets/BlogList.css";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const itemsPerPage = 5; // 每页显示的条目数

  // 计算分页后的博客数据
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // 计算总页数
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // 处理分页按钮点击事件
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Blog List</h2>
      <ul className="blog-list">
        {currentBlogs.map((blog, index) => (
          <li key={index} className="blog-item">
            <Link to={`/blog/${index}`} className="blog-link">
              {blog.title}
            </Link>
            <div className="blog-meta">
              <span className="blog-author">Author: {blog.author}</span>
              <span className="blog-views">Views: {blog.views}</span>
              <span className="blog-likes">Likes: {blog.likes}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";

import "../assets/BlogDetails.css";

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div className="blog-details-container">
      <h2 className="blog-details-title">Blog Details</h2>
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <img src={blog.image} alt={blog.title} className="blog-image" />
        <p className="blog-content-text">{blog.content}</p>
        <div className="blog-meta">
          <span className="blog-author">Author: {blog.author}</span>
          <span className="blog-views">Views: {blog.views}</span>
          <span className="blog-likes">Likes: {blog.likes}</span>
        </div>
        <div className="blog-tags">
          <strong>Tags:</strong>
          {blog.tags.map((tag, index) => (
            <span key={index} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

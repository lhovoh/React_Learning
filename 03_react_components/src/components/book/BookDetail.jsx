// 查看详情

import React from "react";

const BookDetail = ({ book }) => {
  if (!book) {
    return <div className="book-detail">选择一本书以查看详细信息。</div>;
  }

  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <p>
        <strong>ID：</strong>
        {book.id}
      </p>
      <p>
        <strong>书名：</strong>
        {book.title}
      </p>
      <p>
        <strong>作者：</strong>
        {book.author}
      </p>
      <p>
        <strong>价格：</strong>
        {book.price}
      </p>
    </div>
  );
};

export default BookDetail;

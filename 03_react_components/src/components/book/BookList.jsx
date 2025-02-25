// 列表组件

import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onDeleteBook, onEditBook, onSelectBook }) => {
  return (
    <div className="book-list">
      <h2>图书列表</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>书名</th>
            <th>作者</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={onDeleteBook}
              onEdit={onEditBook}
              onSelect={onSelectBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

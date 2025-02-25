// 输入框组件，显示所有图书信息

import "./Book.css";
import { useState } from "react";

const BookInput = ({ onAddBook }) => {
  // 作者信息
  const [author, setAuthor] = useState("");
  // 图书信息
  const [title, setTitle] = useState("");
  // 图书价格
  const [price, setPrice] = useState("");

  // 自动生成唯一的图书 ID
  const generateUniqueId = () => {
    return Date.now().toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = generateUniqueId();

    onAddBook(id, author, title, price);
    setAuthor("");
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="图书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="价格"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">添加图书</button>
    </form>
  );
};

export default BookInput;

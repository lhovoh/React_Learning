// 列表项组件

const BookItem = ({ book, onDelete, onEndit, onSelect }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    const updatedBook = {
      author: prompt("请输入新的作者", book.author) || book.author,
      title: prompt("请输入新的书名", book.title) || book.title,
      price: prompt("请输入新的价格", book.price) || book.price,
    };
    onEndit(book.id, updatedBook);
  };

  const handleSelect = () => {
    onSelect(book);
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.author}</td>
      <td>{book.title}</td>
      <td>{book.price}</td>
      <td>
        <button onClick={handleEdit}>编辑</button>
        <button onClick={handleDelete}>删除</button>
        <button onClick={handleSelect}>详情</button>
      </td>
    </tr>
  );
};

export default BookItem;

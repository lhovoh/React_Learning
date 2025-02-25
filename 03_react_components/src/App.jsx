// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import WelcomeStudent from "./components/WelcomeStudent";
// import RandomName from "./components/RandomName";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";
// import CardProfile from "./components/card/CardProfile";
import BookInput from "./components/book/BookInput";
import BookList from "./components/book/BookList";
import BookDetail from "./components/book/BookDetail";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // 添加图书
  const handleAddBook = (id, author, title, price) => {
    setBooks([...books, { id, author, title, price }]);
  };

  // 删除图书
  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // 编辑图书
  const handleEditBook = (id, updatedBook) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  // const studentData = {
  //   avatar:
  //     "https://public-cdn-oss.mosoteach.cn/avatar/2023/BD/6a6510afdd8b00301d72d69630c5a3a4.jpg?v=1680759033&x-oss-process=style/s300x300",
  //   name: "张三",
  //   age: 18,
  //   stud: "计算机科学与技术",
  // };

  // const handleClick = () => {
  //   alert("点击了按钮1111");
  // };

  return (
    <div className="app">
      {/* <WelcomeClass name="React" />
      <WelcomeFunc name="React 组件!!!" /> */}
      {/* <WelcomeStudent {...studentData} /> */}
      {/* <RandomName /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button myClick={handleClick} /> */}
      {/* <UserPage /> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* <InputParent /> */}
      {/* <RegistPage /> */}
      {/* <CardProfile /> */}
      <h1>图书管理系统</h1>
      <BookInput onAddBook={handleAddBook} />
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onEditBook={handleEditBook}
        onSelectBook={handleSelectBook}
      />
      <BookDetail book={selectedBook} />
    </div>
  );
};

export default App;

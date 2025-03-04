import { useState } from "react";

const TodoList = () => {
  // 一个数组，用来存储所有的待办事项
  const [todos, setTodos] = useState([]);

  // 添加待办事项
  const [inputValue, setInputValue] = useState("");

  // 输入框内容变化时，更新inputValue的值
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 点击添加按钮时，将inputValue的值加入到todos数组中
  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  // 删除待办事项
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>待办事项</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleChange}></input>
        <button onClick={handleAdd}>添加</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "", // 划线样式
              color: todo.completed ? "green" : "red", // 文字颜色
              cursor: "pointer", // 鼠标样式
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

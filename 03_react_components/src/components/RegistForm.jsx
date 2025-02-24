import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单的默认提交行为
    onSubmit({ username, password }); // 调用父组件传递的回调函数
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>用户注册: </h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="请输入用户名"
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="请输入邮箱"
        />
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
    </form>
  );
};

export default RegistForm;

// LoginForm.jsx
import React, { useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username); // 调用登录方法
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>用户名:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>密码:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

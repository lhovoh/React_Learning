import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard", { state: { username: "zhangsan", age: 20 } });
  };

  return (
    <div>
      <h2>登录页面</h2>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Login;

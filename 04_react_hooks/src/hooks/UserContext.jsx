// UserContext.jsx
import React, { createContext, useState } from "react";

// 创建上下文
export const UserContext = createContext();

// 创建上下文提供者组件
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 用户状态

  // 登录方法
  const login = (username) => {
    setUser({ username });
  };

  // 登出方法
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

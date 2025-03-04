// LogoutButton.jsx
import React, { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const LogoutButton = () => {
  const { logout, user } = useContext(UserContext);

  // 如果用户未登录，不显示登出按钮
  if (!user) {
    return null;
  }

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;

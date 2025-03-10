import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { username, age } = location.state || {};

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>
        欢迎：{username}
        {age}
      </h3>
      <nav>
        <NavLink
          to="profile"
          style={({ isActive }) => ({
            padding: "8px 16px",
            textDecoration: "none",
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "blue" : "transparent",
            borderRadius: "4px",
            marginLeft: "10px", // 添加间距
          })}
        >
          Profile
        </NavLink>
        <NavLink
          to="setting"
          style={({ isActive }) => ({
            padding: "8px 16px",
            textDecoration: "none",
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "blue" : "transparent",
            borderRadius: "4px",
            marginLeft: "10px", // 添加间距
          })}
        >
          Setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;

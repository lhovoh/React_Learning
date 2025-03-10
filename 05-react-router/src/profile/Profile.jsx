import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile 页面</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // 使用行布局
          gap: "20px", // 导航栏和内容之间的间距
          padding: "20px", // 容器的内边距
          width: "100%", // 容器宽度
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "200px", // 导航栏宽度
            backgroundColor: "#f9f9f9", // 添加背景颜色（可选）
            borderRadius: "8px", // 添加圆角（可选）
            padding: "10px", // 导航栏内边距
          }}
        >
          <NavLink
            to="fans"
            style={({ isActive }) => ({
              padding: "8px 16px",
              textDecoration: "none",
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "blue" : "transparent",
              borderRadius: "4px",
            })}
          >
            Fans
          </NavLink>
          <NavLink
            to="follow"
            style={({ isActive }) => ({
              padding: "8px 16px",
              textDecoration: "none",
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "blue" : "transparent",
              borderRadius: "4px",
            })}
          >
            Follow
          </NavLink>
        </nav>
        <div
          style={{
            flex: 1, // 占据剩余空间
            backgroundColor: "#fff", // 内容区域背景颜色（可选）
            borderRadius: "8px", // 添加圆角（可选）
            padding: "20px", // 内容区域内边距
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;

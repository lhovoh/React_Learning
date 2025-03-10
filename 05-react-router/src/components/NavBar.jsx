import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* 使用 NavLink 并添加点击高亮效果 */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          padding: "8px 16px",
          textDecoration: "none",
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "blue" : "transparent",
          borderRadius: "4px",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          padding: "8px 16px",
          textDecoration: "none",
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "blue" : "transparent",
          borderRadius: "4px",
          marginLeft: "10px", // 添加间距
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          padding: "8px 16px",
          textDecoration: "none",
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "blue" : "transparent",
          borderRadius: "4px",
          marginLeft: "10px", // 添加间距
        })}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          padding: "8px 16px",
          textDecoration: "none",
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "blue" : "transparent",
          borderRadius: "4px",
          marginLeft: "10px", // 添加间距
        })}
      >
        Login
      </NavLink>
      <NavLink
        to="/book/123"
        style={({ isActive }) => ({
          padding: "8px 16px",
          textDecoration: "none",
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "blue" : "transparent",
          borderRadius: "4px",
          marginLeft: "10px", // 添加间距
        })}
      >
        Book
      </NavLink>
    </nav>
  );
};

export default NavBar;

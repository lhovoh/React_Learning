import { useState } from "react";

const ThemeToggle = () => {
  // 使用 Hook 管理暗黑模式的状态。
  // 为 true 时，表示暗黑模式；为 false 时，表示明亮模式。
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleTheme = () => {
    // 切换暗黑模式的状态。
    setisDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        afafasfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </h2>
      <button onClick={toggleTheme}>
        切换到 {isDarkMode ? "白天" : "黑夜"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;

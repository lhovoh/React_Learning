import { useState } from "react";
import RegistForm from "./RegistForm";

const App = () => {
  const [registeredData, setRegisteredData] = useState(null);

  const handleRegistSubmit = (data) => {
    setRegisteredData(data); // 更新状态以存储提交的数据
  };

  return (
    <div>
      <RegistForm onSubmit={handleRegistSubmit} />
      {registeredData && (
        <div>
          <h2>注册成功！</h2>
          <p>用户名: {registeredData.username}</p>
          <p>密码: {registeredData.password}</p>
        </div>
      )}
    </div>
  );
};

export default App;

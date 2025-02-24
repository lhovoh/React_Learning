import "./navbar/style.css";
import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <span className="header-itemone">
        <HomeOutlined />
        首页
      </span>
      <span className="header-item">
        <MailOutlined />
        邮箱
      </span>
      <span className="header-item">
        <SettingOutlined />
        设置
      </span>
    </div>
  );
};

export default Header;

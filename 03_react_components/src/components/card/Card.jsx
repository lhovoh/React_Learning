import React from "react";
import "./Card.css";

const Card = ({ header, body, footer }) => {
  return (
    <div className="card">
      {/* 标题区域 */}
      {header && <div className="card-header">{header}</div>}

      {/* 内容区域 */}
      {body && <div className="card-body">{body}</div>}

      {/* 操作区域 */}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";

const CardProfile = () => {
  return (
    <div className="app">
      <Card
        header={<h2>卡片标题</h2>}
        body={<p>小明是晨光小学的一名五年级学生</p>}
        footer={<button onClick={() => alert("按钮点击")}>确认</button>}
      />
    </div>
  );
};

export default CardProfile;

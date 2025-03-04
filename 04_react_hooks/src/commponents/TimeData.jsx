import { useEffect, useState } from "react";

const TimeData = () => {
  // 管理当前时间的数据状态
  const [time, setTime] = useState(new Date());

  // 使用useEffect设置一个定时器
  useEffect(() => {
    // 每隔1秒更新一次时间
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 清除定时器
    return () => clearInterval(timer);
  }, []); // 依赖数组为空，只在组件挂载时执行一次

  // 格式化时间 为 HH:mm:ss 格式
  const formatTime = (date) => {
    // 确保小时数始终为两位数字，不足时前面补0
    const hours = String(date.getHours()).padStart(2, "0");
    // 确保分钟数始终为两位数字，不足时前面补0
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // 确保秒数始终为两位数字，不足时前面补0
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // 返回格式化后的时间字符串
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>当前时间：{formatTime(time)}</h1>
    </div>
  );
};

export default TimeData;

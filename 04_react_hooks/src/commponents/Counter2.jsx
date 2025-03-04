import { useImperativeHandle, forwardRef, useState } from "react";

const Counter2 = forwardRef((props, ref) => {
  const [count, setCount] = useState(10);

  // 使用 useImperativeHandle 暴露 reset 方法
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0); // 重置计数器
    },
  }));

  return <div>Counter2 - {count}</div>;
});

export default Counter2;

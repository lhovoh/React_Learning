import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("abc");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <div>请输入你的值: {inputValue}</div>
    </div>
  );
};

export default TextInput;

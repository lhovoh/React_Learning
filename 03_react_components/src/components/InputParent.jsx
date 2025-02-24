import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("");

  const handInputChange = (value) => {
    // 更新组件的状态
    setInputValue(value);
  };

  return (
    <>
      <h2>输入的值是: {inputValue}</h2>
      <Input onInputChange={handInputChange} />
    </>
  );
};

export default InputParent;

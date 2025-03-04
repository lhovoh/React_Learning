import React from "react";
// import { useContext } from "react";
import ThemeToggle from "./commponents/ThemeToggle";
import TextInput from "./commponents/TextInput";
import TodoList from "./commponents/TodoList";
import FetchData from "./commponents/FetchData";
import PageTitle from "./commponents/PageTitle";
import TimeData from "./commponents/TimeData";
import Weather from "./commponents/Weather";
import { UserContext, UserProvider } from "./hooks/UserContext";
import LogoutButton from "./commponents/LogoutButton";
import LoginForm from "./commponents/LoginForm";
import ExpensiveCalculationParent from "./commponents/ExpensiveCalculationParent";
import ListFilterParent from "./commponents/ListFilterParent";
import Parent from "./commponents/Parent";
import ExpensiveComponentParent from "./commponents/ExpensiveComponentParent";
import FocusInput from "./commponents/FocusInput";
import PreviousValue from "./commponents/PreviousValue";
import Parent1 from "./commponents/Parent1";
import Parent2 from "./commponents/Parent2";
import ComponentSize from "./commponents/ComponentSize";
import AnimateBox from "./commponents/AnimateBox";
import Data from "./commponents/Data";
import Search from "./commponents/Search";

// const AppContent = () => {
//   const { user } = useContext(UserContext);

//   return (
//     <div>
//       <h1>登录</h1>
//       {user ? (
//         <div>
//           <p>欢迎, {user.username}!</p>
//           <LogoutButton />
//         </div>
//       ) : (
//         <LoginForm />
//       )}
//     </div>
//   );
// };

const App = () => {
  // const handleSearch = (query) => {
  //   console.log("搜索查询:", query);
  // };

  return (
    <div>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <TimeData /> */}
      {/* <Weather /> */}
      {/* <UserProvider>
        <AppContent />
      </UserProvider> */}
      {/* <ExpensiveCalculationParent /> // 优化计算 */}
      {/* <ListFilterParent /> // 列表过滤 */}
      {/* <Parent /> //防止不必要的函数重渲染 */}
      {/* <ExpensiveComponentParent /> // 事件处理 */}
      {/* <FocusInput /> // 获取 DOM 元素 */}
      {/* <PreviousValue /> // 保存之前的值 */}
      {/* <Parent1 /> // 父组件控制子组件的方法 */}
      {/* <Parent2 /> // 暴露自定义方法 重置计数器 */}
      {/* <ComponentSize /> // 获取元素尺寸 */}
      <AnimateBox /> // 动画同步
      {/* <Data /> // useFetch自定义Hook */}
      {/* <div>
        <h1>搜索示例</h1>
        <Search onSearch={handleSearch} />
      </div>
      // useDebounce自定义Hook */}
    </div>
  );
};

export default App;

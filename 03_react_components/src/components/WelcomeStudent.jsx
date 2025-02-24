const WelcomeStudent = (props) => {
  return (
    <div>
      {props.avatar && <img src={props.avatar} alt="学生头像" />}
      <h1>学生姓名: {props.name}</h1>
      <h1>学生年龄: {props.age}</h1>
      <h2>已选科目：{props.stud}</h2>
    </div>
  );
};

export default WelcomeStudent;

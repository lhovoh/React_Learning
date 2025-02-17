import React from "react";

const srcUrl =
  "https://public-cdn-oss.mosoteach.cn/avatar/2023/BD/6a6510afdd8b00301d72d69630c5a3a4.jpg?v=1680759033&x-oss-process=style/s300x300";

const colors = ["red", "blue", "green", "yellow", "purple"];

class Mydesgin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      message: 0,
      message2: "",
    };
  }

  btnClick = () => {
    this.setState({
      isReady: !this.state.isReady,
      message: this.state.message + 1,
    });
  };

  puckClick = () => {
    this.setState({
      message2: "你就是闲的！！！",
    });
  };

  render() {
    const cur = colors[this.state.message % colors.length];
    return (
      <div>
        {this.state.isReady && (
          <img
            src={srcUrl}
            alt="头像"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "1px solid #ccc",
              margin: "20px",
            }}
          />
        )}
        <p>
          <button onClick={this.btnClick} style={{ color: cur }}>
            {this.state.isReady ? "隐藏图片" : "显示图片"}
          </button>
          <h2 style={{ color: cur }}>你已点击了 {this.state.message} 次</h2>
          {this.state.message > 10 && (
            <h3
              onClick={this.puckClick}
              style={{ color: "orange", textAlign: "center" }}
            >
              <button>隐藏成就达成!</button>
              <br />
              {this.state.message2}
            </h3>
          )}
        </p>
      </div>
    );
  }
}
export default Mydesgin;

import "./navbar/style.css";
import { Carousel } from "antd";

const MainBanner = () => {
  // 轮播图组件的逻辑代码
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <img className="contentStyle" src="src/assets/fengjing.jpg" />
      </div>
      <div>
        <img className="contentStyle" src="src/assets/meijing.jpg" />
      </div>
      <div>
        <img className="contentStyle" src="src/assets/banner-2.png" />
      </div>
    </Carousel>
  );
};

export default MainBanner;

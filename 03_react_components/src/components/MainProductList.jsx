import "./navbar/style.css";
const MainProductList = () => {
  const products = [
    {
      image: "src/assets/fengjing.jpg",
      title: "张三",
      subtitle: "123123456",
    },
    { image: "src/assets/meijing.jpg", title: "张三丰", subtitle: "245124456" },
    {
      image: "src/assets/banner-2.png",
      title: "张四",
      subtitle: "3245136789",
    },
  ];

  return (
    <div className="gallery">
      {products.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.image} alt={item.title} className="gallery-image" />
          <div className="gallery-item2">
            <img src={item.image} alt={item.title} className="gallery-image2" />
            <div className="gallery-item3">
              <div className="gallery-title">{item.title}</div>
              <div className="gallery-subtitle">{item.subtitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainProductList;

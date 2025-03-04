import { useEffect, useState } from "react";

const Weather = () => {
  // 状态管理
  const [city, setCity] = useState("Beijing"); // 用户输入的城市名称
  const [weatherData, setWeatherData] = useState(null); // 天气数据
  const [loading, setLoading] = useState(false); // 加载状态
  const [error, setError] = useState(null); // 错误信息

  const API_KEY = "8cb996b40caf70a96a2c78290dda2ac1"; // 请替换为您的 API 密钥
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; // 天气 API URL

  // 获取天气数据
  const fetchWeather = async () => {
    if (!city) {
      setError("请输入城市名称");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("城市名称无效或网络错误");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // 使用 useEffect 监听 city 变化，自动获取天气数据
  useEffect(() => {
    fetchWeather();
  }, [city]); // 当 city 变化时，重新调用 fetchWeather

  // 处理输入框变化
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>天气查询</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="请输入城市名称"
        />
      </div>

      {loading && <p>加载中...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name} 的天气</h2>
          <p>温度: {weatherData.main.temp}°C</p>
          <p>天气: {weatherData.weather[0].description}</p>
          <p>湿度: {weatherData.main.humidity}%</p>
          <p>风速: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

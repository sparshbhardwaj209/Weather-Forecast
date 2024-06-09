import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const HourlyForecast = ({ data, toggleTheme, currentTheme }) => {

  if (!data) {
    return <div>Loading hourly forecast...</div>;
  }

  const hourlyData = data.list.slice(0, 5).map((item) => {
    // Convert temperature from Fahrenheit to Celsius
    const tempCelsius = item.main.temp - 273.15;

    return {
      time: item.dt_txt.split(" ")[1],
      temp: `${tempCelsius.toFixed(1)}°C`,
      icon: "🌤️",
    };
  });

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-6xl mb-4 font-bold">Today's Temprature</h3>
        <button className="text-4xl cursor-pointer " onClick={toggleTheme}>
        {currentTheme === "dark" ? <IoSunny className="transition duration-500 ease-in-out" /> : <IoMoon className="transition duration-500 ease-in-out" />}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className="p-4 rounded-lg text-center hover:border-white"
          >
            <p className="font-normal">{hour.time}</p>
            <div className="text-xl">{hour.icon}</div>
            <p className="text-2xl font-medium">{hour.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;

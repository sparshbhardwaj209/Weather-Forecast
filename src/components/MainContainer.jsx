import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import HourlyForecast from "./HourlyForecast";
import Highlights from "./Highlights";
import { API_ID, API_KEY, CallingAddress } from "./constants";

const MainContainer = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [theme, setTheme] = useState("dark");
  const defaulCity ="Delhi";

  useEffect(() => {
    getWeather(defaulCity);
  }, []);

  const getWeather = async (city) => {
    const data = await fetch(
      CallingAddress + city + API_ID + API_KEY
    );
    const json = await data.json();
    setWeatherInfo(json);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <div className={`bg-cover h-screen w-screen bg-no-repeat text-white absolute flex ${theme === "dark" ? "bg-[url('/src/assets/images/frame.png')]" : "bg-blue-400"}`}>
      
      <div className={`bg-${theme === "dark" ? "gray-900" : "gray-200"} bg-opacity-75 p-6 rounded-xl h-auto relative m-8 flex-1`}>
        {weatherInfo ? <WeatherCard data={weatherInfo} getWeather={getWeather}/> : <p>Loading...</p>}
      </div>
      <div className="relative flex-grow my-8 mx-10">
        <HourlyForecast data={weatherInfo} toggleTheme={toggleTheme} currentTheme={theme}/>
        <Highlights data={weatherInfo} />
      </div>
    </div>
  );
};

export default MainContainer;

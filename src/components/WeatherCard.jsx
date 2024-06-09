import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import myCloud from "../assets/images/cloud.png"

const WeatherCard = ({data, getWeather}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [searchText, setSearchText] = useState("");
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  const handleSearch = () => {
    if (searchText) {
      getWeather(searchText);
    }
  };
  
  // useEffect(()=>{
  //   if(searchText){
  //     getNewData();
  //   }
  // },[]);

  return (
    <div className="min-w-72">
      <div className="upper">
        <div className="flex search-container w-full justify-center items-center gap-1">
          <input
            className="rounded-lg px-3 py-2 w-[80%] my-2 text-black border-none "
            type="text"
            placeholder="Search City"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="flex justify-center w-[20%] px-2 border-2 py-2 rounded-lg cursor-pointer" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="flex justify-center py-3">
          <img src={myCloud} alt="Cloud" />
        </div>
        <div className="px-3 border-b-2 py-2">
          <div className="flex gap-2 items-center text-xl">
            <IoLocationOutline />
            <h3 >{data.city.name}, {data.city.country}</h3>
          </div>
          <h1 className="text-3xl font-semibold">{(data.list[0].main.temp - 273.15).toFixed(1)}°C</h1>
          <h3 className="text-lg">{currentDateTime.toLocaleString()}</h3>
        </div>
      </div>
      <div className="lower mt-3 px-3">
        <div className="text-sm text-justify">
          Weather predictions are created by gathering objective data about the
          actual condition of the atmosphere at a certain location and using
          meteorology to predict how the weather will behave in the future.
          Human feedback is also required to choose the best possible forecast
          model on which to base the forecast.
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

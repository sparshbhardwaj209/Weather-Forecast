import React from "react";

const Highlights = ({ data }) => {
 
  if (!data) {
    return <div>Loading hourly forecast...</div>;
  }

  // function to convert unix time into the local time
  function convertToLocalTime(unixTimestamp, timezoneOffset) {
    const milliseconds = unixTimestamp * 1000;
    const date = new Date(milliseconds);
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const localDate = new Date(utc + (timezoneOffset * 1000));
    return localDate.toLocaleTimeString();
}

  const hourlyData = {
    windSpeed: data.list[0].wind.speed,
    sunrise: convertToLocalTime(data.city.sunrise, data.city.timezone),
    sunset: convertToLocalTime(data.city.sunset, data.city.timezone),
    humidity: data.list[0].main.humidity,
    visibility: data.list[0].visibility / 1000,
    description: data.list[0].weather[0].description,
    pressure: data.list[0].main.pressure,
  };

  return (
    <div className="">
      <div className="my-2 mt-12 mb-8">
        <h1 className="text-5xl">Today's Highlights - </h1>
      </div>
      <div className="flex justify-start font-medium gap-10">
        <div className="bg-transparent p-4 rounded-lg w-[40%]">
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Wind Speed:</h4>
            <p className="text-xl">{hourlyData.windSpeed}</p>
          </div>
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Surise: </h4>
            <p className="text-xl">{hourlyData.sunrise}</p>
          </div>
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Sunset: </h4>
            <p className="text-xl">{hourlyData.sunset}</p>
          </div>
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Humidity: </h4>
            <p className="text-xl">{hourlyData.humidity}</p>
          </div>
        </div>
        <div className="bg-transparent w-[40%] p-4 rounded-lg">
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Visibility: </h4>
            <p className="text-xl">{hourlyData.visibility} KM</p>
          </div>
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Pressure: </h4>
            <p className="text-xl">{hourlyData.pressure}</p>
          </div>
          <div className="flex mb-4 items-center gap-1">
            <h4 className="text-xl">Description: </h4>
            <p className="text-xl">{hourlyData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Highlights;

import { useState } from "react";
import "./Container.css";
import Cityinput from "./cityinput";
import Data from "./data";

function Container() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "Wonderland",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const changeweather = (newinfo) => {
    setweatherinfo(newinfo);
  };

  return (
    <div className="maincont">
      <Cityinput changeweather={changeweather} />
      <Data info={weatherinfo} />
    </div>
  );
}

export default Container;

import { useState } from "react";
import "./cityinput.css";

function Cityinput({ changeweather }) {
  const [city, setcity] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const apikey = import.meta.env.VITE_WEATHER_API_KEY || "236f1684ce5ac755f7c2af0ed5eb9640";
  const geoApiUrl = import.meta.env.VITE_GEO_API_URL || "https://api.openweathermap.org/geo/1.0/direct";
  const wetapi = import.meta.env.VITE_WEATHER_API_URL || "https://api.openweathermap.org/data/2.5/weather";

  const handelChange = (event) => {
    setcity(event.target.value);
    if (error) seterror("");
  };

  const getinfo = async (cityname) => {
    const response = await fetch(
      `${geoApiUrl}?q=${cityname}&limit=5&appid=${apikey}`
    );
    const jsonres = await response.json();
    if (!jsonres || jsonres.length === 0) {
      throw new Error("City not found");
    }
    const wetres = await fetch(
      `${wetapi}?lat=${jsonres[0].lat}&lon=${jsonres[0].lon}&units=metric&appid=${apikey}`
    );
    const wetjsonres = await wetres.json();
    if (!wetjsonres || !wetjsonres.main) {
      throw new Error("Weather data unavailable");
    }
    return {
      city: wetjsonres.name,
      feelslike: wetjsonres.main.feels_like,
      temp: wetjsonres.main.temp,
      tempMin: wetjsonres.main.temp_min,
      tempMax: wetjsonres.main.temp_max,
      humidity: wetjsonres.main.humidity,
      weather: wetjsonres.weather[0].description,
    };
  };

  const handelsubmit = async (event) => {
    event.preventDefault();
    if (!city.trim()) {
      seterror("Please enter a city name");
      return;
    }
    setloading(true);
    seterror("");
    try {
      const newinfo = await getinfo(city.trim());
      setcity("");
      changeweather(newinfo);
    } catch (err) {
      seterror(err.message || "Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <form className="formcont" onSubmit={handelsubmit}>
      <div className="search-wrap">
        <input
          type="text"
          value={city}
          onChange={handelChange}
          placeholder="Search city..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            <span className="spinner" />
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          )}
        </button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
}

export default Cityinput;

import "./data.css";

// Pure nature weather / sky photos (no caves, no roads, only atmospheric weather & sky)
const weatherImages = {
  // Clear bright blue sky with sunlight
  sunny:
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  // Dramatic puffy clouds across an open sky
  cloudy:
    "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  // Crisp winter snow landscape under a cool sky
  snowy:
    "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  // Blazing hot sunny sky / golden sun rays
  hot:
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  // Moody rainy overcast sky with rain
  rainy:
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?fm=jpg&q=80&w=1200&auto=format&fit=crop",
};

function getWeatherImage(info) {
  const weather = (info.weather || "").toLowerCase();
  const temp = Number(info.temp);
  const humidity = Number(info.humidity);

  // 1. Snow / freezing conditions
  if (weather.includes("snow") || weather.includes("sleet") || temp < 3) {
    return weatherImages.snowy;
  }
  // 2. Rain / drizzle / thunderstorm / extreme moisture
  if (
    weather.includes("rain") ||
    weather.includes("drizzle") ||
    weather.includes("thunderstorm") ||
    weather.includes("shower") ||
    humidity > 80
  ) {
    return weatherImages.rainy;
  }
  // 3. Hot / scorching weather
  if (temp >= 32) {
    return weatherImages.hot;
  }
  // 4. Clouds / overcast / haze / mist / fog
  if (
    weather.includes("cloud") ||
    weather.includes("mist") ||
    weather.includes("fog") ||
    weather.includes("haze") ||
    weather.includes("smoke") ||
    weather.includes("overcast") ||
    humidity > 60
  ) {
    return weatherImages.cloudy;
  }
  // 5. Default clear / sunny sky
  return weatherImages.sunny;
}

function Data({ info }) {
  const imgsrc = getWeatherImage(info);

  return (
    <div className="container">
      <div className="img-wrap">
        <img
          key={imgsrc}
          src={imgsrc}
          alt={info.weather}
          loading="lazy"
          onError={(e) => {
            e.target.src = weatherImages.sunny;
          }}
        />
      </div>
      <div className="city-name">{info.city}</div>
      <div className="temp">{Math.round(Number(info.temp))}&deg;C</div>
      <div className="desc">{info.weather}</div>
      <div className="details">
        <span>Feels like {Math.round(Number(info.feelslike))}&deg;C</span>
        <span>Humidity {info.humidity}%</span>
      </div>
      <div className="minmax">
        <span>Min {Math.round(Number(info.tempMin))}&deg;C</span>
        <span>Max {Math.round(Number(info.tempMax))}&deg;C</span>
      </div>
    </div>
  );
}

export default Data;

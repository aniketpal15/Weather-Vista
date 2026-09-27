# 🌤️ Atmosphere - Weather App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://weather-vista-vert.vercel.app/)

🔗 **Live Demo**: [https://weather-vista-vert.vercel.app/](https://weather-vista-vert.vercel.app/)

A fast, responsive, and minimalist Weather Application built with **React 19**, **Vite**, and **OpenWeatherMap API**. Features instant location search via geocoding, real-time weather metrics, and dynamic light/dark theme switching powered by React Context.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

---

## ✨ Key Features

- 🔍 **Smart City Search**: Search weather conditions for any city worldwide using OpenWeatherMap's Geocoding API.
- 🌗 **Light & Dark Theme**: Seamless toggle between light and dark modes with persistent React Context state (`ThemeContext`).
- 📊 **Detailed Weather Metrics**:
  - Current Temperature & "Feels Like" reading
  - Daily High & Low temperatures
  - Humidity percentage
  - Real-time weather condition description & icons
- ⚡ **Lightning Fast**: Bundled with Vite for instant server start and optimal browser rendering.
- 🎨 **Modern Aesthetics**: Glassmorphic UI elements, polished SVG icons, loading states, and error handling.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **API Provider**: [OpenWeatherMap API](https://openweathermap.org/api) (Geocoding & Current Weather APIs)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **State Management**: React Context API & `useState` Hooks

---

## 📁 Project Structure

```text
weather-api/
├── src/
│   ├── assets/           # Static assets and icons
│   ├── App.css           # Global layout & root styling
│   ├── App.jsx           # Top-level application shell with Theme provider UI
│   ├── Container.css     # Weather card container styles
│   ├── Container.jsx     # Main weather container wrapper
│   ├── ThemeContext.jsx  # React Context for light/dark mode state management
│   ├── cityinput.css     # Search bar styling & spinner keyframes
│   ├── cityinput.jsx     # City input form & API fetching logic
│   ├── data.css          # Weather details display component styles
│   ├── data.jsx          # Weather info card rendering
│   ├── index.css         # Design system tokens, color palettes & global styles
│   └── main.jsx          # React app entry point
├── index.html            # App HTML entry
├── package.json          # Project manifest & scripts
└── vite.config.js        # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` to view the application live.

---

## 🔑 API Reference

This app connects to **OpenWeatherMap APIs**:
1. **Geocoding API**: Resolves city names to latitude and longitude coordinates.
   `https://api.openweathermap.org/geo/1.0/direct?q={city_name}&limit=5&appid={API_KEY}`
2. **Current Weather API**: Retrieves main temperature, weather condition, humidity, and min/max readings.
   `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}`

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute as needed.

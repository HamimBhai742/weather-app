# 🌤️ Weather App

A modern, responsive weather application built with React, TypeScript, and TailwindCSS. Get real-time weather data, hourly forecasts, and explore global weather patterns with an interactive world map.

![Weather App](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## ✨ Features

- 🌡️ **Real-time Weather Data** - Current weather conditions for any city worldwide
- ⏰ **24-Hour Forecast** - Detailed hourly weather predictions
- 📅 **7-Day Outlook** - Weekly weather forecasts
- 🗺️ **Interactive World Map** - Global weather visualization with major cities
- 🔍 **City Search** - Search weather for any location
- 🌙 **Dark/Light Mode** - Theme switching with system preference support
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Weather Animations** - Beautiful Lottie animations for different weather conditions
- ⚡ **Loading Skeletons** - Smooth loading experience
- 🌐 **Multiple APIs** - OpenWeatherMap and Open-Meteo integration

## 🚀 Demo

- **Home Page** - Current weather with hourly and daily forecasts
- **About Page** - Information about the application and features
- **Map Page** - Interactive world map with real-time weather data

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### Styling
- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Lottie React** - Weather animations

### APIs
- **OpenWeatherMap API** - Current weather data
- **Open-Meteo API** - Forecast data and coordinates

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CurrentWeatherSection/
│   │   ├── forecast7days/
│   │   ├── hourlyForcastCard/
│   │   ├── Searchbar/
│   │   ├── WeatherIcon/
│   │   ├── DigitalClock/
│   │   ├── lodingSkeleton/
│   │   └── ui/             # Base UI components
│   ├── hooks/              # Custom React hooks
│   │   ├── useWeather.tsx  # OpenWeatherMap API hook
│   │   └── useForecast.tsx # Open-Meteo API hook
│   ├── pages/              # Route components
│   │   ├── Home/           # Main weather dashboard
│   │   ├── About/          # About page
│   │   └── Map/            # Interactive world map
│   ├── types/              # TypeScript type definitions
│   ├── helpers/            # Utility functions
│   ├── layout/             # Layout components
│   └── routes/             # Router configuration
├── lottieFiles/            # Weather animation files
├── public/                 # Static assets
└── README.md
```

## 🌐 API Integration

### OpenWeatherMap API
- Current weather conditions
- City-based weather search
- Weather icons and descriptions

### Open-Meteo API
- Hourly forecasts (24 hours)
- Daily forecasts (7 days)
- Sunrise/sunset times
- Coordinate-based weather data

## 🎨 Design Features

- **Glass-morphism UI** - Modern frosted glass effect
- **Gradient Backgrounds** - Beautiful sky-to-indigo gradients
- **Smooth Animations** - Hover effects and transitions
- **Responsive Grid Layouts** - Adaptive to all screen sizes
- **Weather-based Theming** - Dynamic colors based on conditions
- **Accessibility** - WCAG compliant design

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Perfect layout for tablets
- **Desktop Enhanced** - Full-featured desktop experience
- **Touch Friendly** - Large touch targets and gestures

## 🔮 Future Enhancements

- [ ] Weather alerts and notifications
- [ ] Geolocation-based weather
- [ ] Weather radar overlay
- [ ] Historical weather data
- [ ] Weather widgets
- [ ] PWA support
- [ ] Offline functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [Open-Meteo](https://open-meteo.com/) for forecast data API
- [Lottie](https://lottiefiles.com/) for weather animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [TailwindCSS](https://tailwindcss.com/) for styling framework

## 📞 Support

If you have any questions or need help, please open an issue or contact the maintainers.

---

Made with ❤️ and ☀️ by [Your Name]

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getWeatherGradient(weather: any) {
  if (!weather || !weather[0]) return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600";
  const main = weather[0].main;
  const icon = weather[0].icon;
  const isDay = icon.includes("d");

  switch (main) {
    case "Clear":
      return isDay
        ? "bg-gradient-to-br from-amber-300 via-orange-400 to-pink-500" // sunny day
        : "bg-gradient-to-br from-indigo-900 via-purple-900 to-black"; // night clear
    case "Clouds":
      return isDay
        ? "bg-gradient-to-br from-slate-400 via-gray-500 to-blue-600" // cloudy day
        : "bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900"; // cloudy night
    case "Rain":
      return "bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700"; // rain
    case "Drizzle":
      return "bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700"; // rain
    case "Thunderstorm":
      return "bg-gradient-to-br from-purple-800 via-gray-900 to-black"; // storm
    case "Snow":
      return "bg-gradient-to-br from-blue-100 via-cyan-200 to-blue-400"; // snow
    case "Mist":
    case "Fog":
      return "bg-gradient-to-br from-gray-300 via-slate-400 to-gray-600"; // fog/mist
    default:
      return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600";
  }
}

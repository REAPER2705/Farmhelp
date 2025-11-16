import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react'

const Weather = () => {
  const currentWeather = {
    temp: 28,
    humidity: 65,
    rainProb: 40,
    condition: 'Partly Cloudy',
    windSpeed: 12,
  }

  const forecast = [
    { day: 'Mon', temp: 30, icon: <Sun className="w-8 h-8 text-yellow-500" />, rain: 10 },
    { day: 'Tue', temp: 28, icon: <Cloud className="w-8 h-8 text-gray-500" />, rain: 30 },
    { day: 'Wed', temp: 26, icon: <CloudRain className="w-8 h-8 text-blue-500" />, rain: 70 },
    { day: 'Thu', temp: 27, icon: <CloudRain className="w-8 h-8 text-blue-500" />, rain: 60 },
    { day: 'Fri', temp: 29, icon: <Cloud className="w-8 h-8 text-gray-500" />, rain: 20 },
    { day: 'Sat', temp: 31, icon: <Sun className="w-8 h-8 text-yellow-500" />, rain: 5 },
    { day: 'Sun', temp: 32, icon: <Sun className="w-8 h-8 text-yellow-500" />, rain: 5 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Cloud className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Weather Forecast</h1>
          <p className="text-xl text-gray-600">7-day weather predictions for better farm planning</p>
        </div>

        {/* Current Weather Dashboard */}
        <div className="card mb-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Current Weather</h2>
            <p className="text-blue-100">Today's Conditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <Sun className="w-12 h-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">{currentWeather.temp}°C</div>
              <div className="text-lg">{currentWeather.condition}</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <Droplets className="w-12 h-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">{currentWeather.humidity}%</div>
              <div className="text-lg">Humidity</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <CloudRain className="w-12 h-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">{currentWeather.rainProb}%</div>
              <div className="text-lg">Rain Probability</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2 text-lg">
            <Wind className="w-6 h-6" />
            <span>Wind Speed: {currentWeather.windSpeed} km/h</span>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="card">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">7-Day Forecast</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {forecast.map((day, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="font-bold text-lg mb-3 text-gray-800">{day.day}</div>
                <div className="flex justify-center mb-3">{day.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{day.temp}°C</div>
                <div className="flex items-center justify-center space-x-1 text-blue-600">
                  <Droplets className="w-4 h-4" />
                  <span className="text-sm font-semibold">{day.rain}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="card bg-green-50 border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-3 text-green-800">Farming Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Good weather for irrigation this week</li>
              <li>✓ Rain expected on Wed-Thu, plan accordingly</li>
              <li>✓ Ideal temperature for crop growth</li>
            </ul>
          </div>

          <div className="card bg-yellow-50 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold mb-3 text-yellow-800">Alerts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>⚠ Moderate rain expected mid-week</li>
              <li>⚠ Plan harvesting before Wednesday</li>
              <li>⚠ Check drainage systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather

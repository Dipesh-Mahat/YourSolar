'use client'

import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, TrendingUp } from 'lucide-react'
import { Line } from 'react-chartjs-2'

export default function WeatherPage() {
  const forecastData = {
    labels: ['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Solar Production Forecast (kWh)',
        data: [42, 38, 25, 30, 45, 48, 50],
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#fff' } },
    },
    scales: {
      x: { ticks: { color: '#999' }, grid: { color: '#2A2A2A' } },
      y: { ticks: { color: '#999' }, grid: { color: '#2A2A2A' } },
    },
  }

  const weekForecast = [
    { day: 'Monday', condition: 'Sunny', icon: Sun, temp: 75, solar: 100, precipitation: 0 },
    { day: 'Tuesday', condition: 'Partly Cloudy', icon: Cloud, temp: 72, solar: 85, precipitation: 10 },
    { day: 'Wednesday', condition: 'Cloudy', icon: Cloud, temp: 68, solar: 55, precipitation: 20 },
    { day: 'Thursday', condition: 'Partly Cloudy', icon: Cloud, temp: 70, solar: 75, precipitation: 15 },
    { day: 'Friday', condition: 'Sunny', icon: Sun, temp: 78, solar: 100, precipitation: 0 },
    { day: 'Saturday', condition: 'Sunny', icon: Sun, temp: 80, solar: 100, precipitation: 0 },
    { day: 'Sunday', condition: 'Rainy', icon: CloudRain, temp: 65, solar: 30, precipitation: 70 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Weather & Forecast</h1>
        <p className="text-gray-400">Solar production forecast based on weather conditions</p>
      </div>

      {/* Current Conditions */}
      <div className="solar-card">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2 flex items-center gap-6">
            <Sun className="w-24 h-24 text-solar-yellow" />
            <div>
              <h2 className="text-5xl font-bold text-white mb-2">75°F</h2>
              <p className="text-xl text-gray-300">Sunny</p>
              <p className="text-gray-400">Perfect for solar production</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 mb-2">Expected Production</p>
            <p className="text-2xl font-bold text-solar-yellow mb-1">45 kWh</p>
            <p className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp size={16} /> +8% above average
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Wind className="text-gray-400" size={20} />
              <span className="text-white">Wind: 8 mph</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="text-gray-400" size={20} />
              <span className="text-white">Humidity: 45%</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="text-gray-400" size={20} />
              <span className="text-white">Visibility: 10 mi</span>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 mb-2">UV Index</p>
            <p className="text-3xl font-bold text-white mb-1">8</p>
            <p className="text-orange-500 text-sm">Very High</p>
            <div className="mt-3">
              <p className="text-gray-400 mb-1 text-sm">Cloud Cover</p>
              <div className="w-full bg-solar-gray-light rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
              <p className="text-white text-sm mt-1">15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast Chart */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">7-Day Production Forecast</h2>
        <div className="h-64">
          <Line data={forecastData} options={chartOptions} />
        </div>
      </div>

      {/* Weekly Forecast Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {weekForecast.map((day, index) => (
          <div key={index} className="solar-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-white font-semibold">{day.day}</p>
                <p className="text-gray-400 text-sm">{day.condition}</p>
              </div>
              <day.icon className="text-solar-yellow" size={32} />
            </div>
            
            <p className="text-3xl font-bold text-white mb-3">{day.temp}°F</p>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Solar Potential</span>
                  <span className="text-white">{day.solar}%</span>
                </div>
                <div className="w-full bg-solar-gray-light rounded-full h-2">
                  <div 
                    className="bg-solar-yellow h-2 rounded-full" 
                    style={{ width: `${day.solar}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Precipitation</span>
                <span className="text-white">{day.precipitation}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weather Alerts */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">Weather Alerts & Recommendations</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <Sun className="text-green-500 mt-1" size={24} />
            <div>
              <p className="text-white font-semibold">Optimal Production Expected</p>
              <p className="text-gray-300 text-sm">
                Next 3 days show excellent solar conditions. Consider scheduling high-energy tasks.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <CloudRain className="text-yellow-500 mt-1" size={24} />
            <div>
              <p className="text-white font-semibold">Reduced Production Sunday</p>
              <p className="text-gray-300 text-sm">
                Rain expected on Sunday. Production may drop to 30%. Battery will compensate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solar Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="solar-card">
          <h3 className="text-lg font-bold text-white mb-4">This Week</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Avg. Temperature</span>
              <span className="text-white font-semibold">72°F</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Sunny Days</span>
              <span className="text-white font-semibold">5 / 7</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Production Impact</span>
              <span className="text-green-500 font-semibold">+5%</span>
            </div>
          </div>
        </div>

        <div className="solar-card">
          <h3 className="text-lg font-bold text-white mb-4">This Month</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Clear Sky Hours</span>
              <span className="text-white font-semibold">245 hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rainfall</span>
              <span className="text-white font-semibold">2.3 inches</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Solar Efficiency</span>
              <span className="text-solar-yellow font-semibold">92%</span>
            </div>
          </div>
        </div>

        <div className="solar-card">
          <h3 className="text-lg font-bold text-white mb-4">Best Conditions</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Peak Production Day</span>
              <span className="text-white font-semibold">June 15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Best Month</span>
              <span className="text-white font-semibold">July</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Avg. Summer Output</span>
              <span className="text-solar-yellow font-semibold">48 kWh/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

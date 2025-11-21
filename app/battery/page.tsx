'use client'

import { Battery, AlertCircle, CheckCircle } from 'lucide-react'
import { Line } from 'react-chartjs-2'

export default function BatteryPage() {
  const batteryData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [{
      label: 'Battery Level (%)',
      data: [65, 58, 45, 72, 95, 88, 75],
      borderColor: '#FFD700',
      backgroundColor: 'rgba(255, 215, 0, 0.1)',
      fill: true,
      tension: 0.4,
    }],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#fff' } },
    },
    scales: {
      x: { ticks: { color: '#999' }, grid: { color: '#2A2A2A' } },
      y: { 
        ticks: { color: '#999' }, 
        grid: { color: '#2A2A2A' },
        min: 0,
        max: 100,
      },
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Battery Storage</h1>
        <p className="text-gray-400">Monitor and manage your energy storage system</p>
      </div>

      {/* Battery Status */}
      <div className="solar-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Battery Status</h2>
          <span className="flex items-center gap-2 text-green-500 font-semibold">
            <CheckCircle size={20} /> Healthy
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Battery className="w-16 h-16 text-solar-yellow mx-auto mb-3" />
            <p className="text-gray-400 mb-1">Current Charge</p>
            <p className="text-4xl font-bold text-white">85%</p>
            <div className="w-full bg-solar-gray-light rounded-full h-2 mt-3">
              <div className="bg-solar-yellow h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 mb-2">Capacity</p>
            <p className="text-2xl font-bold text-white mb-4">13.5 kWh</p>
            <p className="text-gray-400 mb-2">Available Energy</p>
            <p className="text-xl font-semibold text-solar-yellow">11.5 kWh</p>
          </div>
          
          <div>
            <p className="text-gray-400 mb-2">Power Flow</p>
            <p className="text-2xl font-bold text-green-500 mb-4">+1.8 kW</p>
            <p className="text-gray-400 mb-2">Status</p>
            <p className="text-xl font-semibold text-white">Charging</p>
          </div>
          
          <div>
            <p className="text-gray-400 mb-2">Time to Full</p>
            <p className="text-2xl font-bold text-white mb-4">1.2 hrs</p>
            <p className="text-gray-400 mb-2">Cycles Used</p>
            <p className="text-xl font-semibold text-white">342 / 10,000</p>
          </div>
        </div>
      </div>

      {/* Battery Chart */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">24-Hour Battery Level</h2>
        <div className="h-64">
          <Line data={batteryData} options={chartOptions} />
        </div>
      </div>

      {/* Battery Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="solar-card">
          <h2 className="text-xl font-bold text-white mb-4">Battery Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Round-trip Efficiency</span>
              <span className="text-white font-semibold">94.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">State of Health</span>
              <span className="text-green-500 font-semibold">98.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Temperature</span>
              <span className="text-white font-semibold">22°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Warranty Remaining</span>
              <span className="text-white font-semibold">8.5 years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Last Maintenance</span>
              <span className="text-white font-semibold">3 months ago</span>
            </div>
          </div>
        </div>

        <div className="solar-card">
          <h2 className="text-xl font-bold text-white mb-4">Energy Savings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Self-Consumption Rate</span>
              <span className="text-white font-semibold">87%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Peak Shaving Savings</span>
              <span className="text-solar-yellow font-semibold">$42/month</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Energy Stored Today</span>
              <span className="text-white font-semibold">18.5 kWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Energy Discharged</span>
              <span className="text-white font-semibold">15.2 kWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Backup Runtime</span>
              <span className="text-white font-semibold">~8 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Modes */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">Operating Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              name: 'Self-Consumption', 
              desc: 'Maximize use of solar energy',
              active: true 
            },
            { 
              name: 'Time-of-Use', 
              desc: 'Optimize based on electricity rates',
              active: false 
            },
            { 
              name: 'Backup Reserve', 
              desc: 'Maintain minimum charge for outages',
              active: false 
            },
          ].map((mode) => (
            <button
              key={mode.name}
              className={`p-4 rounded-lg text-left transition-all ${
                mode.active 
                  ? 'bg-solar-yellow text-solar-black' 
                  : 'bg-solar-gray-light text-gray-300 hover:bg-solar-gray-medium'
              }`}
            >
              <p className="font-bold mb-1">{mode.name}</p>
              <p className={`text-sm ${mode.active ? 'text-solar-black' : 'text-gray-400'}`}>
                {mode.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">System Alerts</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <AlertCircle className="text-blue-500 mt-1" size={20} />
            <div>
              <p className="text-white font-semibold">Optimization Tip</p>
              <p className="text-gray-300 text-sm">
                Consider switching to Time-of-Use mode to save an additional $15/month
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
            <CheckCircle className="text-green-500 mt-1" size={20} />
            <div>
              <p className="text-white font-semibold">System Update</p>
              <p className="text-gray-300 text-sm">
                Battery firmware updated successfully to version 2.4.1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

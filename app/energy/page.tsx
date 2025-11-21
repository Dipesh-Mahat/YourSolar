'use client'

import { Zap, TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

function getStatColorClass(color: string) {
  if (color === 'green') return 'text-green-500'
  if (color === 'blue') return 'text-blue-500'
  return 'text-solar-yellow'
}

function getActivityColorClass(type: string) {
  if (type === 'success') return 'text-green-500'
  if (type === 'warning') return 'text-yellow-500'
  return 'text-blue-500'
}

export default function EnergyPage() {
  const energyFlowData = {
    labels: ['Solar Production', 'Grid Import', 'Battery Discharge'],
    datasets: [{
      data: [65, 20, 15],
      backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4'],
      borderColor: ['#FFC700', '#FF5252', '#3DB5AD'],
      borderWidth: 2,
    }],
  }

  const consumptionData = {
    labels: ['HVAC', 'Lighting', 'Appliances', 'Electronics', 'Other'],
    datasets: [{
      data: [35, 20, 25, 15, 5],
      backgroundColor: ['#FFD700', '#FFA500', '#FF8C00', '#FF7F50', '#FF6347'],
    }],
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Energy Monitoring</h1>
        <p className="text-gray-400">Real-time energy production and consumption analytics</p>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Current Power', value: '3.8 kW', status: 'Generating', color: 'green' },
          { label: 'Today\'s Energy', value: '42.5 kWh', status: '+12.3%', color: 'blue' },
          { label: 'Grid Status', value: 'Export', status: '1.2 kW surplus', color: 'yellow' },
          { label: 'Efficiency', value: '94.2%', status: 'Excellent', color: 'green' },
        ].map((stat) => (
          <div key={stat.label} className="solar-card">
            <Zap className="w-8 h-8 text-solar-yellow mb-3" />
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className={`text-sm font-semibold ${getStatColorClass(stat.color)}`}>
              {stat.status}
            </p>
          </div>
        ))}
      </div>

      {/* Energy Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="solar-card">
          <h2 className="text-xl font-bold text-white mb-6">Energy Sources (Today)</h2>
          <div className="h-64 flex items-center justify-center">
            <Doughnut 
              data={energyFlowData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: { color: '#fff', padding: 15 },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="solar-card">
          <h2 className="text-xl font-bold text-white mb-6">Consumption Breakdown</h2>
          <div className="h-64 flex items-center justify-center">
            <Doughnut 
              data={consumptionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: { color: '#fff', padding: 15 },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-6">Energy Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-solar-yellow mb-4">Production</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Today</span>
                <span className="text-white font-semibold">42.5 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">This Week</span>
                <span className="text-white font-semibold">315.2 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">This Month</span>
                <span className="text-white font-semibold">1,245.8 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">This Year</span>
                <span className="text-white font-semibold">12,458 kWh</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-solar-yellow mb-4">Consumption</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Today</span>
                <span className="text-white font-semibold">38.2 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">This Week</span>
                <span className="text-white font-semibold">285.5 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">This Month</span>
                <span className="text-white font-semibold">1,125.3 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">This Year</span>
                <span className="text-white font-semibold">11,250 kWh</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-solar-yellow mb-4">Grid Interaction</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Export Today</span>
                <span className="text-green-500 font-semibold flex items-center gap-1">
                  <TrendingUp size={16} /> 8.5 kWh
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Import Today</span>
                <span className="text-red-500 font-semibold flex items-center gap-1">
                  <TrendingDown size={16} /> 4.2 kWh
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Net Export</span>
                <span className="text-white font-semibold">+4.3 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Self-Sufficiency</span>
                <span className="text-solar-yellow font-semibold">89%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts & Notifications */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { time: '2 hours ago', message: 'Peak production reached: 4.8 kW', type: 'success' },
            { time: '5 hours ago', message: 'Grid export started (surplus energy)', type: 'info' },
            { time: 'Yesterday', message: 'Daily production goal achieved', type: 'success' },
            { time: '2 days ago', message: 'Weather forecast: Cloudy conditions expected', type: 'warning' },
          ].map((activity) => (
            <div key={activity.time + activity.message} className="flex items-start gap-3 p-3 bg-solar-gray-light rounded-lg">
              <Activity className={`mt-1 ${getActivityColorClass(activity.type)}`} size={20} />
              <div className="flex-1">
                <p className="text-white">{activity.message}</p>
                <p className="text-gray-400 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

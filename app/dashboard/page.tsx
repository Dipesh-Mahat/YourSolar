'use client'

import { TrendingUp, TrendingDown, Zap, Battery, DollarSign, Sun } from 'lucide-react'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function DashboardPage() {
  const stats = [
    {
      label: 'Today\'s Production',
      value: '42.5 kWh',
      change: '+12.3%',
      trend: 'up',
      icon: Sun,
    },
    {
      label: 'Current Power',
      value: '3.8 kW',
      change: '+5.2%',
      trend: 'up',
      icon: Zap,
    },
    {
      label: 'Battery Status',
      value: '85%',
      change: '-2.1%',
      trend: 'down',
      icon: Battery,
    },
    {
      label: 'Savings Today',
      value: '$18.50',
      change: '+8.7%',
      trend: 'up',
      icon: DollarSign,
    },
  ]

  const productionData = {
    labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: 'Production (kW)',
        data: [0.5, 2.8, 4.2, 3.9, 1.5, 0.2],
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Consumption (kW)',
        data: [1.2, 1.5, 2.1, 2.8, 3.2, 2.5],
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Energy (kWh)',
        data: [38, 45, 42, 48, 50, 55, 52],
        backgroundColor: '#FFD700',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#999' },
        grid: { color: '#2A2A2A' },
      },
      y: {
        ticks: { color: '#999' },
        grid: { color: '#2A2A2A' },
      },
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Monitor your solar energy system in real-time</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="solar-card">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-10 h-10 text-solar-yellow" />
              <span className={`flex items-center gap-1 text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {stat.change}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="solar-card">
          <h2 className="text-xl font-bold text-white mb-4">Today's Production vs Consumption</h2>
          <div className="h-64">
            <Line data={productionData} options={chartOptions} />
          </div>
        </div>

        <div className="solar-card">
          <h2 className="text-xl font-bold text-white mb-4">Weekly Production</h2>
          <div className="h-64">
            <Bar data={weeklyData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="solar-card">
          <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="text-green-500 font-semibold">● Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Panels</span>
              <span className="text-white">24/24 Active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Efficiency</span>
              <span className="text-white">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Inverter</span>
              <span className="text-green-500 font-semibold">Normal</span>
            </div>
          </div>
        </div>

        <div className="solar-card">
          <h3 className="text-lg font-bold text-white mb-4">Environmental Impact</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">CO₂ Saved Today</span>
              <span className="text-white">18.2 kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Trees Equivalent</span>
              <span className="text-white">0.85 trees</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total CO₂ Saved</span>
              <span className="text-white">2.4 tons</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Carbon Credits</span>
              <span className="text-solar-yellow font-semibold">48 credits</span>
            </div>
          </div>
        </div>

        <div className="solar-card">
          <h3 className="text-lg font-bold text-white mb-4">Financial Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Today's Savings</span>
              <span className="text-white">$18.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">This Month</span>
              <span className="text-white">$385.20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Savings</span>
              <span className="text-white">$4,652.80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ROI Progress</span>
              <span className="text-solar-yellow font-semibold">23%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Bell, Lock, Globe, Palette, Database, Shield, Download } from 'lucide-react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    production: true,
    alerts: true,
    reports: false,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your preferences and system configuration</p>
      </div>

      {/* Notifications */}
      <div className="solar-card">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-solar-yellow" size={24} />
          <h2 className="text-2xl font-bold text-white">Notifications</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
            { key: 'push', label: 'Push Notifications', desc: 'Get alerts on your devices' },
            { key: 'sms', label: 'SMS Notifications', desc: 'Text message alerts for critical issues' },
            { key: 'production', label: 'Production Alerts', desc: 'Daily production summaries' },
            { key: 'alerts', label: 'System Alerts', desc: 'Warnings and maintenance reminders' },
            { key: 'reports', label: 'Weekly Reports', desc: 'Comprehensive weekly analytics' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-solar-gray-light rounded-lg">
              <div>
                <p className="text-white font-semibold">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof notifications] }))}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  notifications[item.key as keyof typeof notifications] ? 'bg-solar-yellow' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                  notifications[item.key as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'
                }`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* System Configuration */}
      <div className="solar-card">
        <div className="flex items-center gap-3 mb-6">
          <Database className="text-solar-yellow" size={24} />
          <h2 className="text-2xl font-bold text-white">System Configuration</h2>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-solar-gray-light rounded-lg">
            <label htmlFor="battery-reserve" className="block text-white font-semibold mb-2">Battery Reserve Level</label>
            <p className="text-gray-400 text-sm mb-3">Minimum battery charge to maintain</p>
            <input
              id="battery-reserve" 
              type="range" 
              min="10" 
              max="50" 
              defaultValue="20"
              className="w-full h-2 bg-solar-gray-medium rounded-lg appearance-none cursor-pointer accent-solar-yellow"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>10%</span>
              <span>20%</span>
              <span>50%</span>
            </div>
          </div>

          <div className="p-4 bg-solar-gray-light rounded-lg">
            <label htmlFor="grid-export" className="block text-white font-semibold mb-2">Grid Export Limit</label>
            <p className="text-gray-400 text-sm mb-3">Maximum power to export to grid</p>
            <select id="grid-export" className="w-full bg-solar-gray-medium text-white px-4 py-2 rounded-lg border border-solar-gray-light focus:outline-none focus:ring-2 focus:ring-solar-yellow">
              <option>No Limit</option>
              <option>5 kW</option>
              <option>10 kW</option>
              <option>Do Not Export</option>
            </select>
          </div>

          <div className="p-4 bg-solar-gray-light rounded-lg">
            <label htmlFor="operating-mode" className="block text-white font-semibold mb-2">Operating Mode</label>
            <p className="text-gray-400 text-sm mb-3">How your system manages energy</p>
            <select id="operating-mode" className="w-full bg-solar-gray-medium text-white px-4 py-2 rounded-lg border border-solar-gray-light focus:outline-none focus:ring-2 focus:ring-solar-yellow">
              <option>Self-Consumption</option>
              <option>Time-of-Use Optimization</option>
              <option>Backup Priority</option>
              <option>Grid Support</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="solar-card">
        <div className="flex items-center gap-3 mb-6">
          <Palette className="text-solar-yellow" size={24} />
          <h2 className="text-2xl font-bold text-white">Appearance</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Dark (Yellow)', color: 'bg-solar-yellow', active: true },
            { name: 'Dark (Blue)', color: 'bg-blue-500', active: false },
            { name: 'Dark (Green)', color: 'bg-green-500', active: false },
            { name: 'Light Mode', color: 'bg-gray-200', active: false },
          ].map((theme) => (
            <button
              key={theme.name}
              className={`p-4 rounded-lg border-2 transition-all ${
                theme.active 
                  ? 'border-solar-yellow bg-solar-gray-light' 
                  : 'border-solar-gray-light bg-solar-gray-medium hover:border-solar-yellow'
              }`}
            >
              <div className={`w-12 h-12 ${theme.color} rounded-lg mx-auto mb-2`}></div>
              <p className="text-white text-sm text-center">{theme.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Language & Region */}
      <div className="solar-card">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="text-solar-yellow" size={24} />
          <h2 className="text-2xl font-bold text-white">Language & Region</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="language" className="block text-white font-semibold mb-2">Language</label>
            <select id="language" className="w-full bg-solar-gray-light text-white px-4 py-2 rounded-lg border border-solar-gray-medium focus:outline-none focus:ring-2 focus:ring-solar-yellow">
              <option>English (US)</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="timezone" className="block text-white font-semibold mb-2">Timezone</label>
            <select id="timezone" className="w-full bg-solar-gray-light text-white px-4 py-2 rounded-lg border border-solar-gray-medium focus:outline-none focus:ring-2 focus:ring-solar-yellow">
              <option>Pacific Time (PT)</option>
              <option>Mountain Time (MT)</option>
              <option>Central Time (CT)</option>
              <option>Eastern Time (ET)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="units" className="block text-white font-semibold mb-2">Units</label>
            <select id="units" className="w-full bg-solar-gray-light text-white px-4 py-2 rounded-lg border border-solar-gray-medium focus:outline-none focus:ring-2 focus:ring-solar-yellow">
              <option>Imperial (°F, mi)</option>
              <option>Metric (°C, km)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="currency" className="block text-white font-semibold mb-2">Currency</label>
            <select id="currency" className="w-full bg-solar-gray-light text-white px-4 py-2 rounded-lg border border-solar-gray-medium focus:outline-none focus:ring-2 focus:ring-solar-yellow">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>JPY (¥)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="solar-card">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-solar-yellow" size={24} />
          <h2 className="text-2xl font-bold text-white">Security & Privacy</h2>
        </div>
        
        <div className="space-y-4">
          <button className="w-full p-4 bg-solar-gray-light rounded-lg text-left hover:bg-solar-gray-medium transition-colors">
            <div className="flex items-center gap-3">
              <Lock className="text-solar-yellow" size={20} />
              <div>
                <p className="text-white font-semibold">Change Password</p>
                <p className="text-gray-400 text-sm">Last changed 3 months ago</p>
              </div>
            </div>
          </button>
          
          <button className="w-full p-4 bg-solar-gray-light rounded-lg text-left hover:bg-solar-gray-medium transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="text-solar-yellow" size={20} />
              <div>
                <p className="text-white font-semibold">Two-Factor Authentication</p>
                <p className="text-gray-400 text-sm">Add an extra layer of security</p>
              </div>
            </div>
          </button>
          
          <button className="w-full p-4 bg-solar-gray-light rounded-lg text-left hover:bg-solar-gray-medium transition-colors">
            <div className="flex items-center gap-3">
              <Download className="text-solar-yellow" size={20} />
              <div>
                <p className="text-white font-semibold">Download My Data</p>
                <p className="text-gray-400 text-sm">Export all your system data</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="btn-primary">Save Changes</button>
        <button className="btn-secondary">Reset to Defaults</button>
      </div>
    </div>
  )
}

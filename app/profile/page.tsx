'use client'

import { User, Mail, Phone, MapPin, Calendar, Award, Edit } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
        <p className="text-gray-400">Manage your account information and preferences</p>
      </div>

      {/* Profile Header */}
      <div className="solar-card">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-solar-yellow rounded-full flex items-center justify-center">
              <User size={64} className="text-solar-black" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">John Doe</h2>
                <p className="text-gray-400">Premium Member since 2023</p>
              </div>
              <button className="btn-primary flex items-center gap-2">
                <Edit size={18} /> Edit Profile
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="text-solar-yellow" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">john.doe@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-solar-yellow" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="text-solar-yellow" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="text-solar-yellow" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Member Since</p>
                  <p className="text-white">January 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-6">My Solar System</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400 mb-2">System Size</p>
            <p className="text-2xl font-bold text-white">8.5 kW</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Panel Count</p>
            <p className="text-2xl font-bold text-white">24 Panels</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Battery Capacity</p>
            <p className="text-2xl font-bold text-white">13.5 kWh</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Install Date</p>
            <p className="text-xl font-semibold text-white">March 15, 2023</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Warranty Expires</p>
            <p className="text-xl font-semibold text-white">March 15, 2048</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">System Status</p>
            <p className="text-xl font-semibold text-green-500">● Active</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Lifetime Production', value: '12,458 kWh', icon: '⚡' },
          { label: 'CO₂ Offset', value: '8.7 tons', icon: '🌱' },
          { label: 'Money Saved', value: '$4,652', icon: '💰' },
          { label: 'Trees Equivalent', value: '195 trees', icon: '🌳' },
        ].map((stat, index) => (
          <div key={index} className="solar-card text-center">
            <div className="text-4xl mb-3">{stat.icon}</div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { 
              title: 'Early Adopter', 
              desc: 'Joined YourSolar in first year',
              earned: true,
              icon: '🏆' 
            },
            { 
              title: 'Green Champion', 
              desc: 'Offset 5+ tons of CO₂',
              earned: true,
              icon: '🌟' 
            },
            { 
              title: 'Energy Saver', 
              desc: 'Saved $1000+ on electricity',
              earned: true,
              icon: '💡' 
            },
            { 
              title: 'Solar Master', 
              desc: 'Generate 10,000+ kWh',
              earned: true,
              icon: '☀️' 
            },
            { 
              title: 'Grid Hero', 
              desc: 'Export 1000+ kWh to grid',
              earned: false,
              icon: '🔋' 
            },
            { 
              title: 'Referral Pro', 
              desc: 'Refer 5 friends to YourSolar',
              earned: false,
              icon: '👥' 
            },
          ].map((achievement, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border ${
                achievement.earned 
                  ? 'bg-solar-gray-light border-solar-yellow' 
                  : 'bg-solar-gray-dark border-gray-700 opacity-50'
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
              <p className="text-gray-400 text-sm">{achievement.desc}</p>
              {achievement.earned && (
                <p className="text-solar-yellow text-xs mt-2 flex items-center gap-1">
                  <Award size={14} /> Earned
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="solar-card">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: 'Updated system settings', date: '2 hours ago' },
            { action: 'Viewed monthly report', date: '1 day ago' },
            { action: 'Contacted support', date: '3 days ago' },
            { action: 'Changed notification preferences', date: '1 week ago' },
          ].map((activity, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-solar-gray-light rounded-lg">
              <span className="text-white">{activity.action}</span>
              <span className="text-gray-400 text-sm">{activity.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

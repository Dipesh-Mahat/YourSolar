'use client'

import { useState } from 'react'
import { Home, DollarSign, TrendingUp, Battery, CheckCircle, Zap, Shield, Leaf, Sun, Calculator } from 'lucide-react'
import PublicNav from '@/components/PublicNav'

export default function ResidentialPage() {
  const [systemSize, setSystemSize] = useState(5)
  const [monthlyBill, setMonthlyBill] = useState(150)

  const calculateSavings = () => {
    const annualProduction = systemSize * 1200
    const annualSavings = (monthlyBill * 12) * 0.75
    const systemCost = systemSize * 2500
    const paybackPeriod = systemCost / annualSavings
    
    return {
      annualProduction: annualProduction.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1),
      co2Saved: (annualProduction * 0.0007).toFixed(1),
    }
  }

  const results = calculateSavings()

  return (
    <div className="min-h-screen">
      <PublicNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-solar-yellow/10 rounded-2xl mb-6">
          <Home className="w-10 h-10 text-solar-yellow" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Solar Solutions</h1>
        <p className="text-xl text-gray-300">Transform your home into a clean energy powerhouse. Save money, increase property value, and reduce your carbon footprint.</p>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: DollarSign, title: 'Save Up to 70%', desc: 'Dramatically reduce your monthly electricity bills' },
          { icon: TrendingUp, title: 'Boost Home Value', desc: 'Increase property value by 4-6% on average' },
          { icon: Battery, title: '24/7 Power', desc: 'Energy independence with battery backup' },
          { icon: Leaf, title: 'Go Green', desc: 'Reduce your carbon footprint significantly' },
        ].map((benefit) => (
          <div key={benefit.title} className="solar-card text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-solar-yellow/10 rounded-xl mb-4">
              <benefit.icon className="w-7 h-7 text-solar-yellow" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
            <p className="text-gray-400 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* ROI Calculator */}
      <div className="solar-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-solar-yellow/10 rounded-xl">
            <Calculator className="w-6 h-6 text-solar-yellow" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Solar Savings Calculator</h2>
            <p className="text-gray-400">Estimate your potential savings and ROI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">
                System Size: {systemSize} kW
              </label>
              <input
                type="range"
                min="3"
                max="15"
                step="0.5"
                value={systemSize}
                onChange={(e) => setSystemSize(parseFloat(e.target.value))}
                className="w-full h-2 bg-solar-gray-light rounded-lg appearance-none cursor-pointer accent-solar-yellow"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">
                Monthly Electric Bill: ${monthlyBill}
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                className="w-full h-2 bg-solar-gray-light rounded-lg appearance-none cursor-pointer accent-solar-yellow"
              />
            </div>
          </div>

          <div className="bg-solar-gray-light rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-solar-yellow mb-4">Your Savings</h3>
            <div className="flex justify-between">
              <span className="text-gray-300">Annual Production</span>
              <span className="text-white font-semibold">{results.annualProduction} kWh</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Annual Savings</span>
              <span className="text-white font-semibold">${results.annualSavings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">System Cost</span>
              <span className="text-white font-semibold">${results.systemCost}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Payback Period</span>
              <span className="text-white font-semibold">{results.paybackPeriod} years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CO₂ Saved/Year</span>
              <span className="text-white font-semibold">{results.co2Saved} tons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Premium solar panels (25-year warranty)',
            'Smart inverter with monitoring',
            'Battery storage options',
            'Professional installation',
            'Mobile app for monitoring',
            'Maintenance & support',
            'Federal tax credit eligible',
            'Net metering setup',
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="text-solar-yellow flex-shrink-0" size={20} />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="solar-card text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Go Solar?</h2>
        <p className="text-gray-300 mb-6">Get a free consultation and custom quote for your home</p>
        <button className="btn-primary">Schedule Free Consultation</button>
      </div>
      </div>
    </div>
  )
}

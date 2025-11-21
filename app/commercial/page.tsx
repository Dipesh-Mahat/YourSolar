'use client'

import { useState } from 'react'
import { Building2, TrendingUp, Shield, Zap, CheckCircle, BarChart } from 'lucide-react'

export default function CommercialPage() {
  const [businessSize, setBusinessSize] = useState(100)
  const [monthlyBill, setMonthlyBill] = useState(5000)

  const calculateROI = () => {
    const systemSize = businessSize * 0.5
    const annualProduction = systemSize * 1200
    const annualSavings = (monthlyBill * 12) * 0.7
    const systemCost = systemSize * 2200
    const paybackPeriod = systemCost / annualSavings
    const roi25Years = (annualSavings * 25) / systemCost * 100
    
    return {
      systemSize: systemSize.toFixed(0),
      annualProduction: annualProduction.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1),
      roi25Years: roi25Years.toFixed(0),
    }
  }

  const results = calculateROI()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Commercial Solar Solutions</h1>
        <p className="text-gray-400">Reduce operational costs and enhance sustainability</p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: TrendingUp, title: 'High ROI', desc: '300-500% over 25 years' },
          { icon: Shield, title: 'Tax Benefits', desc: 'Up to 30% federal credit' },
          { icon: Zap, title: 'Energy Independence', desc: 'Reduce grid dependency' },
          { icon: BarChart, title: 'Scalable', desc: '50 kW to 5 MW systems' },
        ].map((benefit, index) => (
          <div key={index} className="solar-card">
            <benefit.icon className="w-10 h-10 text-solar-yellow mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
            <p className="text-gray-400 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* ROI Calculator */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">Commercial ROI Calculator</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">
                Business Size: {businessSize} kW needed
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={businessSize}
                onChange={(e) => setBusinessSize(parseFloat(e.target.value))}
                className="w-full h-2 bg-solar-gray-light rounded-lg appearance-none cursor-pointer accent-solar-yellow"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">
                Monthly Electric Bill: ${monthlyBill}
              </label>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                className="w-full h-2 bg-solar-gray-light rounded-lg appearance-none cursor-pointer accent-solar-yellow"
              />
            </div>
          </div>

          <div className="bg-solar-gray-light rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-solar-yellow mb-4">Investment Analysis</h3>
            <div className="flex justify-between">
              <span className="text-gray-300">Recommended System</span>
              <span className="text-white font-semibold">{results.systemSize} kW</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Annual Production</span>
              <span className="text-white font-semibold">{results.annualProduction} kWh</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Annual Savings</span>
              <span className="text-white font-semibold">${results.annualSavings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Total Investment</span>
              <span className="text-white font-semibold">${results.systemCost}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Payback Period</span>
              <span className="text-white font-semibold">{results.paybackPeriod} years</span>
            </div>
            <div className="flex justify-between border-t border-solar-gray-medium pt-4">
              <span className="text-gray-300">25-Year ROI</span>
              <span className="text-solar-yellow font-bold text-xl">{results.roi25Years}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              industry: 'Manufacturing',
              features: ['High-power systems', 'Peak demand reduction', 'Process heat integration'],
            },
            {
              industry: 'Retail & Hospitality',
              features: ['Rooftop installations', 'Parking lot canopies', 'Brand enhancement'],
            },
            {
              industry: 'Agriculture',
              features: ['Irrigation pumping', 'Cold storage power', 'Agrivoltaics options'],
            },
          ].map((solution, index) => (
            <div key={index} className="bg-solar-gray-light rounded-lg p-6">
              <h3 className="text-xl font-bold text-solar-yellow mb-4">{solution.industry}</h3>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-solar-yellow flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">Enterprise Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Custom system design',
            'Energy storage integration',
            'Real-time monitoring & alerts',
            'Performance guarantees',
            'Dedicated account manager',
            'Preventive maintenance',
            'Remote diagnostics',
            'Compliance reporting',
            'Power purchase agreements (PPA)',
            'EV charging integration',
            'Demand response capabilities',
            'Carbon credit tracking',
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
        <h2 className="text-2xl font-bold text-white mb-4">Transform Your Business Energy</h2>
        <p className="text-gray-300 mb-6">Schedule a site assessment and receive a detailed ROI analysis</p>
        <button className="btn-primary">Request Enterprise Quote</button>
      </div>
    </div>
  )
}

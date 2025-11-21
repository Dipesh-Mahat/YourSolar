'use client'

import { Users, Globe, MapPin, CheckCircle, DollarSign, Shield, Leaf } from 'lucide-react'
import PublicNav from '@/components/PublicNav'

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <PublicNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-solar-yellow/10 rounded-2xl mb-6">
          <Globe className="w-10 h-10 text-solar-yellow" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Solar Programs</h1>
        <p className="text-xl text-gray-300">Join your neighbors in harnessing clean energy. Enjoy solar benefits without rooftop panels—perfect for renters, homeowners, and businesses.</p>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Users, title: 'No Installation', desc: 'Perfect for renters and apartment dwellers' },
          { icon: DollarSign, title: 'Save 10-15%', desc: 'Reduce your electricity bills immediately' },
          { icon: Shield, title: 'Flexible Plans', desc: 'Subscribe and cancel anytime' },
          { icon: Leaf, title: 'Local Impact', desc: 'Support clean energy in your community' },
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

      {/* How It Works */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">How Community Solar Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: 1, title: 'Subscribe', desc: 'Choose your solar share size' },
            { step: 2, title: 'Farm Generates', desc: 'Solar farm produces clean energy' },
            { step: 3, title: 'Get Credits', desc: 'Receive credits on your bill' },
            { step: 4, title: 'Save Money', desc: 'Pay less than standard rates' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-solar-yellow rounded-full flex items-center justify-center text-2xl font-bold text-solar-black mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Projects */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">Active Community Projects</h2>
        <div className="space-y-4">
          {[
            {
              name: 'Sunrise Valley Solar Farm',
              location: 'Portland, OR',
              capacity: '2.5 MW',
              subscribers: 450,
              availability: '12%',
            },
            {
              name: 'Green Meadows Community Solar',
              location: 'Austin, TX',
              capacity: '1.8 MW',
              subscribers: 320,
              availability: '25%',
            },
            {
              name: 'Coastal Clean Energy Project',
              location: 'San Diego, CA',
              capacity: '3.2 MW',
              subscribers: 580,
              availability: '8%',
            },
          ].map((project) => (
            <div key={project.name} className="bg-solar-gray-light rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  Number.parseInt(project.availability) > 15 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-orange-500/20 text-orange-500'
                }`}>
                  {project.availability} Available
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Capacity</p>
                  <p className="text-white font-semibold">{project.capacity}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Subscribers</p>
                  <p className="text-white font-semibold">{project.subscribers}</p>
                </div>
              </div>
              <button className="btn-primary w-full mt-4">Subscribe Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="solar-card">
        <h2 className="text-2xl font-bold text-white mb-6">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              size: '1 kW',
              price: '$15',
              savings: '$20-30',
              features: ['Perfect for apartments', 'No commitment', 'Cancel anytime'],
            },
            {
              name: 'Family',
              size: '3 kW',
              price: '$40',
              savings: '$60-90',
              features: ['Ideal for homes', 'Best value', 'Priority support'],
              popular: true,
            },
            {
              name: 'Premium',
              size: '5 kW',
              price: '$65',
              savings: '$100-150',
              features: ['Maximum savings', 'Multi-family homes', 'Dedicated manager'],
            },
          ].map((plan) => (
            <div key={plan.name} className={`bg-solar-gray-light rounded-lg p-6 ${
              plan.popular ? 'ring-2 ring-solar-yellow' : ''
            }`}>
              {plan.popular && (
                <span className="bg-solar-yellow text-solar-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">Solar Share: {plan.size}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-solar-yellow">{plan.price}</span>
                <span className="text-gray-400">/month</span>
                <p className="text-sm text-gray-400 mt-2">
                  Save {plan.savings}/month
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-solar-yellow" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="solar-card text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Join Your Community&apos;s Solar Future</h2>
        <p className="text-gray-300 mb-6">No installation, no maintenance, just clean energy savings</p>
        <button className="btn-primary">Find Projects Near You</button>
      </div>
      </div>
    </div>
  )
}

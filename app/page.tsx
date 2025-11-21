import Link from 'next/link'
import { ArrowRight, Sun, Battery, Zap, TrendingUp, Users, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Sun className="w-20 h-20 text-solar-yellow animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Power Your Future</span>
            <br />
            <span className="text-white">with Solar Energy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Advanced solar energy management platform for residential, commercial, and community solar solutions.
            Monitor, analyze, and optimize your clean energy production.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link href="#features" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Energy Generated', value: '1.2M kWh', icon: Zap },
            { label: 'Active Users', value: '10,000+', icon: Users },
            { label: 'CO₂ Saved', value: '500 Tons', icon: TrendingUp },
            { label: 'Uptime', value: '99.9%', icon: Shield },
          ].map((stat, index) => (
            <div key={index} className="solar-card text-center">
              <stat.icon className="w-10 h-10 text-solar-yellow mx-auto mb-4" />
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Solar Solutions</span> for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential',
                description: 'Perfect for homeowners looking to reduce energy bills and carbon footprint.',
                href: '/residential',
                icon: '🏠',
                features: ['5-10 kW Systems', 'Battery Storage', 'Smart Monitoring'],
              },
              {
                title: 'Commercial',
                description: 'Scalable solutions for businesses to achieve energy independence.',
                href: '/commercial',
                icon: '🏢',
                features: ['50-500 kW Systems', 'ROI Analysis', '25-Year Warranty'],
              },
              {
                title: 'Community',
                description: 'Shared solar programs for communities and neighborhoods.',
                href: '/community',
                icon: '🌍',
                features: ['Shared Benefits', 'Group Discounts', 'Community Impact'],
              },
            ].map((solution, index) => (
              <Link key={index} href={solution.href} className="solar-card-hover">
                <div className="text-6xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-solar-yellow mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <Zap size={16} className="text-solar-yellow" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-solar-yellow font-semibold">
                  Learn More <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-solar-gray-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Advanced Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Real-time Monitoring', desc: 'Track energy production and consumption live' },
              { icon: Battery, title: 'Battery Management', desc: 'Optimize storage and usage patterns' },
              { icon: TrendingUp, title: 'Analytics & Reports', desc: 'Detailed insights and forecasting' },
              { icon: Shield, title: 'Security First', desc: 'Enterprise-grade data protection' },
              { icon: Users, title: 'Multi-user Access', desc: 'Role-based permissions and sharing' },
              { icon: Sun, title: 'Weather Integration', desc: 'AI-powered production forecasts' },
            ].map((feature, index) => (
              <div key={index} className="solar-card">
                <feature.icon className="w-12 h-12 text-solar-yellow mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center solar-card">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already saving money and the planet with YourSolar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary">
              Start Free Trial
            </Link>
            <Link href="https://github.com/Dipesh-Mahat/YourSolar" className="btn-secondary">
              View on GitHub
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Open source under AGPL-3.0 • <Link href="/COMMERCIAL-LICENSE.md" className="text-solar-yellow hover:underline">Commercial licenses available</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

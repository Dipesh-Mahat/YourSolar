import Link from 'next/link'
import { ArrowRight, Sun, Battery, Zap, TrendingUp, Users, Shield } from 'lucide-react'
import PublicNav from '@/components/PublicNav'

export default function HomePage() {
  const stats = [
    { label: 'Total Energy Generated', value: '1.2M kWh', icon: Zap, id: 'stat-energy' },
    { label: 'Active Users', value: '10,000+', icon: Users, id: 'stat-users' },
    { label: 'CO₂ Saved', value: '500 Tons', icon: TrendingUp, id: 'stat-co2' },
    { label: 'Uptime', value: '99.9%', icon: Shield, id: 'stat-uptime' },
  ]

  const solutions = [
    {
      id: 'residential',
      title: 'Residential Solar',
      description: 'Perfect for homeowners looking to reduce energy bills and carbon footprint. Get energy independence with smart home integration.',
      href: '/residential',
      icon: '🏠',
      features: ['5-10 kW Systems', 'Battery Storage Options', 'Smart Home Integration', 'ROI Calculator'],
      savings: 'Save up to 70% on electricity bills',
    },
    {
      id: 'commercial',
      title: 'Commercial Solar',
      description: 'Scalable solutions for businesses to achieve energy independence and sustainability goals with maximum ROI.',
      href: '/commercial',
      icon: '🏢',
      features: ['50-500 kW Systems', 'Detailed ROI Analysis', '25-Year Warranty', 'Tax Incentives'],
      savings: 'Average payback in 4-6 years',
    },
    {
      id: 'community',
      title: 'Community Solar',
      description: 'Shared solar programs for communities and neighborhoods. Benefits without rooftop installation.',
      href: '/community',
      icon: '🌍',
      features: ['No Installation Needed', 'Shared Benefits', 'Flexible Subscriptions', 'Community Impact'],
      savings: 'Save 10-15% on energy costs',
    },
  ]

  const features = [
    { id: 'feat-monitor', icon: Zap, title: 'Real-time Monitoring', desc: 'Track energy production and consumption with live updates every minute' },
    { id: 'feat-battery', icon: Battery, title: 'Battery Management', desc: 'Optimize storage capacity, charge/discharge cycles, and usage patterns' },
    { id: 'feat-analytics', icon: TrendingUp, title: 'Analytics & Reports', desc: 'Detailed insights, trends analysis, and AI-powered forecasting' },
    { id: 'feat-security', icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security with 99.9% uptime guarantee' },
    { id: 'feat-users', icon: Users, title: 'Multi-user Support', desc: 'Role-based access control for families and teams' },
    { id: 'feat-weather', icon: Sun, title: 'Weather Integration', desc: 'Real-time weather data with 7-day production forecasts' },
  ]

  const steps = [
    { id: 'step-1', step: '01', title: 'Browse Solutions', desc: 'Explore residential, commercial, or community solar options', icon: '📋' },
    { id: 'step-2', step: '02', title: 'Calculate ROI', desc: 'Use our interactive calculators to estimate savings and payback period', icon: '💰' },
    { id: 'step-3', step: '03', title: 'Access Dashboard', desc: 'Login to view real-time monitoring and analytics (demo data)', icon: '📊' },
    { id: 'step-4', step: '04', title: 'Track Performance', desc: 'Monitor energy production, battery status, and weather forecasts', icon: '⚡' },
  ]

  return (
    <div className="min-h-screen">
      <PublicNav />

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
            Monitor, analyze, and optimize your clean energy production with real-time insights and AI-powered forecasting.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary flex items-center gap-2">
              Login to Dashboard <ArrowRight size={20} />
            </Link>
            <Link href="#solutions" className="btn-secondary">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-6 px-4 bg-solar-yellow/10 border-y border-solar-yellow/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-solar-yellow font-semibold">
            🎓 Demo Platform for Educational Purposes • Built with Next.js 14 & TypeScript • Open Source AGPL-3.0
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="solar-card text-center">
              <stat.icon className="w-10 h-10 text-solar-yellow mx-auto mb-4" />
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Solar Solutions</span> for Every Need
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you&apos;re a homeowner, business, or community, we have the perfect solar solution tailored to your energy needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link key={solution.id} href={solution.href} className="solar-card-hover group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-solar-yellow mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="bg-solar-yellow/10 rounded-lg p-3 mb-4">
                  <p className="text-solar-yellow font-semibold text-sm">{solution.savings}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="text-gray-400 flex items-center gap-2">
                      <Zap size={16} className="text-solar-yellow flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-solar-yellow font-semibold group-hover:gap-3 transition-all">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Platform Features</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive dashboard provides everything you need to monitor, manage, and maximize your solar energy investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="solar-card hover:border-solar-yellow/30 transition-all">
                <feature.icon className="w-12 h-12 text-solar-yellow mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-gradient">YourSolar</span> Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get started with solar energy in four simple steps. No technical knowledge required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.id} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-solar-yellow mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-solar-gray-dark">
        <div className="max-w-4xl mx-auto text-center solar-card border-solar-yellow/20">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Solar Energy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This is a fully functional demo platform showcasing solar energy management. Perfect for learning, presentations, and demonstrations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary">
              Try Dashboard Demo
            </Link>
            <Link href="https://github.com/Dipesh-Mahat/YourSolar" className="btn-secondary">
              View on GitHub
            </Link>
          </div>
          <div className="mt-8 p-4 bg-solar-yellow/10 rounded-lg">
            <p className="text-sm text-gray-400">
              <strong className="text-solar-yellow">Open Source:</strong> Free under AGPL-3.0 for non-commercial use
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong className="text-solar-yellow">Commercial License:</strong> Available for businesses and startups •{' '}
              <Link href="https://github.com/Dipesh-Mahat/YourSolar/blob/main/COMMERCIAL-LICENSE.md" className="text-solar-yellow hover:underline">
                View Pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-solar-gray-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-6 h-6 text-solar-yellow" />
                <span className="text-lg font-bold text-solar-yellow">YourSolar</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced solar energy management platform for everyone.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/residential" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    Residential Solar
                  </Link>
                </li>
                <li>
                  <Link href="/commercial" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    Commercial Solar
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    Community Solar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/dashboard" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Dipesh-Mahat/YourSolar" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Dipesh-Mahat/YourSolar/blob/main/COMMERCIAL-LICENSE.md" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/Dipesh-Mahat/YourSolar/blob/main/LICENSE" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    License (AGPL-3.0)
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Dipesh-Mahat/YourSolar" className="text-gray-400 hover:text-solar-yellow text-sm transition-colors">
                    GitHub Repository
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-solar-gray-light text-center">
            <p className="text-gray-500 text-sm">
              © 2025 YourSolar by Dipesh Mahat. Made in Kathmandu, Nepal 🇳🇵
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Demo platform for educational purposes • Open source under AGPL-3.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

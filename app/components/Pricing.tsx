import React from 'react'
import {
   Users, Zap, Check,Shield
} from 'lucide-react';
const Pricing = () => {
  return (
       <section className="py-32 px-6 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-purple-600/15 via-pink-600/20 to-purple-600/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Choose the right plan to meet your SEO needs and start optimizing
            today.
          </p>

          {/* Enhanced Billing Toggle */}
          <div className="inline-flex items-center gap-4 mb-16 p-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
            <span className="px-6 py-2 text-gray-400 transition-colors">
              Monthly
            </span>
            <div className="relative">
              <div className="w-12 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full ml-auto mr-0.5 transition-all shadow-sm"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-6 py-2 text-white font-medium">
                Billed yearly
              </span>
              <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full font-semibold">
                Save 20%
              </span>
            </div>
          </div>

          {/* Enhanced Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">$29</span>
                    <span className="text-lg text-gray-400">/mo</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Perfect for individuals getting started
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Keyword optimization",
                    "Automated meta tags",
                    "SEO monitoring",
                    "Monthly reports",
                    "Email support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all group-hover:scale-105">
                  Try for free
                </button>
              </div>
            </div>

            {/* Pro Plan - Popular */}
            <div className="group cursor-pointer relative">
              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-8 border border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 transform scale-105 h-full">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    POPULAR
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">$79</span>
                    <span className="text-lg text-gray-400">/mo</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Best for growing businesses
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Everything in Basic",
                    "Content suggestions",
                    "Link optimization",
                    "Competitor analysis",
                    "Priority support",
                    "Advanced reporting",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all group-hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Get started
                </button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Business
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">$149</span>
                    <span className="text-lg text-gray-400">/mo</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    For large teams and enterprises
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Everything in Pro",
                    "Multi-user access",
                    "API integration",
                    "White-label reports",
                    "Custom integrations",
                    "Dedicated support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all group-hover:scale-105">
                  Get started
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Footer */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm mb-6">
              All plans include a 7-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>SSL Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Pricing
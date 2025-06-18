import React from 'react'
import { 
BarChart3, Users, Zap, Star, 
 MessageSquare, 
  Target,  Brain, 
} from 'lucide-react';
const AiPower = () => {
      const platforms = [
    { name: 'Instagram', icon: '📸', users: '2B+' },
    { name: 'Twitter', icon: '𝕏', users: '450M+' },
    { name: 'LinkedIn', icon: '💼', users: '950M+' },
    { name: 'Facebook', icon: '📘', users: '3B+' },
    { name: 'TikTok', icon: '🎵', users: '1.7B+' },
    { name: 'YouTube', icon: '🎥', users: '2.7B+' },
  ];

  return (
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/15 to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Compact Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Harness the power of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                AI automation
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transform your workflow with intelligent tools that adapt to your
              needs
            </p>
          </div>

          {/* Organized 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Analytics Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 p-6 h-80">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        AI Analytics
                      </h3>
                      <p className="text-xs text-gray-400">
                        Real-time insights
                      </p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Mini Dashboard */}
                <div className="bg-black/40 rounded-xl p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">94.2%</div>
                      <div className="text-xs text-green-400">
                        +12% this week
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">847K</div>
                      <div className="text-xs text-blue-400">Monthly reach</div>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-12 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 48">
                      <defs>
                        <linearGradient
                          id="chartGradient1"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{
                              stopColor: "rgb(147, 51, 234)",
                              stopOpacity: 0.4,
                            }}
                          />
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(147, 51, 234)",
                              stopOpacity: 0,
                            }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,40 Q50,20 100,25 Q150,15 200,20 L200,48 L0,48 Z"
                        fill="url(#chartGradient1)"
                      />
                      <path
                        d="M0,40 Q50,20 100,25 Q150,15 200,20"
                        stroke="rgb(147, 51, 234)"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Advanced analytics powered by machine learning algorithms that
                  predict trends and optimize performance.
                </p>
              </div>
            </div>

            {/* Smart Automation Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 p-6 h-80">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Smart Automation
                      </h3>
                      <p className="text-xs text-gray-400">
                        One-click optimization
                      </p>
                    </div>
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                    AUTO
                  </span>
                </div>

                {/* Automation Flow */}
                <div className="mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-white">
                        Content Analysis
                      </span>
                      <div className="ml-auto text-green-400 text-xs">
                        ✓ Complete
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white">
                        SEO Optimization
                      </span>
                      <div className="ml-auto text-yellow-400 text-xs">
                        In Progress
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600/20">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">
                        Schedule Posting
                      </span>
                      <div className="ml-auto text-gray-500 text-xs">
                        Queued
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Automated workflows that handle complex tasks while you focus
                  on strategy and creativity.
                </p>
              </div>
            </div>

            {/* AI Content Generator Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-300 p-6 h-80">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Content Generator
                      </h3>
                      <p className="text-xs text-gray-400">
                        AI-powered writing
                      </p>
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    NEW
                  </span>
                </div>

                {/* Content Preview */}
                <div className="bg-black/40 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">
                      Generated Content
                    </span>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="h-2 bg-green-500/30 rounded-full w-full"></div>
                    <div className="h-2 bg-green-500/30 rounded-full w-4/5"></div>
                    <div className="h-2 bg-green-500/30 rounded-full w-3/4"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">SEO Score: 92%</span>
                    <span className="text-green-400">Readability: A+</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Generate high-quality content with AI that understands your
                  brand voice and audience preferences.
                </p>
              </div>
            </div>

            {/* Performance Tracking Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 p-6 h-80">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Goal Tracking
                      </h3>
                      <p className="text-xs text-gray-400">Smart objectives</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-yellow-400">Premium</span>
                  </div>
                </div>

                {/* Goals Progress */}
                <div className="mb-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white">
                          Monthly Growth
                        </span>
                        <span className="text-sm text-green-400">127%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white">
                          Engagement Rate
                        </span>
                        <span className="text-sm text-blue-400">89%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white">
                          Content Quality
                        </span>
                        <span className="text-sm text-purple-400">94%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Set intelligent goals and track progress with AI-driven
                  insights that adapt to your performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AiPower
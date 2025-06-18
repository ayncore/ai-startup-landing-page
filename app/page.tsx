'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, BarChart3, Users, Zap, ArrowRight, Check, Star, 
  TrendingUp, Shield, Play, MessageSquare, Heart, Share2, Eye, 
  Target, Settings, Activity, Sparkles, Bot, Brain, Bell
} from 'lucide-react';
import Efforts from './components/Efforts';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const platforms = [
    { name: 'Instagram', icon: '📸', users: '2B+' },
    { name: 'Twitter', icon: '𝕏', users: '450M+' },
    { name: 'LinkedIn', icon: '💼', users: '950M+' },
    { name: 'Facebook', icon: '📘', users: '3B+' },
    { name: 'TikTok', icon: '🎵', users: '1.7B+' },
    { name: 'YouTube', icon: '🎥', users: '2.7B+' },
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Scheduling',
      description: 'Smart algorithms predict optimal posting times for maximum engagement'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Track performance across all platforms with detailed insights'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Manage multiple accounts with role-based permissions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Bulk Scheduling',
      description: 'Schedule hundreds of posts at once with bulk upload'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded font-semibold">
                NEW
              </span>
              <span className="text-purple-200 text-sm">
                Latest integration just arrived
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">We schedule your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              post as you needed
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Smart scheduling, so your posts hit at the right time.
          </p>

          {/* CTA Button */}
          <button className="backdrop-blur-sm bg-gradient-to-r from-white/95 to-gray-100/95 text-black px-8 py-3 rounded-xl font-semibold hover:from-white hover:to-gray-100 transition-all transform hover:scale-105 shadow-lg mb-16">
            Start for free
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

          <div className="relative backdrop-blur-xl bg-gradient-to-b from-gray-900/90 to-black/90 rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            {/* Enhanced Browser Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 backdrop-blur-sm bg-black/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="ml-4 flex items-center gap-2 bg-black/40 rounded-lg px-3 py-1">
                  <div className="w-3 h-3 text-green-400">🔒</div>
                  <span className="text-xs text-gray-400">
                    app.aikit.com/dashboard
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Live</span>
              </div>
            </div>

            <div className="flex h-[600px]">
              {/* Enhanced Sidebar */}
              <div className="w-72 backdrop-blur-sm bg-black/40 border-r border-white/10 p-6">
                {/* User Profile Section */}
                <div className="flex items-center gap-3 mb-8 p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">AI</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">
                      AI Dashboard
                    </div>
                    <div className="text-gray-400 text-xs">Pro Plan</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 p-3 backdrop-blur-sm bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl border border-purple-500/30">
                    <BarChart3 className="w-4 h-4 text-purple-300" />
                    <span className="text-sm text-white font-medium">
                      Overview
                    </span>
                    <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>

                  <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                    <Activity className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">Analytics</span>
                    <div className="ml-auto text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      12
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                    <Brain className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">AI Insights</span>
                    <div className="ml-auto">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                    <Target className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">Goals & KPIs</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                    <MessageSquare className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">Content Hub</span>
                    <div className="ml-auto w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>

                  <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                    <Shield className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">Security</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                    <Zap className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">Automation</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                  <div className="text-white text-sm font-medium mb-3">
                    Quick Actions
                  </div>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-xs">
                      Generate AI Report
                    </button>
                    <button className="w-full text-left p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-xs">
                      Export Data
                    </button>
                    <button className="w-full text-left p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-xs">
                      Schedule Review
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Main Content */}
              <div className="flex-1 p-8 backdrop-blur-sm bg-gradient-to-br from-black/20 to-purple-950/10">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Dashboard Overview
                    </h2>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>All systems operational</span>
                      </div>
                      <div className="text-gray-500">•</div>
                      <span className="text-gray-400">
                        Last updated: 2 min ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 backdrop-blur-sm bg-black/40 rounded-xl px-4 py-2 border border-white/10">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">
                        Last 30 days
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <button className="p-2 backdrop-blur-sm bg-black/40 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 backdrop-blur-sm bg-purple-600/20 rounded-xl px-4 py-2 border border-purple-500/30 hover:bg-purple-600/30 transition-colors">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-300 font-medium">
                        AI Analyze
                      </span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                  {/* Enhanced Visibility Card */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400 text-sm font-medium">
                          Visibility Score
                        </span>
                      </div>
                      <button className="text-gray-500 hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      94.2%
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-green-400 text-sm font-semibold">
                        +12.4%
                      </div>
                      <span className="text-gray-500 text-xs">
                        vs last month
                      </span>
                    </div>

                    {/* Enhanced Mini Chart */}
                    <div className="h-12 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 40">
                        <defs>
                          <linearGradient
                            id="visibilityGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              style={{
                                stopColor: "rgb(147, 51, 234)",
                                stopOpacity: 0.8,
                              }}
                            />
                            <stop
                              offset="100%"
                              style={{
                                stopColor: "rgb(236, 72, 153)",
                                stopOpacity: 0.8,
                              }}
                            />
                          </linearGradient>
                          <linearGradient
                            id="visibilityArea"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{
                                stopColor: "rgb(147, 51, 234)",
                                stopOpacity: 0.2,
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
                          d="M5,35 Q25,25 45,28 Q65,22 85,25 Q105,18 125,20 Q145,15 165,18 Q185,12 195,15 L195,40 L5,40 Z"
                          fill="url(#visibilityArea)"
                        />
                        <path
                          d="M5,35 Q25,25 45,28 Q65,22 85,25 Q105,18 125,20 Q145,15 165,18 Q185,12 195,15"
                          stroke="url(#visibilityGradient)"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Enhanced Traffic Card */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 text-sm font-medium">
                          Monthly Traffic
                        </span>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      847K
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-green-400 text-sm font-semibold">
                        +28.5%
                      </div>
                      <span className="text-gray-500 text-xs">
                        unique visitors
                      </span>
                    </div>

                    <div className="h-12 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 40">
                        <defs>
                          <linearGradient
                            id="trafficGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{
                                stopColor: "rgb(34, 197, 94)",
                                stopOpacity: 0.3,
                              }}
                            />
                            <stop
                              offset="100%"
                              style={{
                                stopColor: "rgb(34, 197, 94)",
                                stopOpacity: 0,
                              }}
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M5,30 Q30,20 50,25 Q80,15 110,18 Q140,12 170,15 Q185,10 195,12 L195,40 L5,40 Z"
                          fill="url(#trafficGradient)"
                        />
                        <path
                          d="M5,30 Q30,20 50,25 Q80,15 110,18 Q140,12 170,15 Q185,10 195,12"
                          stroke="rgb(34, 197, 94)"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Enhanced Engagement Card */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-400 text-sm font-medium">
                          Engagement
                        </span>
                      </div>
                      <div className="text-xs bg-pink-600/20 text-pink-300 px-2 py-1 rounded-full">
                        High
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      73.2%
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-pink-400 text-sm font-semibold">
                        +15.7%
                      </div>
                      <span className="text-gray-500 text-xs">
                        avg. session
                      </span>
                    </div>

                    <div className="flex items-center gap-1 h-12">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-pink-600/30 to-pink-400/50 rounded-sm"
                          style={{ height: `${Math.random() * 80 + 20}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Conversion Card */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400 text-sm font-medium">
                          Conversions
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-yellow-400">Goal</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      156
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-yellow-400 text-sm font-semibold">
                        +89.2%
                      </div>
                      <span className="text-gray-500 text-xs">this month</span>
                    </div>

                    <div className="flex items-center gap-2 h-12">
                      <div className="flex-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">78%</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* AI Insights Panel */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-400" />
                        <h3 className="text-lg font-semibold text-white">
                          AI Insights
                        </h3>
                      </div>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                        Live
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-green-300 text-sm font-medium">
                            Performance Boost Detected
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            Your content engagement increased by 45% after
                            implementing AI suggestions.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-blue-300 text-sm font-medium">
                            Optimization Opportunity
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            Consider posting during 2-4 PM for 23% higher
                            engagement rates.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-purple-300 text-sm font-medium">
                            Trend Alert
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            AI-powered content is trending 67% higher in your
                            niche this week.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-white">
                        Quick Stats
                      </h3>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">
                              Active Users
                            </div>
                            <div className="text-gray-400 text-xs">
                              Currently online
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">2,847</div>
                          <div className="text-green-400 text-xs">+12%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Share2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">
                              Social Shares
                            </div>
                            <div className="text-gray-400 text-xs">
                              This week
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">18.2K</div>
                          <div className="text-green-400 text-xs">+34%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">
                              Avg. Session
                            </div>
                            <div className="text-gray-400 text-xs">
                              Duration
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">4:32</div>
                          <div className="text-green-400 text-xs">+18%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-12 text-lg">
            Trusted by the world's most innovative teams
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { name: "Acme Corp", icon: "▷" },
              { name: "PULSE", icon: "" },
              { name: "Quantum", icon: "✦" },
              { name: "Echo Valley", icon: "✕" },
              { name: "Outside", icon: "" },
              { name: "APEX", icon: "✦" },
              { name: "Celestial", icon: "✱" },
              { name: "2TWICE", icon: "" },
            ].map((company, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-purple-500/20 transition-all group"
              >
                <div className="flex items-center justify-center h-16">
                  {company.icon && (
                    <span className="text-white text-2xl mr-2 group-hover:text-purple-400 transition-colors">
                      {company.icon}
                    </span>
                  )}
                  <span className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevate Your Efforts Section */}
    
<Efforts/>
      {/* AI Power Section */}
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

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful features for social media success
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage and grow your social media presence
              effectively
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* AI Scheduling */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 p-6 h-48">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      AI Scheduling
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Smart algorithms predict optimal posting times for maximum
                  engagement
                </p>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 p-6 h-48">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Analytics Dashboard
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Track performance across all platforms with detailed insights
                </p>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-300 p-6 h-48">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Team Collaboration
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Manage multiple accounts with role-based permissions
                </p>
              </div>
            </div>

            {/* Bulk Scheduling */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 p-6 h-48">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Bulk Scheduling
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Schedule hundreds of posts at once with bulk upload
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-24 px-6 relative ">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect all your social platforms
          </h2>
          <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
            Manage everything from one unified dashboard
          </p>

          {/* Platform Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {/* Instagram */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-pink-500/40 transition-all duration-300 p-6 h-32 flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">📸</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-sm">
                    Instagram
                  </div>
                  <div className="text-gray-400 text-xs mt-1">2B+</div>
                </div>
              </div>
            </div>

            {/* Twitter */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 p-6 h-32 flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">𝕏</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-sm">Twitter</div>
                  <div className="text-gray-400 text-xs mt-1">450M+</div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            {/* <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-blue-600/40 transition-all duration-300 p-6 h-32 flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">💼</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-sm">LinkedIn</div>
                  <div className="text-gray-400 text-xs mt-1">950M+</div>
                </div>
              </div>
            </div> */}

            {/* Facebook */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 p-6 h-32 flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">📘</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-sm">Facebook</div>
                  <div className="text-gray-400 text-xs mt-1">3B+</div>
                </div>
              </div>
            </div>

            {/* TikTok */}
            {/* <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-pink-500/40 transition-all duration-300 p-6 h-32 flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">🎵</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-sm">TikTok</div>
                  <div className="text-gray-400 text-xs mt-1">1.7B+</div>
                </div>
              </div>
            </div> */}

            {/* YouTube */}
            {/* <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-300 p-6 h-32 flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">🎥</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-sm">YouTube</div>
                  <div className="text-gray-400 text-xs mt-1">2.7B+</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
    </>
  );
};

export default HomePage;
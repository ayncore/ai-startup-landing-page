import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  MessageSquare,
  Heart,
  Share2,
  Eye,
  Target,
  Settings,
  Activity,
  Sparkles,
  Brain,
  ChevronDown,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react";

const DashboardLayout = () => {
  const [heights, setHeights] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Generate heights only on client
    const randomHeights = Array.from(
      { length: 12 },
      () => Math.random() * 80 + 20
    );
    setHeights(randomHeights);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto">
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
            <div className="ml-4 flex items-center gap-2 justify-center bg-black/40 rounded-lg px-3 py-1">
              <div className="w-3 h-3 text-green-400">🔒</div>
              <span className="text-xs text-gray-400">ayncore.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-20 left-4 z-50 p-2 backdrop-blur-sm bg-black/40 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Enhanced Sidebar */}
          <div
            className={`w-full lg:w-72 backdrop-blur-sm bg-black/40 border-r border-white/10 p-4 lg:p-6 transition-transform duration-300 ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            } fixed lg:relative inset-y-0 left-0 z-40 lg:z-auto`}
          >
            {/* User Profile Section */}
            <div className="flex items-center gap-3 mb-6 lg:mb-8 p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20">
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
                <span className="text-sm text-white font-medium">Overview</span>
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
            <div className="mt-6 lg:mt-8 p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
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
          <div className="flex-1 p-4 lg:p-8 backdrop-blur-sm bg-gradient-to-br from-black/20 to-purple-950/10">
            {/* Enhanced Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 gap-4">
              <div className="mt-8 lg:mt-0">
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  Dashboard Overview
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>All systems operational</span>
                  </div>
                  <div className="text-gray-500 hidden sm:block">•</div>
                  <span className="text-gray-400">Last updated: 2 min ago</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-black/40 rounded-xl px-4 py-2 border border-white/10">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Last 30 days</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
                <div className="flex gap-2">
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
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
              {/* Enhanced Visibility Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-sm font-medium">
                      Visibility Score
                    </span>
                  </div>
                  <button className="text-gray-500 hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  94.2%
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-green-400 text-sm font-semibold">
                    +12.4%
                  </div>
                  <span className="text-gray-500 text-xs">vs last month</span>
                </div>

                {/* Simple gradient bar instead of SVG */}
                <div className="h-8 lg:h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-lg animate-pulse"></div>
                </div>
              </div>

              {/* Enhanced Traffic Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400 text-sm font-medium">
                      Monthly Traffic
                    </span>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  847K
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-green-400 text-sm font-semibold">
                    +28.5%
                  </div>
                  <span className="text-gray-500 text-xs">unique visitors</span>
                </div>

                <div className="h-8 lg:h-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-lg animate-pulse"></div>
                </div>
              </div>

              {/* Enhanced Engagement Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
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
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  73.2%
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-pink-400 text-sm font-semibold">
                    +15.7%
                  </div>
                  <span className="text-gray-500 text-xs">avg. session</span>
                </div>

                <div className="flex items-center gap-1 h-8 lg:h-12">
                  {heights.map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-pink-600/30 to-pink-400/50 rounded-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Conversion Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer">
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
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  156
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-yellow-400 text-sm font-semibold">
                    +89.2%
                  </div>
                  <span className="text-gray-500 text-xs">this month</span>
                </div>

                <div className="flex items-center gap-2 h-8 lg:h-12">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* AI Insights Panel */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 lg:p-6 border border-white/10">
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
                        Consider posting during 2-4 PM for 23% higher engagement
                        rates.
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
                        AI-powered content is trending 67% higher in your niche
                        this week.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 lg:p-6 border border-white/10">
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
                        <div className="text-gray-400 text-xs">This week</div>
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
                        <div className="text-gray-400 text-xs">Duration</div>
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

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;

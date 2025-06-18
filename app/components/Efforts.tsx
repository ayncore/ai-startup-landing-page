import React from "react";

import {
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Shield,
  MessageSquare,
  Target,
  Settings,
  Brain,
  Bell,
} from "lucide-react";
const Efforts = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Scheduling",
      description:
        "Smart algorithms predict optimal posting times for maximum engagement",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description:
        "Track performance across all platforms with detailed insights",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Manage multiple accounts with role-based permissions",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Bulk Scheduling",
      description: "Schedule hundreds of posts at once with bulk upload",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left Side - Enhanced Headline */}
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Elevate your social media efforts.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Revolutionize your digital presence with AI-driven tools crafted
              for modern marketers and content creators.
            </p>
          </div>

          {/* Right Side - Enhanced Features Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User-friendly dashboard */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/30 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400/50 transition-all duration-300">
                    <BarChart3 className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
                      Intuitive Dashboard
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Effortlessly perform comprehensive social media audits and
                      optimizations with a single click. Enjoy a streamlined
                      interface crafted for maximum productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual reports */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-400/50 transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      Comprehensive Visual Reports
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Obtain clear insights into your website’s performance
                      through beautiful charts and graphs, making data analysis
                      straightforward and engaging.
                    </p>
                  </div>
                </div>
              </div>

              {/* Smart Keyword Generator */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                    <Brain className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-100 transition-colors">
                        Smart Keyword Generator
                      </h3>
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide">
                        NEW
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Utilize AI-driven keyword suggestions to pinpoint the best
                      targets. Save countless hours of manual research with
                      automated recommendations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content evaluation */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/30 border border-green-500/30 flex items-center justify-center group-hover:border-green-400/50 transition-all duration-300">
                    <MessageSquare className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-100 transition-colors">
                      Content Evaluation Made Easy
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Receive immediate feedback to enhance your content
                      strategy. Make simple adjustments for instant, significant
                      improvements.
                    </p>
                  </div>
                </div>
              </div>

              {/* SEO goal setting */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/30 border border-orange-500/30 flex items-center justify-center group-hover:border-orange-400/50 transition-all duration-300">
                    <Target className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-100 transition-colors">
                      SEO Goal Guidance
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Establish and reach your SEO goals with guided support.
                      Simplify strategic planning to ensure it is both effective
                      and hassle-free.
                    </p>
                  </div>
                </div>
              </div>

              {/* Automated alerts */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/30 border border-pink-500/30 flex items-center justify-center group-hover:border-pink-400/50 transition-all duration-300">
                    <Bell className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-100 transition-colors">
                      Automated Alerts
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Remain updated on your SEO status with instant
                      notifications and quick solutions. Address issues
                      proactively before they affect performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link Optimization Wizard */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 border border-yellow-500/30 flex items-center justify-center group-hover:border-yellow-400/50 transition-all duration-300">
                    <Zap className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-100 transition-colors">
                      Link Optimization Wizard
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Guides you through the steps of creating and managing
                      links. Automated strategies for link building that are
                      effective.
                    </p>
                  </div>
                </div>
              </div>

              {/* One-click optimization */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 border border-indigo-500/30 flex items-center justify-center group-hover:border-indigo-400/50 transition-all duration-300">
                    <Settings className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-100 transition-colors">
                      One-click optimization
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Execute intricate SEO audits and optimizations with just
                      one click. Robust automation readily available to you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Competitor reports */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/30 border border-red-500/30 flex items-center justify-center group-hover:border-red-400/50 transition-all duration-300">
                    <Shield className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-100 transition-colors">
                      Competitor reports
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Delivers insights into the keyword strategies and rankings
                      of competitors. Maintain an advantage over your
                      competition with comprehensive analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Efforts;

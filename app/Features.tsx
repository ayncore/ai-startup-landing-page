import React from 'react'
import {
    BarChart3, Users, Zap,Brain
} from 'lucide-react';
const Features = () => {
    return (
        <section className="py-24 px-6 relative">
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

    )
}

export default Features
'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart3, Users, Zap, Brain,
} from 'lucide-react';
import Efforts from './components/Efforts';
import AiPower from './components/AiPower';
import Features from './Features';
import Pricing from './components/Pricing';
import Social from './components/Social';
import DashboardLayout from './components/DashboardLayout';
import Contact from './components/Contact';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



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
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/60 to-pink-400/60 border border-purple-500/40 rounded-full px-4 py-2 flex items-center gap-2">

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
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Smart scheduling, so your posts hit at the right time.
          </p>

          {/* CTA Button */}
          <button className="backdrop-blur-sm bg-gradient-to-r from-white/95 to-gray-100/95 text-black px-8 py-3 rounded-xl font-semibold hover:from-white hover:to-gray-100 transition-all transform hover:scale-105 shadow-lg mb-16">
            Start for free
          </button>
        </div>

        {/* Dashboard Preview */}
        <DashboardLayout />
      </div>

      {/* Trusted Companies Section */}
      {/* <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white mb-12 text-lg">
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
      </section> */}

      {/* Elevate Your Efforts Section */}

      <Efforts />
      {/* AI Power Section */}

      <Contact/>
      <AiPower />
      {/* Features Section */}
      <Features />
      {/* Platform Support */}

      <Social />
      {/* Pricing Section */}
      <Pricing />
    </>
  );
};

export default HomePage;
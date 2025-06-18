import React from 'react'

const Social = () => {
  return (
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
  )
}

export default Social
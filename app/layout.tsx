import type { Metadata } from "next";
import { Orbitron, Monoton } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbito",
  weight: ["400", "500", "700"],
});
const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

export const metadata: Metadata = {
  title: "SocialSync - AI-Powered Social Media Scheduling",
  description: "Boost your social media engagement with AI-powered scheduling. Manage all your platforms from one dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${monoton.variable} antialiased min-h-screen bg-black text-white`}
      >
        {/* Purple Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none"></div>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-purple-600/20 via-purple-800/10 to-transparent blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-pink-600/15 via-purple-700/10 to-transparent blur-3xl pointer-events-none"></div>
        
        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navigation */}
          {/* <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-lg font-medium text-white">AI Startup Website Kit</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 text-gray-300 text-sm">
                <div className="relative group">
                  <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                    Features
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <span className="cursor-pointer hover:text-white transition-colors">Developers</span>
                <div className="relative group">
                  <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                    Company
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <span className="cursor-pointer hover:text-white transition-colors">Blog</span>
                <span className="cursor-pointer hover:text-white transition-colors">Changelog</span>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium transition-colors text-white">
                Join waitlist
              </button>
            </div>
          </nav> */}
          <Navbar/>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
       <Footer/>
        </div>
      </body>
    </html>
  );
}
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
  description:
    "Boost your social media engagement with AI-powered scheduling. Manage all your platforms from one dashboard.",
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
        <div className="relative z-10 min-h-screen flex flex-col" id="home">
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

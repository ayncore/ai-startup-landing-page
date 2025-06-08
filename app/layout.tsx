import { Geist, Geist_Mono, Orbitron, Monoton } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbito",
  weight: ["400", "500", "700"], // ✅ add this line!
});
const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

export const metadata: Metadata = {
  title: "AI Agency",
  description: "Welcome to our AI Based Agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${monoton.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

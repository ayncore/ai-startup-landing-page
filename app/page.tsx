"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import AnimatedBulletText from "./components/BulletAnimation";
import WorkSection from "./sections/WorkSection";
import Footer from "./sections/Footer";
import Whyus from "./sections/whyus";
import Pricing from "./sections/Pricing";

export default function Home() {
  return (
    <main className=" bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Head>
        <title>AI Startup</title>
        <meta name="description" content="Next-gen AI tools for modern teams" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Empower Your Workflow With AI
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Build faster, smarter, and more creative products using our powerful
            AI platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {["AI Chat", "Smart Search", "Real-time Insights"].map(
            (feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, doloremque.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Demo Section */}
      <WorkSection />

      {/* CTA Section */}
      <Whyus />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}

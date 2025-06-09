import React from "react";

const Whyus = () => {
  return (
    <section className=" min-h-screen  bg-gray-100 dark:bg-gray-900">
      <div className="wrapper-class-text px-14 py-20">
        <div className="flex  items-center">
          <div className="border border-all border-white rounded-4xl p-3">
            <h1>Why Choose Us</h1>
          </div>
        </div>
        <div className="subheding mt-4">
          <p className="text-gray-600 text-6xl dark:text-gray-300 mt-4">
            Why <span className="text-[#D73434]"> Postpilot </span> is right
            choice for you.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 p-4 mt-4 ">
          {/* Top Left Block */}
          <div className=" bg-[#3D5A80] text-white rounded-tl-xl p-6 col-span-1 row-span-1">
            <h2 className="text-lg font-bold mb-2">
              🚀 Save Time, Accelerate Growth
            </h2>
            <p className="text-sm">
              Focus on creating exceptional content — let us handle the
              scheduling. With our intuitive platform, you can plan weeks' worth
              of posts in mere minutes.
            </p>
          </div>

          {/* Top Middle Block */}
          <div className=" bg-[#3D5A80] text-white  p-6 col-span-1 row-span-1">
            <h2 className="text-lg font-bold mb-2">
              🔗 Comprehensive Social Management
            </h2>
            <p className="text-sm">
              Manage all your platforms seamlessly from a single dashboard.
              Schedule, analyze, and optimize your posts without juggling
              multiple tools.
            </p>
          </div>

          {/* Tall Right Block (spans both rows) */}
          <div className=" bg-[#3D5A80] text-white rounded-tr-2xl rounded-br-xl p-6 col-span-1 row-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2">
                🛡️ Dependable, Secure & Always Available
              </h2>
              <p className="text-sm">
                Your content is safe with us. With secure backups and a 99.9%
                uptime, you can count on consistent reliability.
              </p>
            </div>
          </div>

          {/* Bottom Left Block */}
          <div className=" bg-[#3D5A80] text-white rounded-bl-xl  p-6 col-span-1 row-span-1">
            <h2 className="text-lg font-bold mb-2">
              📊 Intelligent Analytics, Tangible Outcomes
            </h2>
            <p className="text-sm">
              Track performance with clear, actionable insights. Post smarter
              and grow your audience effectively.
            </p>
          </div>

          {/* Bottom Middle Block */}
          <div className=" bg-[#3D5A80] text-white  p-6 col-span-1 row-span-1">
            <h2 className="text-lg font-bold mb-2">👥 Designed for Everyone</h2>
            <p className="text-sm">
              Whether you’re a solo creator, a thriving brand, or a dynamic
              agency, our platform adapts to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;

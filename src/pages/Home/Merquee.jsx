// src/components/home/Marquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const Merquee = () => {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#f0f5fc] via-[#e6f0fa] to-[#f0f5fc] py-5 relative border-y border-blue-100/80">
      {/* Pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-5"></div>
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#f0f5fc] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f0f5fc] to-transparent z-10 pointer-events-none"></div>

      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        pauseOnClick={true}
        autoFill={true}
        loop={0}
      >
        {[...Array(6)].map((_, outerIndex) => (
          <React.Fragment key={outerIndex}>
            <span className="mx-6 inline-flex items-center gap-3 whitespace-nowrap">
              <span className="text-[#d79b20] text-2xl">◆</span>
              <span className="text-[#0a1a52] text-xl md:text-2xl font-black tracking-wider hover:text-blue-700 transition-colors duration-300">
                FORGING INDUSTRIAL RESILIENCE WORLDWIDE
              </span>
              <span className="text-[#d79b20] text-2xl">◆</span>
              <span className="w-px h-8 bg-[#d79b20]/40 mx-4"></span>
            </span>
          </React.Fragment>
        ))}
      </Marquee>
    </section>
  );
};

export default Merquee;

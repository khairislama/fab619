"use client";

import { useState } from "react";
import Image from "next/image";

// Sample logos data - replace with your actual logos
const LOGOS = Array(18)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `Company ${i + 1}`,
    src: `/images/placeholder-1280x720.webp`,
  }));

export default function LogoMarquee() {
  // Split logos into 3 rows of 6
  const row1 = LOGOS.slice(0, 6);
  const row2 = LOGOS.slice(6, 12);
  const row3 = LOGOS.slice(12, 18);

  const [isHovering, setIsHovering] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gray-50">
      {/* Animated Rows - Background Overlay */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Section - Text Content (35-40% width) */}
        <div className="lg:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by industry leaders
          </h2>
          <p className="text-xl font-medium text-gray-600 mb-4">
            Join hundreds of innovative companies
          </p>
          <p className="text-gray-700">
            Our platform is the preferred choice for{" "}
            <span className="font-semibold">startups</span> and{" "}
            <span className="font-bold">enterprise businesses</span> looking to
            scale their operations with cutting-edge technology.
          </p>
        </div>

        {/* Right Section - Logo Grid (60-65% width) */}
        <div className="lg:w-3/5 space-y-12">
          {/* Row 1 - RTL Animation */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(0)}
            onMouseLeave={() => setIsHovering(null)}
          >
            <div
              className={`flex space-x-6 animate-marquee-rtl ${isHovering === 0 ? "animation-paused" : ""}`}
            >
              {[...row1, ...row1].map((logo, index) => (
                <div
                  key={`row1-${logo.id}-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - LTR Animation (Indented) */}
          <div
            className="relative ml-32"
            onMouseEnter={() => setIsHovering(1)}
            onMouseLeave={() => setIsHovering(null)}
          >
            <div
              className={`flex space-x-6 animate-marquee-ltr animation-delay-100 ${isHovering === 1 ? "animation-paused" : ""} animate-slower`}
            >
              {[...row2, ...row2].map((logo, index) => (
                <div
                  key={`row2-${logo.id}-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - RTL Animation (Starts earlier) */}
          <div
            className="relative ml-12"
            onMouseEnter={() => setIsHovering(2)}
            onMouseLeave={() => setIsHovering(null)}
          >
            <div
              className={`flex space-x-6 animate-marquee-rtl animation-delay-200 ${isHovering === 2 ? "animation-paused" : ""}`}
            >
              {[...row3, ...row3].map((logo, index) => (
                <div
                  key={`row3-${logo.id}-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

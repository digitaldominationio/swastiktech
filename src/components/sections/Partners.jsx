import React from "react"
import Container from "../layout/Container"

import logo1 from "../../assets/images/hero/download.png"
import logo2 from "../../assets/images/hero/download2.png"
import logo3 from "../../assets/images/hero/download4.png"
import logo4 from "../../assets/images/hero/download1.png"

export default function Partners() {
  const logos = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4] // duplicated for smooth loop

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 overflow-hidden">
      <Container>
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-tight">
          Our <span className="text-sky-600">Trusted Partners</span>
        </h2>

        {/* Infinite Scroll Section */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-24 items-center">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-20 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="object-contain w-full h-full  transition-all duration-500 drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Subtle Floating Animation Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_107%,#cce7ff_0%,#ffffff_90%)] opacity-40"></div>
    </section>
  )
}

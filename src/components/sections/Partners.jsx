import React from "react"
import Container from "../layout/Container"

import logo1 from "../../assets/images/hero/Acer.png"
import logo2 from "../../assets/images/hero/APC.png"
import logo3 from "../../assets/images/hero/Autodesk.jpg"
import logo4 from "../../assets/images/hero/Cambium.png"
import logo5 from "../../assets/images/hero/Cisco.png"
import logo6 from "../../assets/images/hero/CommScope.png"
import logo7 from "../../assets/images/hero/CPPlus.png"
import logo8 from "../../assets/images/hero/DELTA.png"
import logo9 from "../../assets/images/hero/DLink.png"
import logo10 from "../../assets/images/hero/Exide.png"
import logo11 from "../../assets/images/hero/Hikvision.png"
import logo12 from "../../assets/images/hero/HP.png"
import logo13 from "../../assets/images/hero/HPE.png"
import logo14 from "../../assets/images/hero/juniper.png"
import logo15 from "../../assets/images/hero/Lenovo.png"
import logo16 from "../../assets/images/hero/LG.png"
import logo17 from "../../assets/images/hero/Microsoft.png"
import logo18 from "../../assets/images/hero/Netgear.png"
import logo19 from "../../assets/images/hero/Peoplelink.png"
import logo20 from "../../assets/images/hero/Polycom.png"
import logo21 from "../../assets/images/hero/Samsung.png"
import logo22 from "../../assets/images/hero/Synology.png"

export default function Partners() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,
    logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22
  ]

  // Duplicate full set for smooth infinite sliding
  const sliderLogos = [...logos, ...logos]

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 overflow-hidden">
      
      {/* CSS FIXED HERE */}
      <style>{`
        @keyframes scrollFull {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-full {
          animation: scrollFull 35s linear infinite;
        }
      `}</style>


      <Container>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-tight">
          Our <span className="text-sky-600">Trusted Partners</span>
        </h2>

        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-full whitespace-nowrap gap-16 md:gap-24 items-center">
            {sliderLogos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-20 flex items-center justify-center transition duration-500 hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="object-contain w-full h-full drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

      </Container>

      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_107%,#cce7ff_0%,#ffffff_90%)] opacity-40"></div>
    </section>
  )
}

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Button from "../ui/Button"
import Container from "../layout/Container"

// ✅ Replace with your real images
import hero1 from "../../assets/images/hero/hero-banner.jpg"
import hero2 from "../../assets/images/hero/hero-banner2.jpg"
import hero3 from "../../assets/images/hero/hero-banner3.jpg"
import hero4 from "../../assets/images/hero/hero-banner4.jpg"
import hero5 from "../../assets/images/hero/hero-banner5.jpg"
import hero6 from "../../assets/images/hero/hero-banner.jpg"

const slides = [
  {
    id: 1,
    title: "AI-Based Network Solutions",
    desc: "Empower your enterprise with self-optimizing, intelligent network automation driven by AI and ML insights.",
    img: hero1,
    btn: "Explore Network AI",
  },
  {
    id: 2,
    title: "Cloud Computing & Infrastructure",
    desc: "Unlock agility and scalability through hybrid and multi-cloud architectures designed for future-ready enterprises.",
    img: hero2,
    btn: "See Cloud Services",
  },
  {
    id: 3,
    title: "Cybersecurity & Data Protection",
    desc: "Protect critical business assets with end-to-end cyber defense, SIEM, and proactive threat monitoring.",
    img: hero3,
    btn: "Explore Security",
  },
  {
    id: 4,
    title: "Audio-Video / UC & Collaboration",
    desc: "Enable seamless communication through intelligent AV integration and unified collaboration platforms.",
    img: hero4,
    btn: "Learn More",
  },
  {
    id: 5,
    title: "AI-Based Surveillance & IoT",
    desc: "Experience next-gen surveillance powered by AI analytics and IoT sensors for real-time visibility.",
    img: hero5,
    btn: "See IoT Solutions",
  },
  {
    id: 6,
    title: "Consulting & Advisory",
    desc: "Partner with our experts to design, implement, and optimize your digital transformation roadmap.",
    img: hero6,
    btn: "Meet Our Experts",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
   <section className="relative bg-slate-900 text-white overflow-hidden min-h-[75vh] md:min-h-[70vh] flex items-center pt-20 md:pt-0">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={slide.img}
      alt={slide.title}
      className="w-full h-full object-cover object-center brightness-50"
    />
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

  {/* Main Content */}
  <Container className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-12">
    {/* Text Section */}
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 space-y-5 text-center md:text-left mt-16 md:mt-0"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug drop-shadow-lg">
        {slide.title}
      </h1>
      <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 drop-shadow-sm">
        {slide.desc}
      </p>

      <div className="flex justify-center md:justify-start gap-3 pt-4">
        <Button>{slide.btn}</Button>
        <Button variant="outline">Contact Us</Button>
      </div>
    </motion.div>

    {/* Image Preview */}
    <motion.div
      className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
    </motion.div>
  </Container>

  
  {/* Dots Navigation */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`h-3 rounded-full transition-all duration-300 ${
          i === index
            ? "bg-sky-500 w-6"
            : "bg-white/50 hover:bg-white/80 w-3"
        }`}
      />
    ))}
  </div>
</section>

  )
}

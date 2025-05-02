"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

const heroImages = [
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Raunak Max City Exterior",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Raunak Max City Amenities",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Raunak Max City Interior",
  },
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { openModal } = useContactModal()

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill priority className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Slideshow Controls */}
      <div className="absolute inset-x-0 top-1/2 z-10 flex justify-between px-4 md:px-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/20 text-white hover:bg-black/40"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/20 text-white hover:bg-black/40"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all ${currentSlide === index ? "bg-primary" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Raunak Max City
            <span className="block text-xl md:text-2xl font-normal mt-2">Thane's No. 1 Property</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Premium 1, 2 & 3 BHK Apartments in Thane West</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={openModal}
              className="rounded-full text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              Enquire Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-8 py-6 text-white border-white hover:bg-white/10"
              onClick={() => document.getElementById("floor-plans")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Floor Plans
            </Button>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={() => document.getElementById("apartments")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="h-10 w-10" />
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Trees, Dumbbell, ShieldCheck, Wifi, Car, Droplets, Zap } from "lucide-react"

const highlights = [
  {
    title: "Premium Apartments",
    description: "Spacious 1, 2 & 2.5 BHK apartments with premium finishes",
    icon: Building2,
  },
  {
    title: "Lush Greenery",
    description: "Over 70% open space with landscaped gardens",
    icon: Trees,
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art gym and yoga studio",
    icon: Dumbbell,
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance",
    icon: ShieldCheck,
  },
  {
    title: "Smart Homes",
    description: "IoT-enabled smart home features",
    icon: Wifi,
  },
  {
    title: "Ample Parking",
    description: "Dedicated parking with EV charging stations",
    icon: Car,
  },
  {
    title: "Water Conservation",
    description: "Rainwater harvesting and water recycling",
    icon: Droplets,
  },
  {
    title: "Power Backup",
    description: "100% power backup for all apartments",
    icon: Zap,
  },
]

export default function ProjectHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="highlights" className="section-padding bg-muted/50 clip-path-slant">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-2">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Raunak Maximum City offers a perfect blend of luxury, comfort, and convenience with these exceptional features
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-custom hover:shadow-lg transition-all duration-300 border border-border/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

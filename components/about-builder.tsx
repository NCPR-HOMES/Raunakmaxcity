"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Award, Building, Users, Clock } from "lucide-react"

const achievements = [
  { number: "40+", text: "Years of Excellence", icon: Clock },
  { number: "100+", text: "Projects Completed", icon: Building },
  { number: "25,000+", text: "Happy Families", icon: Users },
  { number: "20+", text: "Industry Awards", icon: Award },
]

export default function AboutBuilder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-2">Trusted Developer</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Raunak Group</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A legacy of trust, quality, and innovation in real estate development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-custom"
          >
            <Image
              src="/raunak.png?height=600&width=600"
              alt="Raunak Group Logo and Office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Raunak Group</h3>
                <p className="text-sm">Building Trust Since 1980</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Raunak Group</h3>
            <p className="text-muted-foreground">
              Raunak Group has been at the forefront of real estate development for over 40 years, delivering
              exceptional residential and commercial projects that redefine urban living. Our commitment to quality,
              innovation, and customer satisfaction has made us one of the most trusted names in the industry.
            </p>
            <p className="text-muted-foreground">
              With a team of experienced professionals, we strive to create spaces that blend functionality, aesthetics,
              and sustainability. Every project we undertake reflects our passion for excellence and our dedication to
              creating value for our customers.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-2">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold">{achievement.number}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

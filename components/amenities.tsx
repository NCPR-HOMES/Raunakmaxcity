"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { FishIcon as Swim, Dumbbell, Palmtree, Users, Gamepad2, Utensils } from "lucide-react"

const amenities = [
  {
    name: "Swimming Pool",
    icon: Swim,
    description: "Olympic-sized swimming pool with separate kids' pool",
  },
  {
    name: "Fitness Center",
    icon: Dumbbell,
    description: "Fully equipped gym with modern equipment and trainers",
  },
  {
    name: "Landscaped Gardens",
    icon: Palmtree,
    description: "Beautifully designed green spaces for relaxation",
  },
  {
    name: "Clubhouse",
    icon: Users,
    description: "Exclusive clubhouse for residents with multiple facilities",
  },
  {
    name: "Indoor Games",
    icon: Gamepad2,
    description: "Table tennis, billiards, chess, and more",
  },
  {
    name: "Restaurant",
    icon: Utensils,
    description: "Multi-cuisine restaurant within the premises",
  },
]

export default function Amenities() {
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
    <section id="amenities" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-2">Luxury Living</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Amenities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy a lifestyle of luxury with our premium amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-custom"
          >
            <Image
              src="/lm.jpg?height=600&width=800"
              alt="Raunak Maximum City Amenities"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Luxury Amenities</h3>
                <p>Designed for the perfect lifestyle balance</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-card border shadow-custom hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

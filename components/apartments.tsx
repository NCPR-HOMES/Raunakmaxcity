"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Home, Building, Castle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/hooks/use-contact-modal"

const apartments = [
  {
    type: "1 BHK",
    area: "430 sqft.",
    price: "Rs 64.99 Lacs*",
    icon: Home,
    features: ["Spacious Living Room", "Modern Kitchen", "Balcony", "Premium Fittings"],
  },
  {
    type: "2 BHK",
    area: "610 - 630 sqft.",
    price: "Rs 93.99 Lacs* onwards",
    icon: Building,
    features: ["Master Bedroom", "Kids Bedroom", "Spacious Living Area", "Utility Space"],
  },
  {
    type: "2.5 BHK (1+1 Jodi)",
    area: "860 sqft.",
    price: "Rs 1.35 Cr*",
    icon: Castle,
    features: ["Master Bedroom", "Two Additional Bedrooms", "Large Living & Dining", "Multiple Balconies"],
  },
]

export default function Apartments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { openModal } = useContactModal()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="apartments" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-2">Find Your Perfect Home</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Apartments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a range of thoughtfully designed apartments to suit your lifestyle and needs
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {apartments.map((apartment, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 shadow-custom hover:shadow-lg transition-all duration-300 border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <apartment.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{apartment.type}</h3>
                <p className="text-muted-foreground mb-2">{apartment.area}</p>
                <p className="text-xl font-semibold mb-6">{apartment.price}</p>

                <div className="space-y-2 mb-6">
                  {apartment.features.map((feature, idx) => (
                    <p key={idx} className="text-sm">
                      {feature}
                    </p>
                  ))}
                </div>

                <Button onClick={openModal} className="rounded-full w-full">
                  Get Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">*Prices are subject to change. Terms and conditions apply.</p>
        </div>
      </div>
    </section>
  )
}

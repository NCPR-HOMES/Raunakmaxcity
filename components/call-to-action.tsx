"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { openModal } = useContactModal()

  return (
    <section className="py-16 md:py-20 gradient-primary clip-path-slant">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Luxury Living?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to schedule a site visit or to learn more about Raunak Maximum City
          </p>
          <Button
            onClick={openModal}
            size="lg"
            className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            Enquire Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

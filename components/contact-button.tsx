"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ContactButton() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
    >
      <Button onClick={scrollToContact} size="lg" className="rounded-full h-14 w-14 shadow-lg" aria-label="Contact us">
        <Phone className="h-6 w-6" />
      </Button>
    </motion.div>
  )
}

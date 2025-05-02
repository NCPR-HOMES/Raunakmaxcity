"use client"

import { useState } from "react"
import { Phone, Calendar, Download, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ContactButtons() {
  const [expanded, setExpanded] = useState(false)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const buttons = [
    {
      icon: Calendar,
      label: "Book Site Visit",
      action: scrollToContact,
    },
    {
      icon: Download,
      label: "Download Brochure",
      action: () => window.open("/brochure.pdf", "_blank"),
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/918452862301", "_blank"),
    },
  ]

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
    >
      {expanded && (
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.action}
              size="lg"
              className="rounded-full shadow-lg bg-white text-primary hover:bg-white/90 dark:bg-gray-800 dark:text-primary dark:hover:bg-gray-800/90"
              aria-label={button.label}
            >
              <button.icon className="h-5 w-5 mr-2" />
              <span>{button.label}</span>
            </Button>
          ))}
        </motion.div>
      )}

      <Button
        onClick={() => setExpanded(!expanded)}
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90"
        aria-label={expanded ? "Close contact options" : "Contact us"}
      >
        <Phone className="h-6 w-6" />
      </Button>
    </motion.div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function ContactModal() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const { isOpen, openModal, closeModal } = useContactModal()

  // Auto-trigger the contact form after 25 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal()
    }, 25000) // 25 seconds

    return () => clearTimeout(timer)
  }, [openModal])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !phone) {
      toast({
        title: "Error",
        description: "Name and phone number are required",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "We'll call you back shortly.",
      })

      closeModal()
      router.push("/thank-you")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-card rounded-2xl shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-full"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="text-center mb-6">
              <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground">Fill out the form below and our team will get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number*</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="rounded-lg"
                />
              </div>

              <Button type="submit" className="w-full rounded-lg py-6 mt-4" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

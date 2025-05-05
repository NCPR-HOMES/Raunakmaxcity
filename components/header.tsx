"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useContactModal } from "@/hooks/use-contact-modal"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Apartments", href: "#apartments" },
  { name: "Floor Plans", href: "#floor-plans" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "About", href: "#about" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { openModal } = useContactModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Set home active when at the top
      if (window.scrollY < 100) {
        setActiveSection("/")
        return
      }

      // Find active section
      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .filter((href) => href !== "/")
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Update the Link components in both desktop and mobile navigation
  const getLinkStyles = (href: string) => {
    const section = href.replace("#", "")
    return cn(
      "transition-colors",
      href === "/" 
        ? "text-sm font-medium hover:text-primary" 
        : activeSection === section
        ? "text-sm font-medium text-primary"
        : "text-sm font-medium hover:text-primary"
    )
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-amber-500 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <a href="tel:+918452862301">+91 8452862301</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <a href="mailto:contact@ncprhomes.com">contact@ncprhomes.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="font-bold text-lg md:text-2xl">
              <span className="text-gradient">Raunak</span> Maximum City
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={getLinkStyles(link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={openModal} className="rounded-full px-6">
                Enquire Now
              </Button>
              <ModeToggle />
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden space-x-4">
              <Button onClick={openModal} size="sm" className="rounded-full">
                Enquire
              </Button>
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        getLinkStyles(link.href),
                        "text-lg py-2"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

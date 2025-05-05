"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, School, ShoppingBag, Train, Car, Building, Hospital, FerrisWheel, TrainFront } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/hooks/use-contact-modal"

const nearbyPlaces = [
  { name: "Thane Railway Station", distance: "25 mins", icon: Train },
  { name: "Metro Station", distance: "5 mins", icon: TrainFront },
  { name: "Viviana Mall", distance: "15 mins", icon: ShoppingBag },
  { name: "Euro School", distance: "4 min", icon: School },
  { name: "Jupiter Hospital", distance: "15 mins", icon: Hospital },
  { name: "Tieten Medicity", distance: "6 mins", icon: Building },
  { name: "Upvan Lake", distance: "15 mins", icon: Car },
  { name: "Suraj Water Park", distance: "7 mins", icon: FerrisWheel },
]

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { openModal } = useContactModal()

  return (
    <section id="location" className="section-padding bg-muted/30 ">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-2">Strategic Location</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prime Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located on Ghodbunder Road for convenience and connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Ghodbunder Road, Thane West</h3>
            </div>

            <p className="text-muted-foreground">
              Raunak Maximum City is located on the prestigious Ghodbunder Road in Thane West, offering easy access to major
              business districts, educational institutions, healthcare facilities, and entertainment options.
            </p>

            <div className="space-y-4 mt-6">
              <h4 className="font-semibold text-lg">Nearby Places</h4>
              <ul className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <place.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{place.name}</span>
                    <span className="text-muted-foreground">({place.distance})</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Button className="rounded-full" onClick={openModal}>Get Directions</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-custom"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.222064448159!2d72.96191491490721!3d19.233955986993377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbc82c851d63%3A0x427b4d4ed6d8f8e3!2sGhodbunder%20Rd%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652209850843!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raunak Maximum City Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

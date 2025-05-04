"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample gallery images (would be replaced with actual project images)
const galleryImages = {
  exterior: [
    { src: "/ex1.jpg?height=600&width=800", alt: "Building Exterior 1" },
    { src: "/ex2.jpg?height=600&width=800", alt: "Building Exterior 2" },
    { src: "/ex3.jpg?height=600&width=800", alt: "Building Exterior 3" },
    { src: "/ex4.jpg?height=600&width=800", alt: "Building Exterior 4" },
  ],
  interior: [
    { src: "/hall.jpg?height=600&width=800", alt: "Living Room" },
    { src: "/kitchen.png?height=600&width=800", alt: "Kitchen" },
    { src: "/bedroom.jpg?height=600&width=800", alt: "Bedroom" },
    { src: "/bathroom.png?height=600&width=800", alt: "Bathroom" },
  ],
  amenities: [
    { src: "/swimmingpool.jpg?height=600&width=800", alt: "Swimming Pool" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Gym" },
    { src: "/ex3.jpg?height=600&width=800", alt: "Garden" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Clubhouse" },
  ],
}

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const openLightbox = (image: { src: string; alt: string }) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-2">Visual Tour</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the stunning visuals of Raunak Max City through our comprehensive gallery
          </p>
        </div>

        <Tabs defaultValue="exterior" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full p-1">
            <TabsTrigger value="exterior" className="rounded-full">
              Exterior
            </TabsTrigger>
            <TabsTrigger value="interior" className="rounded-full">
              Interior
            </TabsTrigger>
            <TabsTrigger value="amenities" className="rounded-full">
              Amenities
            </TabsTrigger>
          </TabsList>

          {Object.entries(galleryImages).map(([category, images]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative overflow-hidden rounded-xl cursor-pointer group shadow-custom"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-medium px-4 py-2 bg-black/50 rounded-full">{image.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[80vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg"
                />
                <p className="text-white text-center mt-4 text-lg">{currentImage.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

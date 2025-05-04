"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

const floorPlans = {
  "1bhk": {
    title: "1 BHK",
    area: "430 sqft.",
    price: "Rs 55.99 Lacs*",
    image: "/floorplan1.jpg?height=600&width=800",
    features: [ 
      "Spacious living room with balcony",
      "Modern kitchen with premium fittings",
      "Well-ventilated bedroom",
      "Elegant bathroom with quality fixtures",
    ],
  },
  "2bhk": {
    title: "2 BHK",
    area: "610 - 630 sqft.",
    price: "Rs 83.99 Lacs* onwards",
    image: "/floorplan2.jpg?height=600&width=800",
    features: [
      "Master bedroom with attached bathroom",
      "Secondary bedroom with large windows",
      "Spacious living and dining area",
      "Modern kitchen with utility space",
    ],
  },
  "3bhk": {
    title: "3 BHK (1+1 Jodi)",
    area: "860 sqft.",
    price: "Rs 1.21 Cr*",
    image: "/floorplan3.jpg?height=600&width=800",
    features: [
      "Master bedroom with premium fittings",
      "Two additional well-designed bedrooms",
      "Large living and dining space",
      "Modern kitchen with premium appliances",
    ],
  },
}

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState("1bhk")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { openModal } = useContactModal()

  return (
    <section id="floor-plans" className="section-padding bg-muted/30 clip-path-slant-reverse">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-2">Designed For You</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Floor Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughtfully designed floor plans that maximize space and comfort
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="1bhk" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full p-1">
              <TabsTrigger value="1bhk" className="rounded-full">
                1 BHK
              </TabsTrigger>
              <TabsTrigger value="2bhk" className="rounded-full">
                2 BHK
              </TabsTrigger>
              <TabsTrigger value="3bhk" className="rounded-full">
                3 BHK
              </TabsTrigger>
            </TabsList>

            {Object.entries(floorPlans).map(([key, plan]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border shadow-custom group">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={`${plan.title} Floor Plan`}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 blur-[2px]"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-lg text-muted-foreground mb-1">Area: {plan.area}</p>
                      <p className="text-xl font-semibold">Price: {plan.price}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Key Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button onClick={openModal} className="rounded-full">
                        Get Quote
                      </Button>
                      <Button variant="outline" onClick={openModal} className="rounded-full gap-2">
                        <Download className="h-4 w-4" />
                        Download Floor Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            *Prices are subject to change. Floor plans are indicative and may vary slightly in the actual unit.
          </p>
        </div>
      </div>
    </section>
  )
}

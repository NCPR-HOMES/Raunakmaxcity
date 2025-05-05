import type { Metadata } from "next"
import Hero from "@/components/hero"
import Apartments from "@/components/apartments"
import ProjectHighlights from "@/components/project-highlights"
import FloorPlans from "@/components/floor-plans"
import Amenities from "@/components/amenities"
import Gallery from "@/components/gallery"
import Location from "@/components/location"
import AboutBuilder from "@/components/about-builder"
import Rera from "@/components/rera"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Raunak Maximum City | Premium Residential Project in Thane West",
  description:
    "Discover Raunak Maximum City - Thane's No. 1 Property offering 1, 2 & 2.5 BHK luxury apartments with world-class amenities and strategic location in Thane West.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <Apartments />
      <ProjectHighlights />
      <FloorPlans />
      <Amenities />
      <Gallery />
      <Location />
      <AboutBuilder />
      <CallToAction />
      <Rera />
    </>
  )
}

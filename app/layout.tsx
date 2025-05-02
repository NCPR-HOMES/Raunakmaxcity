import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"
import Chatbot from "@/components/chatbot"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Raunak Max City | Premium Residential Project in Thane West",
  description:
    "Discover Raunak Max City - Thane's No. 1 Property offering 1, 2 & 3 BHK luxury apartments with world-class amenities and strategic location in Thane West.",
  keywords: "Raunak Max City, Thane West, 1BHK, 2BHK, 3BHK, residential project, property investment, Raunak Group",
  openGraph: {
    title: "Raunak Max City | Premium Residential Project in Thane West",
    description:
      "Discover Raunak Max City - Thane's No. 1 Property offering 1, 2 & 3 BHK luxury apartments with world-class amenities and strategic location in Thane West.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raunak Max City",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raunak Max City | Premium Residential Project in Thane West",
    description:
      "Discover Raunak Max City - Thane's No. 1 Property offering 1, 2 & 3 BHK luxury apartments with world-class amenities and strategic location in Thane West.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Raunak Max City",
              "description": "Premium 1, 2 & 3 BHK apartments in Thane West by Raunak Group",
              "url": "https://raunakmaxcity.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thane West",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN",
                "streetAddress": "Ghodbunder Road"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "5599000",
                "priceValidUntil": "2025-12-31"
              },
              "image": "/images/og-image.jpg",
              "telephone": "+918452862301",
              "amenityFeature": [
                "Swimming Pool", "Clubhouse", "Gym", "Garden", "Children's Play Area", 
                "Security", "Power Backup", "Parking"
              ]
            }
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ContactModal />
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

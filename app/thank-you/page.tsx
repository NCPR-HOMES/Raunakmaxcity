import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You | Raunak Maximum City",
  description: "Thank you for your interest in Raunak Maximum City. Our team will contact you shortly.",
}

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center container-custom">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-amber-500 rounded-full blur opacity-70"></div>
        <CheckCircle className="relative w-20 h-20 text-primary mb-6" />
      </div>
      <h1 className="text-4xl font-bold mb-4 mt-4">Thank You!</h1>
      <p className="text-xl mb-8 max-w-md">
        We've received your inquiry about Raunak Maximum City. Our team will contact you shortly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

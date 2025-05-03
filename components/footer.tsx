import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">
              <span className="text-gradient">Raunak</span> Max City
            </h3>
            <p className="text-muted-foreground text-sm">
              Luxury living redefined in Thane West. Experience the perfect blend of comfort, convenience, and elegance.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#apartments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="#floor-plans"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Floor Plans
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Builder
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+91 8452862301</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">ncpr.23realestate@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Raunak Group. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

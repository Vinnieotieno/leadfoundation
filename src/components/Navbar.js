'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const MarqueeText = () => (
  <div className="bg-blue-600 text-white py-2 overflow-hidden">
    <div className="whitespace-nowrap flex animate-marquee items-center">
      <span className="mx-4 text-sm sm:text-base md:text-lg">🌍 Empowering Africa's Future</span>
      <span className="mx-4 text-sm sm:text-base md:text-lg">•</span>
      <span className="mx-4 text-sm sm:text-base md:text-lg">Building Tomorrow's Leaders</span>
      <span className="mx-4 text-sm sm:text-base md:text-lg">•</span>
      <span className="mx-4 text-sm sm:text-base md:text-lg">Transforming Communities</span>
      <span className="mx-4 text-sm sm:text-base md:text-lg">•</span>
      <span className="mx-4 text-sm sm:text-base md:text-lg">Join Our Mission</span>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      .animate-marquee {
        animation: marquee 15s linear infinite;
      }
    `}</style>
  </div>
)

const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors" onClick={onClose}>
            About
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              Projects <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="pl-4 mt-2 space-y-2 hidden group-hover:block">
              <Link
                href="#education"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                Education
              </Link>
              <Link
                href="#healthcare"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                Healthcare
              </Link>
              <Link
                href="#agriculture"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                Agriculture
              </Link>
            </div>
          </div>
          <Link
            href="#leadership"
            className="block text-gray-600 hover:text-blue-600 transition-colors"
            onClick={onClose}
          >
            Our Leadership
          </Link>
          <Link href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors" onClick={onClose}>
            Contact
          </Link>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Donate Now</Button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50">
      <MarqueeText />
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/logo.png"
                  alt="Lead Africa Foundation Logo"
                  width={80}
                  height={80}
                  className="transition-transform group-hover:rotate-6"
                />
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lead Africa Foundation
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  Projects <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4 space-y-2">
                    <Link href="#education" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Education
                    </Link>
                    <Link href="#healthcare" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Healthcare
                    </Link>
                    <Link href="#agriculture" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Agriculture
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="#leadership" className="text-gray-600 hover:text-blue-600 transition-colors">
                Our Leadership
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-blue-600 hover:bg-blue-700 hidden md:flex">Donate Now</Button>
              </motion.div>
              <button
                className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

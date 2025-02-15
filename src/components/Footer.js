"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/myemissary", color: "hover:bg-blue-600" },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/Lead_F_Africa?t=e-qO8kcenHeMhr0j95evcQ&s=09",
    color: "hover:bg-blue-400",
  },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/lead_foundationafrica?igsh=cDBqZTVhczFoemcx",
    color: "hover:bg-pink-600",
  },
]

const partners = [
  {
    name: "Bethesda Joyland Centre Academy",
    logo: "/b.png",
    href: "/partners/bethesda-joyland",

  },
  /*{ name: "EcoTech Solutions", logo: "/logo.png", href: "/partners/ecotech", description: "Innovative technology for a sustainable future." },
  { name: "African Youth Network", logo: "/logo.png", href: "/partners/african-youth", description: "Empowering the next generation of African leaders." },
  { name: "Sustainable Futures Foundation", logo: "/logo.png", href: "/partners/sustainable-futures", description: "Building a sustainable world for generations to come." },
  { name: "Education for All", logo: "/logo.png", href: "/partners/education-for-all", description: "Ensuring quality education reaches every corner of Africa." },
  { name: "Clean Water Initiative", logo: "/logo.png", href: "/partners/clean-water", description: "Providing access to clean and safe water across communities." },*/
]

const FooterSection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 md:mb-0"
  >
    <h3 className="font-bold text-xl mb-6 text-gray-800">{title}</h3>
    {children}
  </motion.div>
)

const PartnerLogo = ({ partner, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.9 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={partner.logo || "/placeholder.svg"}
        alt={partner.name}
        width={150}
        height={150}
        className="rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg mx-auto"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-lg"
      >
        <div className="text-white text-center p-4">
          <h4 className="font-bold mb-2">{partner.name}</h4>
          <p className="text-sm">{partner.description}</p>
          <Link href={partner.href} className="mt-2 inline-block">
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

const PartnersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    if (!isExpanded) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isExpanded])

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length)
  }

  return (
    <motion.div ref={containerRef} style={{ y }} className="relative">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="font-bold text-xl text-gray-800">Our Partners</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrev} aria-label="Previous partner">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleNext} aria-label="Next partner">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="relative h-[200px] md:h-[250px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <PartnerLogo partner={partners[activeIndex]} isActive={true} onClick={() => {}} />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {partners.map((partner, index) => (
            <PartnerLogo
              key={partner.name}
              partner={partner}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </motion.div>
      <Button variant="outline" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="mt-4 w-full">
        {isExpanded ? (
          <>
            <ChevronUp className="w-4 h-4 mr-2" />
            Hide Partners
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4 mr-2" />
            View All Partners
          </>
        )}
      </Button>
    </motion.div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()

    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="About Us">
            <div className="space-y-4">
              <Image src="/logo.png" alt="Lead Africa Foundation Logo" width={120} height={120} className="mb-4" />
              <p className="text-gray-600 leading-relaxed">
                Empowering communities across Africa through sustainable development, education, and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors ${social.color} group`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FooterSection>

          <div className="md:col-span-2">
            <PartnersCarousel />
          </div>

          <FooterSection title="Contact Us">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                <a href="mailto:contact@leadafrica.org" className="hover:text-blue-600 transition-colors break-all">
                  info@leadfoundationafrica.org
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                <a href="tel:+254123456789" className="hover:text-blue-600 transition-colors">
                  +254 123 456 789
                </a>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Newsletter">
            <div className="space-y-4">
              <p className="text-gray-600">Stay updated with our latest initiatives and success stories.</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    aria-label="Email for newsletter"
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <AnimatePresence>
                  {isSubscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-600 text-sm"
                    >
                      Thank you for subscribing!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </FooterSection>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-500/50 mt-12 pt-8 text-center"
        >
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Lead Africa Foundation. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


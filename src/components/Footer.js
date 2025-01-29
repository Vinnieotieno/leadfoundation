"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#", // Replace with your Facebook URL
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#", // Replace with your Twitter URL
    color: "hover:bg-blue-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#", // Replace with your LinkedIn URL
    color: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#", // Replace with your Instagram URL
    color: "hover:bg-pink-600",
  },
]

const FooterSection = ({ title, children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h3 className="font-bold text-xl mb-6 text-gray-800">{title}</h3>
    {children}
  </motion.div>
)

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Add your newsletter subscription logic here
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <FooterSection title="About Us">
            <div className="space-y-4">
              <Image src="/logo.png" alt="Lead Africa Foundation Logo" width={120} height={120} className="mb-4" />
              <p className="text-gray-600 leading-relaxed">
                Empowering communities across Africa through sustainable development, education, and innovation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-3">
              {["Our Story", "Team", "Projects", "Impact", "Get Involved"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <a href="mailto:contact@leadafrica.org" className="hover:text-blue-600 transition-colors">
                  info@leadfoundationafrica.org
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <a href="tel:+254123456789" className="hover:text-blue-600 transition-colors">
                  +254 123 456 789
                </a>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1" />
                <span> Nairobi, Kenya</span>
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
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-sm"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </form>
            </div>
          </FooterSection>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-300/50 mt-12 pt-8 text-center"
        >
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Lead Africa Foundation. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


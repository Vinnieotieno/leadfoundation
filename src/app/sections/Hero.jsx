'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import LearnMoreCard from "@/components/LearnMoreCard"

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text])

  return <span>{displayText}</span>
}

const ImpactCounter = ({ targetAmount, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(targetAmount)
    const incrementTime = (duration / end) * 1000

    const timer = setInterval(() => {
      start += 1
      setCount(String(start).padStart(targetAmount.length, "0"))
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [targetAmount, duration])

  return <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">{count}</span>
}

export default function EnhancedHeroSection() {
  const [showLearnMore, setShowLearnMore] = useState(false)

  return (
    <section className="relative min-h-screen mt-12 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 animate-gradient-x"></div>
      <div className="container mt-12 mx-auto px-4 lg:px-8 z-10">
        <div className="grid gap-12 mt-8 lg:gap-16 items-center grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="space-y-6 text-gray-800 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold leading-tight">
              <TypewriterText text="Empowering Africa's Future" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Together, we're transforming lives and building a brighter tomorrow for Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:space-y-0 space-y-4 sm:space-x-4 justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 sm:px-8 py-3 rounded-full transition-transform hover:scale-105">
                Join Us Today
              </Button>
              <Button
                className="bg-transparent border-2 border-blue-600 text-blue-600 text-lg px-6 sm:px-8 py-3 rounded-full transition-transform hover:scale-105"
                onClick={() => setShowLearnMore(true)}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/africa.png" alt="Africa Impact Collage" fill className="object-contain" priority />
            <div className="absolute top-0 right-0 bg-transparent p-4 rounded-lg">
              <p className="text-center text-gray-800 text-xs sm:text-sm md:text-base">People Impacted</p>
              <p className="text-center">
                <ImpactCounter targetAmount="100000" duration={5} />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>{showLearnMore && <LearnMoreCard onClose={() => setShowLearnMore(false)} />}</AnimatePresence>
    </section>
  )
}

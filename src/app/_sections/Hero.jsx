'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Heart, Users, Target, Sparkles, Play, ChevronDown } from 'lucide-react'
import LearnMoreCard from "@/components/LearnMoreCard";

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const typingInterval = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, 100)

      return () => clearTimeout(typingInterval)
    }
  }, [index, text])

  return <span>{displayText}</span>
}

const ImpactStats = ({ number, label }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(number)
    const incrementTime = (2000 / end) * 1000

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [number])

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {count}+
      </motion.div>
      <p className="text-sm md:text-lg text-gray-700 font-medium">{label}</p>
    </div>
  )
}

const HomeHero = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [showLearnMore, setShowLearnMore] = useState(false);

  const impactData = [
    { number: "50000", label: "Lives Impacted" },
    { number: "100", label: "Communities" },
    { number: "25", label: "Programs" },
    { number: "1000", label: "Volunteers" }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center blur-lg" style={{ backgroundImage: "url('/africa.png')" }} />
      
      <div className="relative container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-white/80 text-purple-700 font-semibold shadow-md">
              Welcome to Lead Foundation Africa
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              <TypewriterText text="Empowering Dreams, Transforming Lives" />
              <motion.span animate={{ rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="inline-block ml-2">
                ✨
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto lg:mx-0">
              Join us in our mission to create lasting positive change across Africa through education, 
              healthcare, and community development initiatives.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
              <Button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700" onClick={() => setShowLearnMore(true)}>
                Learn More
              </Button>
              <Button className="bg-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100" onClick={() => setShowVideo(true)}>
                <Play className="mr-2 w-5 h-5 text-blue-600" />
                Watch Our Story
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              {impactData.map((item, index) => (
                <ImpactStats key={index} {...item} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative h-96 lg:h-[500px]">
            <Image src="/africa.png" alt="Lead Foundation Impact" fill className="object-contain drop-shadow-xl" priority />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>{showVideo && <LearnMoreCard onClose={() => setShowLearnMore(false)} />}</AnimatePresence>
      <AnimatePresence>{showLearnMore && <LearnMoreCard onClose={() => setShowLearnMore(false)} />}</AnimatePresence>
    </section>
  )
}

export default HomeHero

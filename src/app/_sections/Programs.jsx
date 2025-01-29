"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { ChevronRight, Users, Sprout, GraduationCap, Heart } from "lucide-react"

const programs = [
  {
    title: "Community Development",
    image: "/placeholder.png",
    description: "Supporting local initiatives and empowering communities through sustainable development programs",
    icon: Users,
    color: "bg-blue-500",
    stats: "50+ Communities",
  },
  {
    title: "Sustainable Agriculture",
    image: "/placeholder.png",
    description: "Promoting sustainable farming practices and food security initiatives",
    icon: Sprout,
    color: "bg-green-500",
    stats: "200+ Farmers",
  },
  {
    title: "Education",
    image: "/placeholder.png",
    description: "Providing access to quality education and skills development programs",
    icon: GraduationCap,
    color: "bg-yellow-500",
    stats: "1000+ Students",
  },
  {
    title: "Healthcare",
    image: "/placeholder.png",
    description: "Improving access to healthcare services and promoting community wellness",
    icon: Heart,
    color: "bg-red-500",
    stats: "5000+ Patients",
  },
]

const ProgramCard = ({ program, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { delay: index * 0.2 } })
  }, [controls, index])

  return (
    <motion.div
      className="flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          className={`absolute top-4 right-4 ${program.color} p-3 rounded-full shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <program.icon className="h-6 w-6 text-white" />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col flex-grow p-6 bg-white"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2 text-gray-800">{program.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-gray-500">{program.stats}</span>
          <motion.button
            className="inline-flex items-center text-sm font-semibold text-blue-600 group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % programs.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200" id="programs">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Transforming Lives Through Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive programs create lasting impact across communities in Africa.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Involved
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}


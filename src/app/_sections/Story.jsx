"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stories = [
  {
    title: "Empowering Communities",
    description:
      "Through sustainable development initiatives, we've helped over 100 communities achieve self-sufficiency and economic growth.",
    image: "/story2.png",
  },
  {
    title: "Education First",
    description:
      "Our education programs have enabled more than 1,000 children to access quality education and build brighter futures.",
    image: "/story3.png",
  },
  {
    title: "Healthcare Access",
    description:
      "We've established mobile clinics that have provided essential healthcare services to remote communities across Africa.",
    image: "/story1.png",
  },
  {
    title: "Agricultural Innovation",
    description:
      "By introducing sustainable farming techniques, we've helped farmers increase their yield and improve food security.",
    image: "/story4.png",
  },
]

const values = [
  {
    title: "Integrity",
    description: "We maintain the highest standards of honesty and accountability in all our actions and initiatives.",
    icon: "🌟",
  },
  {
    title: "Innovation",
    description: "We embrace creative solutions and new approaches to address complex challenges.",
    icon: "💡",
  },
  {
    title: "Impact",
    description: "We measure our success by the tangible difference we make in people's lives.",
    icon: "🎯",
  },
  {
    title: "Inclusion",
    description: "We ensure our programs benefit all members of the community, leaving no one behind.",
    icon: "🤝",
  },
]

const ValueCard = ({ value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-4xl mb-4">{value.icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
    <p className="text-gray-600">{value.description}</p>
  </motion.div>
)

export default function StorySection() {
  const [currentStory, setCurrentStory] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentStory((prev) => (prev + newDirection + stories.length) % stories.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [paginate])

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make A Difference is a dynamic and dedicated foundation committed to fostering sustainable development,
            empowering communities, and igniting positive change across the African continent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentStory}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={stories[currentStory].image || "/placeholder.svg"}
                    alt={stories[currentStory].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{stories[currentStory].title}</h3>
                    <p className="text-sm">{stories[currentStory].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-full">Support Our Mission</Button>
        </motion.div>
      </div>
    </section>
  )
}


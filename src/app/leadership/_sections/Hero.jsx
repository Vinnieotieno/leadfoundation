'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Users, Award } from 'lucide-react'

const LeadershipHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200" />
      
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
          style={{
            backgroundImage: "url('/lf6.jpg')",
          }}
        />
      </motion.div>

      {/* Animated Decorative Elements */}
      <div className="absolute mt-12 inset-0 overflow-hidden">
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Star className="w-12 h-12 text-purple-400 opacity-20" />
        </motion.div>
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
        >
          <Award className="w-16 h-16 text-blue-400 opacity-20" />
        </motion.div>
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2"
        >
          <Users className="w-14 h-14 text-pink-400 opacity-20" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-16 container mx-auto px-4 py-4 h-[80vh] flex flex-col justify-center items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 mt-16 inline-block"
          >
            
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            Empowering Africa's Future Leaders
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Meet the visionary team driving transformative change across Africa through innovative leadership and sustainable development initiatives.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { number: "10+", label: "Years Combined Experience" },
              { number: "100+", label: "Projects Led" },
              { number: "15", label: "African Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg"
              >
                <span className="block text-2xl font-bold text-purple-600">{stat.number}</span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
    </section>
  )
}

export default LeadershipHero
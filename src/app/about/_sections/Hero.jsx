'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, Globe, Users, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const Hero = () => {
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

  return (
    <section className="relative min-h-screen mt-12 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/lf6.jpg')",
            opacity: 0.15
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Transforming Lives Across Africa
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Working towards bringing sustainable change in the lives of vulnerable communities through education, empowerment, and economic development.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 flex items-center mx-auto group"
            >
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 mt-20"
          >
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden group h-full border-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardContent className="p-8 relative">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150" />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <Heart className="w-12 h-12 text-blue-600 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower African communities through innovative solutions, sustainable development, and collaborative partnerships that create lasting positive change in education, healthcare, and economic opportunities.
                  </p>
                  <motion.div 
                    className="mt-6 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <button className="text-blue-600 font-semibold flex items-center group/btn">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden group h-full border-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardContent className="p-8 relative">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150" />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <Globe className="w-12 h-12 text-purple-600 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To create a future where every African community thrives with equal access to quality education, healthcare, and economic opportunities, fostering self-reliance and sustainable growth.
                  </p>
                  <motion.div 
                    className="mt-6 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <button className="text-purple-600 font-semibold flex items-center group/btn">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Impact Numbers */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: "50K+", label: "Lives Impacted", icon: Users, color: "text-blue-600" },
              { number: "120+", label: "Projects Completed", icon: Globe, color: "text-purple-600" },
              { number: "25+", label: "Communities Served", icon: Heart, color: "text-pink-600" },
              { number: "15+", label: "Countries Reached", icon: Globe, color: "text-indigo-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                </motion.div>
                <h4 className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</h4>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
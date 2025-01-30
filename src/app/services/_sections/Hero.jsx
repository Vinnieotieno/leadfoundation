'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, GraduationCap, ArrowRight, ChevronDown, Sparkles, Target, HandHeart } from 'lucide-react'

const ServiceHero = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Community Empowerment Projects",
      description: "We enable communities to flourish with customized strategies for sustainable development.",
      icon: Users,
      stats: { projects: "50+", communities: "100+", impact: "10K+" },
      color: "from-blue-500 to-purple-500",
      initiatives: [
        "Local Business Development",
        "Skills Training Programs",
        "Community Leadership",
        "Sustainable Agriculture"
      ]
    },
    {
      id: 2,
      title: "Health and Wellness Programs",
      description: "Our health services ensure accessible care and wellness education for all communities.",
      icon: Heart,
      stats: { clinics: "25+", patients: "5K+", programs: "15+" },
      color: "from-purple-500 to-pink-500",
      initiatives: [
        "Mobile Health Clinics",
        "Wellness Education",
        "Maternal Care",
        "Mental Health Support"
      ]
    },
    {
      id: 3,
      title: "Academic Development",
      description: "Supporting youth with education, mentorship, scholarships, and skill-building programs.",
      icon: GraduationCap,
      stats: { students: "200+", schools: "", graduates: "150+" },
      color: "from-pink-500 to-rose-500",
      initiatives: [
        "Scholarship Programs",
        "Mentorship Initiative",
        "Digital Skills Training",
        "STEM Education"
      ]
    }
  ]

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
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden mt-12 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat backdrop-blur-lg"
            style={{
             backgroundImage: "url('/lf6.jpg')",
           }}
        />
      </div>


      {/* My Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.2, 0.5]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header  */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-semibold shadow-lg">
                Our Services
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Transforming Lives with Our Initiatives
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            >
              Explore Lead Africa Foundation's innovative initiatives fostering sustainable growth, 
              empowerment, and transformation. Discover more below.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-0.5 mb-6`}>
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Initiatives List */}
                    <div className="space-y-2">
                      {service.initiatives.map((initiative, index) => (
                        <motion.div
                          key={index}
                          initial={false}
                          animate={{
                            opacity: hoveredService === service.id ? 1 : 0.7,
                            x: hoveredService === service.id ? 10 : 0
                          }}
                          className="flex items-center text-gray-600"
                        >
                          <Target className="w-4 h-4 mr-2 text-purple-600" />
                          <span className="text-sm">{initiative}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.div
                      initial={false}
                      animate={{
                        y: hoveredService === service.id ? 0 : 10,
                        opacity: hoveredService === service.id ? 1 : 0
                      }}
                      className="mt-6"
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Button
              variant="outline"
              className="bg-white/90 backdrop-blur-sm border-purple-200 text-purple-600 px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <HandHeart className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get Involved Today
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero
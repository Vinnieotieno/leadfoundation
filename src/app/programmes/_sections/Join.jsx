'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Users, HandHeart, Sparkles, ArrowRight, Quote, X, Calendar, MapPin, Phone } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const JoinUs = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const opportunities = [
    {
      id: 1,
      title: "Volunteer",
      description: "Join our dedicated team of volunteers making a difference in communities across Africa.",
      icon: Heart,
      image: "/lf5.jpg",
      fullDescription: `Join our vibrant volunteer community and be part of transformative change across Africa. 
      As a volunteer, you'll have the opportunity to:
      • Work directly with local communities
      • Participate in educational programs
      • Support healthcare initiatives
      • Contribute to sustainable development projects
      
      Current Opportunities:
      - Community Education Facilitator
      - Healthcare Support Volunteer
      - Youth Mentor
      - Project Coordinator`,
      locations: ["Kenya", "Uganda", "Tanzania", "Ghana"],
      commitment: "Flexible (2-12 months)",
      contact: "info@leadfoundationafrica.org"
    },
    {
      id: 2,
      title: "Partner With Us",
      description: "Collaborate with us to create sustainable impact through innovative programs and initiatives.",
      icon: Users,
      image: "/lf7.jpg",
      fullDescription: `Create lasting impact through strategic partnerships with Lead Africa Foundation. 
      Partnership opportunities include:
      • Program Implementation
      • Resource Sharing
      • Knowledge Exchange
      • Joint Research Initiatives
      
      Benefits:
      - Access to established community networks
      - Shared resources and expertise
      - Measurable social impact
      - Long-term sustainable development`,
      locations: ["Pan-African"],
      commitment: "Long-term partnership",
      contact: "info@leadfoundationafrica.org"
    },
    {
      id: 3,
      title: "Donate",
      description: "Support our mission to transform lives and communities through your generous contributions.",
      icon: HandHeart,
      image: "/lf4.jpg",
      fullDescription: `Your donation helps us create sustainable change in African communities. 
      Impact of your donation:
      • $50 - Provides educational materials for one student
      • $100 - Supports healthcare screening for a family
      • $500 - Funds a community development and workshop
      • $1000 - Enables a micro-enterprise startup
      
      All donations are tax-deductible and go directly to our programs.`,
      locations: ["All African regions"],
      commitment: "One-time or recurring",
      contact: "lead@leadfoundationafrica.org"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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

  const expandedCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Head Section */}
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Join Us in Leading Change
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Become part of Lead Africa Foundation and transform lives in underserved communities. 
              Together, we drive impactful change and uplift individuals.
            </motion.p>
          </div>

          {/*  Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-20 relative"
          >
            {opportunities.map((opportunity) => (
              <motion.div
                key={opportunity.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={opportunity.image || "/lf6.jpg"}
                      alt={opportunity.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <opportunity.icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <Button
                      variant="ghost"
                      className="text-purple-600 font-semibold p-0 hover:bg-transparent"
                      onClick={() => setSelectedCard(opportunity)}
                    >
                      <span className="flex items-center group/btn">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Expanded Card Modal */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex inset-0 bg-gradient-to-r from-blue-400 to-purple-400 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedCard(null)}
              >
                <motion.div
                  variants={expandedCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative h-64">
                    <img 
                      src={selectedCard.image || "/lf7.jpg"}
                      alt={selectedCard.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Button
                      variant="ghost"
                      className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
                      onClick={() => setSelectedCard(null)}
                    >
                      <X className="w-6 h-6" />
                    </Button>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedCard.title}</h3>
                      <div className="flex items-center text-white/80">
                        <selectedCard.icon className="w-5 h-5 mr-2" />
                        <span>Lead Africa Foundation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                        <span>{selectedCard.locations.join(", ")}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                        <span>{selectedCard.commitment}</span>
                      </div>
                    </div>
                    
                    <div className="prose prose-purple max-w-none mb-6">
                      {selectedCard.fullDescription.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t pt-6">
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-2 text-purple-600" />
                        <span>{selectedCard.contact}</span>
                      </div>
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Testimonial Section */}
          <motion.div
            variants={containerVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30" />
            
            <div className="relative">
              <Quote className="w-12 h-12 text-purple-600 mb-6" />
              <motion.blockquote
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-700 mb-6"
              >
                "Working with Lead Africa Foundation has been an incredible journey of impact and transformation. 
                Together, we're building a brighter future for communities across the continent."
              </motion.blockquote>
              <motion.div variants={itemVariants}>
                <cite className="text-gray-900 font-semibold block">Dr. Sarah Mensah</cite>
                <span className="text-gray-600">Community Leader, Kenya</span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={containerVariants}
            className="text-center mt-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center group"
              >
                Be a Leader
                <Sparkles className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" />
              </motion.button>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 mt-4"
            >
              Join 5000+ change-makers transforming Africa
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinUs
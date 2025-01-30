'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { LinkedinIcon as LinkedIn, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null)

  const team = [
    {
      id: 1,
      name: "Clarian Makungu",
      role: "Director Lead Foundation Africa",
      image: "/clarian.jpg",
      bio: "Pioneering health through community initiatives.",
      expertise: ["Community Health", "Program Development", "Strategic Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "clarian@leadafoundationafrica.org"
      }
    },
    {
      id: 2,
      name: "Samuel Kironyo",
      role: "Coordinator",
      image: "/sam.jpg",
      bio: "Drives to uplift underserved communities through sustainable initiatives.",
      expertise: ["Project Management", "Community Engagement", "Strategic Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sam@leadfoundationafrica.org"
      }
    },
    {
      id: 3,
      name: "Roselyne Brown",
      role: "Senior Program Manager",
      image: "/roselyn.jpg",
      bio: "Dedicated to promoting long-term growth in communities across Africa.",
      expertise: ["Program Management", "Leadership Development", "Strategic Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "roselyn@leadafoundationafrica.org"
      }
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/lf7.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(100px)'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Inspiring Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet our passionate specialists empowering communities with their expertise and boundless dedication.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <Card className="relative overflow-hidden group bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="relative p-6">
                    {/* Image Container */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Decorative  */}
                      <motion.div
                        className="absolute inset-0 border-2 rounded-full border-purple-500/20"
                        animate={{
                          scale: hoveredMember === member.id ? [1, 1.2, 1] : 1,
                          opacity: hoveredMember === member.id ? [1, 0] : 1
                        }}
                        transition={{ duration: 1, repeat: hoveredMember === member.id ? Infinity : 0 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {member.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center items-center gap-4">
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <LinkedIn className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={`mailto:${member.social.email}`}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                      </div>

                      {/* View Profile Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-4 text-sm text-purple-600 font-semibold flex items-center justify-center mx-auto group/btn"
                      >
                        View Full Profile
                        <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-700 mb-4">
              Want to join our team of changemakers?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-colors duration-300"
            >
              
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
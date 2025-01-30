'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, Heart, Share2, Download, Filter } from 'lucide-react'

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'community', name: 'Community' },
    { id: 'empowerment', name: 'Empowerment' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/lf6.jpg",
      alt: "Community hands joining together",
      category: "community",
      description: "Unity in action: Community members coming together",
      location: "Nairobi, Kenya",
      date: "2024"
    },
    {
      id: 2,
      src: "/lf7.jpg",
      alt: "Education initiative in progress",
      category: "education",
      description: "Empowering minds through education",
      location: "Nakuru, Kenya",
      date: "2024"
    },
    {
      id: 3,
      src: "/lf3.jpg",
      alt: "Healthcare outreach program",
      category: "healthcare",
      description: "Bringing healthcare to remote communities",
      location: "Kampala, Uganda",
      date: "2023"
    },
    
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <section className="relative mt-12 min-h-screen py-20 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      {/* Background Pattern */}
    <div className="absolute inset-0 z-0">
        <div 
           className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/lf6.jpg')",
            }}
        />
       <div className="absolute inset-0 backdrop-blur-3xl" />
   </div>


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Unveil Potential: Our Inspiring Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 text-lg max-w-2xl mx-auto"
            >
              Explore our transformative journey through powerful moments captured across Africa.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`rounded-full ${
                  activeFilter === category.id 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-purple-100'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-square">
                      <Image
                        src={image.src || "/lf6.jpg"}
                        alt={image.alt}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedImage(image)}
                            className="p-2 bg-white rounded-full text-purple-600 hover:text-purple-700"
                          >
                            <ZoomIn className="w-6 h-6" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white rounded-full text-purple-600 hover:text-purple-700"
                          >
                            <Heart className="w-6 h-6" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white rounded-full text-purple-600 hover:text-purple-700"
                          >
                            <Share2 className="w-6 h-6" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{image.description}</h3>
                      <p className="text-sm text-gray-600">{image.location} • {image.date}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={selectedImage.src || "/placeholder.png"}
                      alt={selectedImage.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {selectedImage.description}
                        </h3>
                        <p className="text-gray-600">
                          {selectedImage.location} • {selectedImage.date}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <X className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1">
                        <Heart className="w-4 h-4 mr-2" />
                        Like
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryGrid
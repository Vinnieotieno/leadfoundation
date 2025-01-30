'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Share2, CalendarPlus, Filter, Bell } from 'lucide-react'
import { format, differenceInDays } from 'date-fns'

const UpcomingEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'seminar', name: 'Seminars' },
    { id: 'volunteer', name: 'Volunteer' },
    { id: 'symposium', name: 'Symposiums' }
  ]

  const events = [
    {
      id: 1,
      title: "Awaken Your Imagination Workshop",
      date: "2026-07-24",
      time: "09:00 AM - 04:00 PM",
      location: "Innovation Hub, Nairobi",
      category: "workshop",
      description: "Explore your creativity at our dynamic workshop. Awaken your artistic dreams and make them a reality.",
      capacity: 50,
      registered: 32,
      image: "/workshop.jpg"
    },
    {
      id: 2,
      title: "Green Thumb Volunteer Day",
      date: "2026-08-23",
      time: "08:00 AM - 02:00 PM",
      location: "Community Gardens, Mombasa",
      category: "volunteer",
      description: "Join us for an enriching volunteer experience at our Green Thumb Volunteer Day.",
      capacity: 100,
      registered: 45,
      image: "/volunteer.jpg"
    },
    {
      id: 3,
      title: "Access to Health Symposium",
      date: "2026-10-14",
      time: "10:00 AM - 05:00 PM",
      location: "Medical Center, Kampala",
      category: "symposium",
      description: "Participate in the Access to Health Symposium to tackle healthcare issues affecting disadvantaged groups.",
      capacity: 200,
      registered: 150,
      image: "/events/health.jpg"
    },
    {
      id: 4,
      title: "Education Empowerment Seminar",
      date: "2026-12-07",
      time: "02:00 PM - 06:00 PM",
      location: "Learning Center, Dar es Salaam",
      category: "seminar",
      description: "Uncover educational empowerment at our seminar. Break barriers to prosperity.",
      capacity: 150,
      registered: 89,
      image: "/education.jpg"
    }
  ]

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter)

  const calculateDaysLeft = (eventDate) => {
    return differenceInDays(new Date(eventDate), new Date())
  }

  const handleShare = (event) => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
    }
  }

  const addToCalendar = (event) => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.date.replace(/-/g, '')}/${event.date.replace(/-/g, '')}`
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lf6.jpg')",
            filter: 'blur(50px)'
          }}
        />
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
              Upcoming Initiatives & Gatherings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 text-lg max-w-2xl mx-auto"
            >
              Be part of our transformative events and workshops, engaging with diverse communities 
              for sustainable impact. Inspire, innovate, and network with fellow changemakers.
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

          {/* Events Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${event.image || "/placeholder.svg"})`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="mb-2 bg-purple-600">
                            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-white/90 text-sm line-clamp-2">{event.description}</p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                            <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-2 text-purple-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="w-5 h-5 mr-2 text-purple-600" />
                            <span>{event.registered}/{event.capacity} Registered</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleShare(event)}
                            >
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => addToCalendar(event)}
                            >
                              <CalendarPlus className="w-4 h-4 mr-1" />
                              Add to Calendar
                            </Button>
                          </div>
                          
                          <Button 
                            variant="default"
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            Register Now
                          </Button>
                        </div>

                        {calculateDaysLeft(event.date) <= 30 && (
                          <div className="mt-4 flex items-center justify-center bg-purple-50 rounded-lg p-2">
                            <Bell className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-sm text-purple-600 font-medium">
                              Only {calculateDaysLeft(event.date)} days left to register!
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600">No events found for this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default UpcomingEvents
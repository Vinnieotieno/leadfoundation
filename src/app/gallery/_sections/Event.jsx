'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Share2, CalendarPlus, Bell, Filter, ChevronRight, Heart, Sparkles } from 'lucide-react'
import { format, differenceInDays, parseISO, addHours } from 'date-fns'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UpcomingEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [registeredMembers, setRegisteredMembers] = useState({})
  const [hoveredEvent, setHoveredEvent] = useState(null)

  const categories = [
    { id: 'all', name: 'All Events', icon: Filter },
    { id: 'workshop', name: 'Workshops', icon: Users },
    { id: 'seminar', name: 'Seminars', icon: Calendar },
    { id: 'volunteer', name: 'Volunteer', icon: Heart },
    { id: 'symposium', name: 'Symposiums', icon: Sparkles }
  ]

  const events = [
    {
      id: 1,
      title: "Awaken Your Imagination Workshop",
      date: "2026-07-24",
      time: "09:00 AM - 04:00 PM",
      location: "Innovation Hub, Nairobi",
      category: "workshop",
      description: "Explore your creativity at our dynamic workshop. Unleash your potential and discover new horizons of imagination.",
      capacity: 50,
      registered: 32,
      image: "/lf7.jpg"
    },
    {
      id: 2,
      title: "Green Thumb Volunteer Day",
      date: "2026-08-23",
      time: "08:00 AM - 02:00 PM",
      location: "Community Gardens, Kibera",
      category: "volunteer",
      description: "Join us for an enriching volunteer experience. Make a difference in your community while learning sustainable gardening practices.",
      capacity: 100,
      registered: 45,
      image: "/lf6.jpg"
    }
  ]

  useEffect(() => {
    setRegisteredMembers(events.reduce((acc, event) => {
      acc[event.id] = event.registered;
      return acc;
    }, {}));
  }, [])

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter)

  const calculateDaysLeft = (eventDate) => {
    return differenceInDays(new Date(eventDate), new Date())
  }

  const handleShare = (platform, event) => {
    const shareText = `${event.title}: ${event.description}. Join us at ${event.location} on ${format(new Date(event.date), 'PPP')}.`;
    const shareUrl = encodeURIComponent(window.location.href);
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + window.location.href)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&summary=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${shareUrl}`
    };
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  }

  const addToCalendar = (event) => {
    const [startTime, endTime] = event.time.split(' - ');
    const startDate = parseISO(`${event.date}T${startTime}`);
    const endDate = parseISO(`${event.date}T${endTime}`);
    
    // Adjust end date if it's on the next day
    const adjustedEndDate = endDate < startDate ? addHours(endDate, 24) : endDate;
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/-|:|\.\d\d\d/g, '')}/${adjustedEndDate.toISOString().replace(/-|:|\.\d\d\d/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  }

  const registerOnWhatsApp = (event) => {
    setRegisteredMembers(prev => ({ ...prev, [event.id]: prev[event.id] + 1 }));
    const whatsappMessage = `Hello, I would like to register for ${event.title} on ${event.date} at ${event.location}.`;
    window.open(`https://wa.me/254797398004?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/events-pattern.png')",
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Upcoming Events & Gatherings
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join us in our mission to create lasting positive change. Explore our upcoming events and be part of the transformation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
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
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
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
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="mb-2 bg-purple-600">
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
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
                          <span>{registeredMembers[event.id]}/{event.capacity} Registered</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Share2 className="w-4 h-4 mr-1" />
                                Share
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem onClick={() => handleShare('whatsapp', event)}>
                                WhatsApp
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare('facebook', event)}>
                                Facebook
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare('linkedin', event)}>
                                LinkedIn
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare('twitter', event)}>
                                Twitter
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
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
                          onClick={() => registerOnWhatsApp(event)}
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          Register Now
                          <ChevronRight className="w-4 h-4 ml-1" />
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

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600">No events found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default UpcomingEvents
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, Facebook, Twitter, Instagram, LinkedinIcon as LinkedIn } from 'lucide-react'
import { toast } from 'sonner'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subject: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate my API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitted(true)
      toast.success('Message sent successfully!')
      
      // this will Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          subject: ''
        })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 705 825597", "254 7567 8900"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@leadfoundationafrica.org", "support@leadfoundationafrica.org"],
      color: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Nairobi, Kenya"],
      color: "text-pink-600"
    }
  ]

  return (
    <section className="relative min-h-screen mt-12 py-20 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      {/* this my Background Elements */}
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Let's Make a Difference Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-700 text-lg max-w-2xl mx-auto"
            >
              Reach out to us and be part of the transformation across Africa. 
              Your message could be the beginning of something extraordinary.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-white shadow-md ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Social Media Links */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, color: "hover:text-blue-600" },
                      { icon: Twitter, color: "hover:text-blue-400" },
                      { icon: Instagram, color: "hover:text-pink-600" },
                      { icon: LinkedIn, color: "hover:text-blue-700" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-gray-600 transition-colors ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="bg-white/50 border-gray-200 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="bg-white/50 border-gray-200 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/50 border-gray-200 focus:border-purple-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/50 border-gray-200 focus:border-purple-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white/50 border-gray-200 focus:border-purple-500 min-h-[150px]"
                        required
                      />
                    </div>

                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : submitted ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <span className="flex items-center justify-center">
                              Send Message
                              <Send className="ml-2 w-5 h-5" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </AnimatePresence>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036273116!2d36.70730744863281!3d-1.3031933000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1643811042642!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
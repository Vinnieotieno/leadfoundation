"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

const images = ["/b4.jpg", "/b2.jpg", "/b3.jpg"]

const sections = [
  { id: "about", title: "About Us" },
  { id: "mission", title: "Our Mission" },
  { id: "vision", title: "Our Vision" },
  { id: "impact", title: "Our Impact" },
]

export default function BethesdaJoyland() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeSection, setActiveSection] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId].scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-100 mt-12">
      <main>
        <section className="relative mt-12 h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex] || "/b2.jpg"}
                alt={`Bethesda Joyland Centre Academy ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="absolute mt-8 left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-3 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-3 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
          </motion.button>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center mb-4 md:mb-8"
            >
              Bethesda Joyland Centre Academy
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4"
            >
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section.id)}
                  className="px-2 py-1 md:px-4 md:py-2 bg-white bg-opacity-20 text-white text-sm md:text-base rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  {section.title}
                </motion.button>
              ))}
            </motion.div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </motion.div>
        </section>

        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            id={section.id}
            className={`py-12 md:py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">{section.title}</h2>
              <div className="max-w-3xl mx-auto">
                {section.id === "about" && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      Bethesda Joyland Centre Academy, founded in 2017 by Apostle Samwel Odida and his wife Lavender
                      Maureen, is located on Mfangano Island, Kenya, at the banks of Lake Victoria. Our mission is to
                      bring hope to orphans and vulnerable children in Mfangano Island and its surroundings.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      The school started with 20 orphans and has grown to care for 180 vulnerable and orphaned children.
                      We provide a nurturing environment where children can build their faith in God, excel
                      academically, and develop their talents.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      Bethesda Joyland Centre aims to address the challenges faced by the Mfangano Island community,
                      including the impacts of HIV/AIDS, COVID-19, and environmental issues such as deforestation and
                      overfishing.
                    </p>
                  </>
                )}
                {section.id === "mission" && (
                  <p className="text-gray-700 leading-relaxed text-center text-lg md:text-xl italic">
                    "Inspire students to be followers of Jesus by equipping them to serve, lead and transform their
                    world."
                  </p>
                )}
                {section.id === "vision" && (
                  <p className="text-gray-700 leading-relaxed text-center text-lg md:text-xl italic">
                    "To glorify God by advancing kingdom education and demonstrating excellence in academics and
                    co-curricular activities."
                  </p>
                )}
                {section.id === "impact" && (
                  <ul className="list-none text-gray-700 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
                    {[
                      "Providing care and education to 180 vulnerable and orphaned children",
                      "Nurturing children's faith and moral development",
                      "Offering a comprehensive education program",
                      "Developing talents through music and arts programs",
                      "Addressing community challenges through education and mentorship",
                      "Providing hope and a sense of family to children affected by HIV/AIDS and COVID-19",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Bethesda Joyland Centre Academy. All rights reserved.
          </p>
          <p className="mt-2 text-sm md:text-base">Mfangano Island, Kenya</p>
        </div>
      </footer>

      {!isMobile && (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-1 mx-1 text-sm rounded-full transition-all duration-300 ${
                activeSection === section.id ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {section.title}
            </motion.button>
          ))}
        </nav>
      )}
    </div>
  )
}


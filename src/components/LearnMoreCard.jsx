import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LearnMoreCard({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">About Lead Africa Foundation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 transition">
            <X size={28} />
          </button>
        </div>
        <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
          <p>
            Lead Africa Foundation is a non-profit organization dedicated to empowering communities across Africa
            through education, healthcare, and sustainable development initiatives.
          </p>
          <p>
            Our mission is to create lasting change by providing resources, skills, and opportunities to individuals and
            communities, enabling them to lead their own development and build a brighter future for Africa.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900">Our Key Focus Areas:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Education and Skills Development</li>
            <li>Healthcare and Wellness Programs</li>
            <li>Sustainable Agriculture and Food Security</li>
            <li>Women and Youth Empowerment</li>
            <li>Technology and Innovation</li>
          </ul>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mt-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Reach Out for More Information</h3>
            <p className="mb-5 text-gray-800">
              We'd love to hear from you! Get in touch with us for more details about our programs or how you can get
              involved.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-transform hover:scale-105">
              <a href="mailto:contact@leadafricafoundation.org" className="text-white no-underline">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LearnMoreCard({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">About Lead Africa Foundation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4 text-gray-700">
          <p>
            Lead Africa Foundation is a non-profit organization dedicated to empowering communities across Africa
            through education, healthcare, and sustainable development initiatives.
          </p>
          <p>
            Our mission is to create lasting change by providing resources, skills, and opportunities to individuals and
            communities, enabling them to lead their own development and build a brighter future for Africa.
          </p>
          <h3 className="text-xl font-semibold">Our Key Focus Areas:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Education and Skills Development</li>
            <li>Healthcare and Wellness Programs</li>
            <li>Sustainable Agriculture and Food Security</li>
            <li>Women and Youth Empowerment</li>
            <li>Technology and Innovation</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-2">Reach Out for More Information</h3>
            <p className="mb-4">
              We'd love to hear from you! Get in touch with us for more details about our programs or how you can get
              involved.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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


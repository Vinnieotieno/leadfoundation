"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LinkedinIcon as LinkedIn, Twitter, Mail, ArrowUpRight, Users, UserCog, Globe } from "lucide-react";

const TeamMemberCard = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-2xl shadow-lg p-6 transition-all hover:shadow-2xl"
  >
    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold text-center text-gray-800">{member.name}</h3>
    <p className="text-center text-purple-600 text-sm">{member.role}</p>
    <p className="text-center text-gray-600 mt-2 text-sm">{member.bio}</p>
    <p className="text-center text-gray-500 mt-2 text-xs">{member.experience}</p>
    <p className="text-center text-gray-500 text-xs">{member.location}</p>
    <div className="flex justify-center gap-2 mt-4">
      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110">
        <LinkedIn className="w-5 h-5" />
      </a>
      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110">
        <Twitter className="w-5 h-5" />
      </a>
      <a href={member.social.email} className="text-purple-600 hover:scale-110">
        <Mail className="w-5 h-5" />
      </a>
      {member.website && (
        <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:scale-110">
          <Globe className="w-5 h-5" />
        </a>
      )}
    </div>
    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm text-purple-600 font-semibold flex items-center justify-center">
      View Full Profile <ArrowUpRight className="w-4 h-4 ml-1" />
    </a>
  </motion.div>
);

const TeamSection = () => {
  const [selectedTab, setSelectedTab] = useState("board");

  const teams = {
    board: [
      {
        id: 1,
        name: "Clarian Makungu",
        role: "Director Lead Foundation Africa",
        image: "/clarian.jpg",
        bio: "Pioneering health through community initiatives.",
        expertise: ["Community Health", "Program Development", "Strategic Planning"],
        experience: "15 years in public health initiatives across Africa.",
        location: "Nairobi, Kenya",
        website: "https://clarianmakungu.com",
        social: {
          linkedin: "https://linkedin.com/in/clarian",
          twitter: "https://twitter.com/clarian",
          email: "mailto:clarian@leadafoundationafrica.org",
        },
      },
      {
        id: 2,
        name: "Samuel Kironyo",
        role: "Board Member",
        image: "/sam.jpg",
        bio: "Drives to uplift underserved communities through sustainable initiatives.",
        expertise: ["Project Management", "Community Engagement", "Strategic Planning"],
        experience: "10 years in community leadership.",
        location: "Mombasa, Kenya",
        website: "https://samuelkironyo.com",
        social: {
          linkedin: "https://linkedin.com/in/samuel",
          twitter: "https://twitter.com/samuel",
          email: "mailto:sam@leadfoundationafrica.org",
        },
      },
      {
        id: 3,
        name: "Roselyne Brown",
        role: "Board Member",
        image: "/roselyne.jpg",
        bio: "Dedicated to promoting long-term growth in communities across Africa.",
        expertise: ["Program Management", "Leadership Development", "Strategic Planning"],
        experience: "12 years in program management.",
        location: "Kigali, Rwanda",
        website: "https://roselynebrown.com",
        social: {
          linkedin: "https://linkedin.com/in/roselyne",
          twitter: "https://twitter.com/roselyne",
          email: "mailto:roselyne@leadfoundationafrica.org",
        },
      },
      {
        id: 4,
        name: "James Otieno",
        role: "Board Member",
        image: "/james.jpg",
        bio: "Passionate about sustainable development and policy-making.",
        expertise: ["Policy Development", "Economic Planning", "Sustainability"],
        experience: "18 years in economic planning.",
        location: "Accra, Ghana",
        website: "https://jamesotieno.com",
        social: {
          linkedin: "https://linkedin.com/in/james",
          twitter: "https://twitter.com/james",
          email: "mailto:james@leadfoundationafrica.org",
        },
      },
    ],
    management: [
      {
        id: 5,
        name: "Dr. Patrick Maina",
        role: "Executive Director",
        image: "/patrick.jpg",
        bio: "Leading strategic initiatives for community development.",
        expertise: ["Strategic Leadership", "Community Development", "Healthcare"],
        experience: "20 years in strategic leadership.",
        location: "Nairobi, Kenya",
        website: "https://patrickmaina.com",
        social: {
          linkedin: "https://linkedin.com/in/patrick",
          twitter: "https://twitter.com/patrick",
          email: "mailto:patrick@leadfoundationafrica.org",
        },
      },
      {
        id: 6,
        name: "Lucy Luna",
        role: "Program Manager",
        image: "/lucy.jpg",
        bio: "Implementing effective community programs across regions.",
        expertise: ["Program Implementation", "Team Leadership", "Community Outreach"],
        experience: "14 years in program management.",
        location: "Lagos, Nigeria",
        website: "https://lucyluna.com",
        social: {
          linkedin: "https://linkedin.com/in/lucy",
          twitter: "https://twitter.com/lucy",
          email: "mailto:lucy@leadfoundationafrica.org",
        },
      },
      {
        id: 7,
        name: "Eric Chivumba",
        role: "Operations Manager",
        image: "/eric.jpg",
        bio: "Ensuring smooth operational execution of all initiatives.",
        expertise: ["Operations Management", "Process Optimization", "Team Coordination"],
        experience: "16 years in operational leadership.",
        location: "Dar es Salaam, Tanzania",
        website: "https://ericchivumba.com",
        social: {
          linkedin: "https://linkedin.com/in/eric",
          twitter: "https://twitter.com/eric",
          email: "mailto:eric@leadfoundationafrica.org",
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Leadership</h2>
        <Tabs defaultValue="board" className="mb-12">
          <TabsList className="flex justify-center mb-6 space-x-4">
            <TabsTrigger value="board">Board of Directors</TabsTrigger>
            <TabsTrigger value="management">Management Team</TabsTrigger>
          </TabsList>
          <TabsContent value="board">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.board.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="management">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.management.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;

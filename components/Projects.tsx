"use client"; // Required for Next.js with Framer Motion

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "FitTrack Pro",
    description: "A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.",
    image: "/Thumbnail.png",
  },
  {
    title: "EcoScan",
    description: "An app that helps users identify eco-friendly products by scanning barcodes and providing sustainability ratings.",
    image: "/Travel.jpg",
  },
  {
    title: "MindfulMinutes",
    description: "A meditation and mindfulness app with guided sessions and progress tracking.",
    image: "/1.png",
  },
  {
    title: "CodeMaster",
    description: "An interactive coding practice platform with real-time feedback and AI guidance.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: 100,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-slate-100 text-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ y: 10 }}
              animate={{ y: [-10, 10, -10] }} // Subtle floating animation
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="px-4"
            >
              <Card className="shadow-lg border border-gray-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                />
                <CardHeader className="bg-white text-center py-5">
                  <CardTitle className="text-xl font-semibold text-gray-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 text-center bg-gray-50 text-gray-600">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

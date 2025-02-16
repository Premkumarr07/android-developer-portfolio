"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faReact,
  faNodeJs,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
  faAndroid,
  faJava,
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faC,
  faDatabase,
  faCode,
  faPenNib,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "Figma", icon: faFigma, color: "#F24E1E" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Android Studio", icon: faAndroid, color: "#3DDC84" },
  { name: "Kotlin", icon: faMobile, color: "#7F52FF" },
  { name: "Jetpack Compose", icon: faCode, color: "#4285F4" },
  { name: "Java", icon: faJava, color: "#007396" },
  { name: "Node.js", icon: faNodeJs, color: "#83CD29" },
  { name: "Redux", icon: faCode, color: "#764ABC" },
  { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "Firebase", icon: faDatabase, color: "#FFCA28" },
  { 
    name: "Dart", 
    icon: null, // No FontAwesome icon for Dart
    color: "#00B4AB", 
    imagePath: "/icons8-dart.svg" // Path to downloaded Dart icon
  },
  { name: "Flutter", icon: faFlutter, color: "#02569B" },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-white text-gray-900 py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Particles (Optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-20 w-32 h-32 bg-gray-200 opacity-20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-24 h-24 bg-gray-300 opacity-25 rounded-full blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-wide text-gray-800">
          My Skills 💡
        </h2>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group w-24 h-24 flex flex-col items-center justify-center 
                         bg-gray-100 rounded-xl p-5 
                         shadow-md transition-all border border-gray-200 
                         hover:border-gray-400 hover:shadow-xl hover:bg-gray-200 relative overflow-hidden"
            >
              {/* Render Icon or Image */}
              {skill.icon ? (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-4xl mb-2 group-hover:drop-shadow-lg transition-transform"
                  style={{ color: skill.color }}
                />
              ) : (
                <img
                  src={skill.imagePath}
                  alt={skill.name}
                  className="w-12 h-12 mb-2 group-hover:drop-shadow-lg transition-transform"
                />
              )}
              <span className="text-sm text-center text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

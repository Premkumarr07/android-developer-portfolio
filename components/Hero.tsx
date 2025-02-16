"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="py-20 bg-[#1a212e] text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Android Developer <br />
            <span className="text-white">
              <Typewriter
                words={["Prem Kumar"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                delaySpeed={3000} // Increased delay for better effect
              />
            </span>
          </h1>

          <p className="text-xl mb-8">I Derive Inspiration to Reality</p>

          <a href="https://github.com/Premkumarr07" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#378146] hover:bg-[#2e6b3d] text-white transition-all duration-300">
              View My Work
            </Button>
          </a>
        </div>

        {/* Image Content */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/1738773732586.gif"
            alt="Android Logo"
            className="w-80 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

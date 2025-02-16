"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-[#1a212e] text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
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
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </span>
          </h1>

          <p className="text-xl mb-8">Turning Inspiration into Reality</p>

          <a href="https://github.com/Premkumarr07" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#378146] hover:bg-[#2e6b3d] text-white transition-all duration-300 shadow-md">
              View My Work
            </Button>
          </a>
        </div>

        {/* ✅ Replaced <img> with Next.js <Image> */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/1738773732586.gif"
            alt="Android Developer"
            width={320} // Adjust width as needed
            height={320} // Adjust height as needed
            className="rounded-lg shadow-lg object-contain"
            priority // Ensures fast loading
          />
        </div>
      </div>
    </section>
  );
}

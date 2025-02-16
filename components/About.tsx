"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100"> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">About Me</h2>

        {/* Circular Photo Frame with Animation */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full border-4 border-green-400 overflow-hidden relative animate-spin-slow shadow-lg">
            <div className="absolute inset-0 border-4 border-dashed border-green-500 rounded-full animate-pulse"></div>
            <img
              src="/1688210744190.jpg"
              alt="Prem Bhai Portfolio"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-700 mb-6">
            I'm a passionate Android developer with <span className="font-semibold text-green-600">2+ years</span> of experience in creating innovative and user-friendly
            mobile applications. My expertise includes <span className="font-semibold">Java, Kotlin</span>, and the latest Android development tools and libraries.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying a good cup of coffee while brainstorming my next big app idea.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center mt-6">
          <a 
            href="/Prem_Kumar.pdf" 
            download
            className="px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 flex items-center"
          >
            <i className="fas fa-download mr-2"></i> Resume
          </a>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/Premkumarr07" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl text-slate-700 hover:text-green-500 transition-all"></i>
          </a>
          <a href="https://www.linkedin.com/in/premkumar07/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl text-slate-700 hover:text-green-500 transition-all"></i>
          </a>
          <a href="https://x.com/Android100X" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter text-2xl text-slate-700 hover:text-green-500 transition-all"></i>
          </a>
          <a href="https://www.instagram.com/android100dev/#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl text-slate-700 hover:text-green-500 transition-all"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

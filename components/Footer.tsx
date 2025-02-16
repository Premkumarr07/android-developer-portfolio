"use client"; // Explicit Client Component Declaration

import React from "react";
import { MapPin, Phone, Mail, Globe, Github, LinkedinIcon } from "lucide-react"; // Updated LinkedinIcon

const Footer: React.FC = () => {
    return (
        <footer
            className="relative bg-[#1A212F] text-white py-8 overflow-hidden"
            aria-label="Business Card Style Footer"
        >
            {/* Green Curved Background */}
            <div className="absolute inset-0 -z-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        fill="#378146" // Green for the curved design
                        d="M0,256L60,245.3C120,235,240,213,360,197.3C480,181,600,171,720,192C840,213,960,267,1080,272C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-stretch relative">
                {/* Left Section */}
                <div className="md:w-1/2 pr-8 py-4">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-1 text-[#378146]">Prem Kumar</h2>
                        <p className="text-gray-300 text-sm mb-4">Android Developer</p>
                        <div className="mb-2 flex items-start">
                            <Phone className="h-4 w-4 mr-2 text-[#378146] mt-0.5" />
                            <p className="text-gray-200 text-sm">+91 945681xxx</p>
                        </div>
                        <div className="mb-2 flex items-start">
                            <Globe className="h-4 w-4 mr-2 text-[#378146] mt-0.5" />
                            <p className="text-gray-200 text-sm">My Portfolio</p>
                        </div>
                        <div className="mb-2 flex items-start">
                            <Mail className="h-4 w-4 mr-2 text-[#378146] mt-0.5" />
                            <p className="text-gray-200 text-sm">premkumarshankar200@gmail.com</p>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 text-[#378146] mt-0.5" />
                            <p className="text-gray-200 text-sm">N/A</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 pl-8 py-4 md:border-l md:border-gray-700 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#378146] text-white font-bold px-4 py-2 rounded-md mb-4">
                            Android Developer
                        </div>
                        <div className="w-24 h-24 rounded-full bg-gray-600 overflow-hidden">
                            <img
                                src="/article_icon_effect.gif"
                                alt="Prem Kumar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Prem Kumar. All rights reserved.
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/Premkumarr07" className="hover:text-lime-300">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/premkumar07/" className="hover:text-lime-300">
                        <LinkedinIcon className="h-6 w-6" />
                    </a>
                    <a href="mailto:premkumarshankar2002@gmail.com" className="hover:text-lime-300">
                        <Mail className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

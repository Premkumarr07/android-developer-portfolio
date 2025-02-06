import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2023 Android Dev. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/Premkumarr07" className="hover:text-lime-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-lime-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-lime-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


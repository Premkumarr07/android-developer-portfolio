import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-teal-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Android Dev</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-lime-300">
            About
          </a>
          <a href="#projects" className="hover:text-lime-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-lime-300">
            Contact
          </a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}


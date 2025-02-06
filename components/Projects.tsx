import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "FitTrack Pro",
    description: "A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "EcoScan",
    description:
      "An app that helps users identify eco-friendly products by scanning barcodes and providing sustainability ratings.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "MindfulMinutes",
    description: "A meditation and mindfulness app with guided sessions and progress tracking.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


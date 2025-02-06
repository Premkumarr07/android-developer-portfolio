import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="bg-gradient-to-t from-[#30cfd0] to-[#330867] text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Android Developer Extraordinairez</h1>
        <p className="text-xl mb-8">Crafting beautiful and functional mobile experiences</p>
        <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white">
          View My Work
        </Button>
      </div>
    </section>
  );
}

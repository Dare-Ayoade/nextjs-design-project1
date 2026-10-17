import { PortfolioCard } from "@/components/PortfolioCard";
import { Dock } from "@/components/Dock";

const projects = [
  {
    title: "Aqua Flow",
    description: "Vibrant water ripple physics engine with real-time refraction.",
    type: "aqua-flow" as const,
  },
  {
    title: "Lush Orbit",
    description: "Nature-inspired 3D visualization for environmental data.",
    type: "lush-orbit" as const,
  },
  {
    title: "Metal Mesh",
    description: "Industrial interface design system for heavy machinery.",
    type: "metal-mesh" as const,
  },
  {
    title: "Crystal Prism",
    description: "Geometric refractive optics study and generative art.",
    type: "crystal-prism" as const,
  },
  {
    title: "Sunburst Lens",
    description: "High-dynamic range lighting effects for modern web apps.",
    type: "sunburst-lens" as const,
  },
  {
    title: "Gel Buttons",
    description: "Tactile interaction design library for mobile interfaces.",
    type: "gel-button" as const,
  },
  {
    title: "Aurora Wave",
    description: "Fluid gradient background generator with motion physics.",
    type: "aurora-wave" as const,
  },
  {
    title: "Frosted Pane",
    description: "Glassmorphic UI component set with realistic blur.",
    type: "frosted-pane" as const,
  },
];

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 pb-48">
      {/* Hero Section */}
      <header className="mb-32 text-center animate-in fade-in slide-in-from-top-10 duration-1000">
        <div className="inline-block px-4 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-blue-600 text-sm font-semibold mb-6 skeuo-bezel">
          Design Showcase 2026
        </div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-8 aero-text">
          AeroSkeuo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A responsive portfolio blending the vibrant energy of{" "}
          <span className="text-blue-500 font-bold">Frutiger Aero</span> with the
          meticulous precision of{" "}
          <span className="text-gray-900 font-bold">early 2010s Apple</span> design.
        </p>
      </header>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="animate-in fade-in zoom-in-95 duration-700"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
          >
            <PortfolioCard {...project} />
          </div>
        ))}
      </section>

      {/* Footer / Contact */}
      <footer className="mt-40 text-center text-gray-400 text-sm">
        <p>© 2026 AeroSkeuo Design. All rights reserved.</p>
        <p className="mt-2 italic">Crafted with gloss and glass.</p>
      </footer>

      {/* Navigation */}
      <Dock />
    </main>
  );
}

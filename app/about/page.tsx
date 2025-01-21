import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#DBD5C6]">
      <Navigation />
      <div className="min-h-screen max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-[#4E4E4E]"
              style={{ fontFamily: "'Aboreto', serif" }}
            >
              ABOUT ME
            </h1>
            <div className="space-y-6 text-[#4E4E4E] max-w-xl">
              <p className="leading-relaxed">
                Ik ben Han Ly Vu Trang, een creatieve professional met een
                multidisciplinaire aanpak. Mijn focus ligt op het leveren van
                hoogwaardige oplossingen die merken helpen om zich
                onderscheidend te positioneren. Of het nu gaat om het
                ontwikkelen van een logo, een website, of een complete
                brandguide, ik zorg ervoor dat elk onderdeel perfect aansluit
                bij de identiteit en doelstellingen van het merk.
              </p>
              <p className="leading-relaxed">
                Daarnaast denk ik graag strategisch mee over de
                merkpositionering en -beleving. Samen ontwikkelen we concepten
                en visuele vertalingen die impact maken en de
              </p>
            </div>
            <Link
              href="/project"
              className="inline-block text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300 border-b border-current"
            >
              VIEUW MY PROJECTS →
            </Link>
          </div>
          <div className="aspect-[3/4] w-full bg-gray-200">
            {/* Placeholder for image - to be added later */}
          </div>
        </div>
      </div>
    </main>
  );
}

import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#DBD5C6]">
      <Navigation />
      <div className="min-h-screen max-w-7xl mx-auto px-4 py-20 md:py-22 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-[#4E4E4E]"
              style={{ fontFamily: "'Aboreto', serif" }}
            >
              ABOUT ME
            </h1>
            <div className="space-y-6 text-[#4E4E4E] max-w-xl mx-auto md:mx-0">
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
            <div className="text-center md:text-left">
              <Link
                href="/project"
                className="inline-block text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300 border-b border-current"
              >
                VIEW MY PROJECTS →
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-max h-auto">
              <Image
                src="/images/Hanly_Foto.svg"
                alt="Hanly Foto"
                width={320}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

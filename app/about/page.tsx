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
                Mijn naam is Han Ly Vu Trang en ik ben een creatieve,
                multidisciplinaire tweedejaarsstudent HBO-ICT (Media Design) aan
                Fontys in Tilburg. Met een passie voor hoogwaardige oplossingen
                help ik merken zich onderscheidend te positioneren, of het nu
                gaat om het ontwikkelen van een logo, een website of een
                complete brandguide. Ik zorg ervoor dat elk onderdeel perfect
                aansluit bij de identiteit en doelstellingen van het merk.
              </p>
              <p className="leading-relaxed">
                Hoewel ik nog niet alles van Webflow beheers, ben ik erg
                gemotiveerd om het platform te leren en toe te passen in
                praktijkprojecten. Ik heb veel ideeën en wil deze vertalen naar
                sterke, goed doordachte websites. Met mijn brede blik, oog voor
                detail en leergierige houding streef ik ernaar om elk project
                tot in perfectie uit te voeren, zodat merken écht kunnen
                opvallen en groeien. Laat het gerust weten als je nog iets wilt
                aanpassen!
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

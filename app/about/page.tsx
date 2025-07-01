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
                Fontys in Tilburg. Met een passie voor hoogwaardige digitale
                oplossingen help ik merken zich onderscheidend te positioneren,
                of het nu gaat om het ontwikkelen van een website, een
                interactieve interface of een complete brandguide. Ik zorg
                ervoor dat elk onderdeel perfect aansluit bij de identiteit en
                doelstellingen van het merk.
              </p>
              <p className="leading-relaxed">
                Hoewel ik nog volop bezig ben met het verder ontwikkelen van
                mijn front-end vaardigheden, heb ik al een goede basis in HTML,
                CSS, JavaScript en React (met Next.js). Ik ben daarnaast
                gemotiveerd om Webflow beter te leren en in te zetten in
                praktijkprojecten. Ik heb veel creatieve ideeën en wil deze
                vertalen naar sterke, gebruiksvriendelijke en visueel
                aantrekkelijke websites.
              </p>{" "}
              <p className="leading-relaxed">
                Met mijn brede blik, oog voor detail en leergierige houding
                streef ik ernaar om elk project technisch en visueel tot in de
                puntjes uit te werken, zodat merken écht kunnen opvallen en
                groeien.
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

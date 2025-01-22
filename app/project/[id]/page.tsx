import { notFound } from "next/navigation";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Dit zou normaal gesproken uit een database of API komen
const projects = [
  {
    id: 1,
    title: "Upendo",
    coverImage: "/images/Upendo_Logo.svg?height=600&width=1200",
    description:
      "Upendo is een nieuwe tak die 2manydots graag wil ontwikkelen naast het bedenken en maken van websites. Naast het bouwen van websites willen ze ook focussen op het analyseren van deze websites. Daarom creëren ze Upendo, een onderdeel van 2md dat verschillende services biedt op het gebied van data-analyse voor websites. Upendo is een bedrijf dat simpelheid wil overbrengen naar de klant. Het doel van Upendo is dat klanten, na het bestellen en betalen voor het maken van een website, ook kiezen om gebruik te maken van Upendo.",
    date: "Januari 2024",
    tools: ["Figma", "Vscode"],
    reflection:
      "Dit project heeft me inzicht gegeven in hoe belangrijk een goede structuur is bij zowel design als development. Door de Double Diamond Methode toe te passen, heb ik geleerd om vanuit een breed perspectief te starten, de juiste elementen te definiëren, en vervolgens een gefocust en effectief ontwerp te ontwikkelen. Ondanks mijn beperkte ervaring met Storyblok en React, kon ik met elke sprint stappen maken en mezelf verder ontwikkele",
    images: [
      "/images/Upendo_Laptop_2.svg?height=400&width=600",
      "/images/Upendo_Laptop_3.svg?height=400&width=600",
      "/images/Upendo_telefoon.svg?height=400&width=600",
    ],
    additionalText: [
      "Het Upendo-project bood een uitdagende en leerzame ervaring waarin ik zowel mijn design- als developmentvaardigheden heb kunnen ontwikkelen. Het proces was verdeeld in drie sprints, elk met specifieke doelen en mijlpalen.",
      "Tijdens de eerste sprint richtte ik me op het begrijpen van de opdracht en de behoeften van de klant. Ik analyseerde verschillende data-analysewebsites, zoals ilionx, om inzicht te krijgen in hoe eenvoud en helderheid in complexe omgevingen kunnen worden toegepast. Vervolgens begon ik met het ontwerpen van een eerste mobiel design, gebaseerd op de brandguide van Upendo.",
      "In de tweede sprint lag de focus op het verfijnen en finaliseren van het design. Ik verwerkte de feedback en onderzocht vergelijkbare websites zoals Ventriloc om inspiratie op te doen voor een heldere en gebruiksvriendelijke inhoudsverdeling.",
      "De derde sprint richtte zich volledig op development. Mijn verantwoordelijkheid was de ontwikkeling van de analysis-pagina, een van de vijf servicepagina’s. Ik werkte aan de integratie tussen Storyblok en React en ontwikkelde herbruikbare componenten die op meerdere plekken konden worden toegepast.",
    ],
  },

  {
    id: 2,
    title: "Indi Janssen portfolio",
    coverImage: "/images/Indi_Janssen_Logo.svg?height=600&width=1200",
    description:
      "Dit project richt zich op de vraag in hoeverre het creatieve proces van website design en ontwikkeling afhankelijk is van menselijke input, of dat AI-technologieën deze taken grotendeels kunnen overnemen. De hypothese is dat menselijke ideeën cruciaal blijven bij conceptontwikkeling en klantgerichte oplossingen. Dit wordt getest door een praktijkexperiment waarin AI-tools worden ingezet in het design- en ontwikkelingsproces.",
    date: "December 2024",
    tools: ["Figma", "V0.dev", "ChatGPT", "React", "TailwindCSS", "Vscode"],
    reflection:
      "Het onderzoek naar de rol van menselijk brein en AI in websiteontwikkeling onthulde een waardevolle balans tussen creativiteit en technologie. Mijn handgemaakte ontwerp toonde emotionele connectie en unieke signatuur, terwijl AI-tools uitblonken in snelheid en technische precisie. Gebruikerstests benadrukten dat menselijke input essentieel is voor context en esthetiek, terwijl AI efficiëntie en schaalbaarheid biedt. Door de sterke punten van beide benaderingen te combineren, creëerde ik een geoptimaliseerd eindproduct dat zowel functioneel als inspirerend was. Deze ervaring onderstreepte hoe mens en AI elkaar kunnen aanvullen om betere resultaten te bereiken.",
    images: [
      "/images/Indi_1.svg?height=400&width=600",
      "/images/Indi_2.svg?height=400&width=600",
      "/images/Indi_3.svg?height=400&width=600",
    ],
    additionalText:
      "Mijn proces begon met een diepgaand onderzoek naar beschikbare AI-tools om te begrijpen wat er op de markt is en hoe deze technologieën specifieke taken in design en ontwikkeling kunnen ondersteunen. Dit gaf me de mogelijkheid om bewuste keuzes te maken over welke tools ik zou inzetten en waarvoor. Met deze kennis op zak ging ik aan de slag met het verzamelen van de eisen en wensen van de opdrachtgever, Indi. Dit was een cruciale stap om ervoor te zorgen dat het eindproduct zou aansluiten bij haar verwachtingen en behoeften.",
    additionalText1:
      "Daarna begon ik aan een eerste conceptontwerp, volledig vanuit mijn eigen creatieve vermogen. Zonder hulp van AI legde ik mijn ideeën vast om te zien hoe mijn menselijke brein een ontwerp zou aanpakken. Dit werd mijn referentiepunt voor de volgende stap: het inzetten van AI-tools. Ik onderzocht hoe AI kon bijdragen aan zowel het ontwerpen als ontwikkelen van de website en genereerde een nieuw ontwerp met behulp van deze technologieën.",
    additionalText2:
      "Met twee ontwerpen in handen—mijn handgemaakte concept en het door AI gegenereerde design—voerde ik gebruikerstests uit om de sterke en zwakke punten van beide methodes te identificeren. Feedback van Indi en andere testers gaf waardevolle inzichten in waar AI tekortschiet of juist uitblinkt. Op basis van deze feedback ging ik aan de slag met itereren en optimaliseren. Ik combineerde de unieke kracht van menselijke creativiteit met de snelheid en precisie van AI om een definitief ontwerp te creëren dat zowel esthetisch aantrekkelijk als functioneel en gebruiksvriendelijk was.",
    additionalText3:
      "Deze reis liet me zien hoe mens en AI elkaar kunnen aanvullen, en hoe ik beide kan inzetten om het beste resultaat te bereiken. Het eindproduct weerspiegelt deze samenwerking en biedt een optimale balans tussen technologie en menselijke input.",
  },

  {
    id: 3,
    title: "Marketing Loom",
    coverImage: "/images/Marketing_Loom_Logo.svg?height=600&width=1200",
    description: "Dit is een korte beschrijving van Project 1.",
    date: "Januari 2023",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    reflection:
      "Dit project was een uitdaging, maar ik heb er veel van geleerd...",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    additionalText:
      "Hier is wat extra informatie over het project en het proces...",
  },

  {
    id: 4,
    title: "Mcrace",
    coverImage: "/images/Mcrace_Logo.svg?height=600&width=1200",
    description: "Dit is een korte beschrijving van Project 1.",
    date: "Januari 2023",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    reflection:
      "Dit project was een uitdaging, maar ik heb er veel van geleerd...",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    additionalText:
      "Hier is wat extra informatie over het project en het proces...",
  },

  {
    id: 5,
    title: "ZCSL",
    coverImage: "/images/ZCSL_Logo.svg?height=600&width=1200",
    description: "Dit is een korte beschrijving van Project 1.",
    date: "Januari 2023",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    reflection:
      "Dit project was een uitdaging, maar ik heb er veel van geleerd...",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    additionalText:
      "Hier is wat extra informatie over het project en het proces...",
  },

  {
    id: 6,
    title: "Claudy",
    coverImage: "/images/Claudy_Logo.svg?height=600&width=1200",
    description: "Dit is een korte beschrijving van Project 1.",
    date: "Januari 2023",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    reflection:
      "Dit project was een uitdaging, maar ik heb er veel van geleerd...",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    additionalText:
      "Hier is wat extra informatie over het project en het proces...",
  },
];

//Deze functie wordt aangeroepen wanneer de pagina wordt bezocht

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#DBD5C6] min-h-screen">
      <Navigation />

      {/* Project Title */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl text-[#4E4E4E] text-center py-20"
        style={{ fontFamily: "'Aboreto', serif" }}
      >
        {project.title}
      </h1>

      {/* Cover Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Project Introduction */}
        <section className="mb-12">
          <p className="text-lg text-[#4E4E4E] mb-4">{project.description}</p>
          <p className="text-[#4E4E4E]">
            <strong>Datum:</strong> {project.date}
          </p>
          <p className="text-[#4E4E4E]">
            <strong>Gebruikte programma's:</strong> {project.tools.join(", ")}
          </p>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl text-[#4E4E4E] mb-4"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            Reflectie
          </h2>
          <p className="text-[#4E4E4E]">{project.reflection}</p>
        </section>

        {/* Additional Images */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, index) => (
            <div key={index} className="relative aspect-[3/2]">
              <Image
                src={img || "/placeholder.svg"}
                alt={`${project.title} - Afbeelding ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </section>

        {/* Additional Text */}
        <section>
          <h2
            className="text-2xl md:text-3xl text-[#4E4E4E] mb-4"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            Meer over dit project
          </h2>
          <p className="text-[#4E4E4E]">{project.additionalText}</p>
          <br></br>
          <p className="text-[#4E4E4E]">{project.additionalText1}</p>
          <br></br>
          <p className="text-[#4E4E4E]">{project.additionalText2}</p>
          <br></br>
          <p className="text-[#4E4E4E]">{project.additionalText3}</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}

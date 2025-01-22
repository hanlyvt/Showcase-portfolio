import { notFound } from "next/navigation";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProjectNavigation from "@/components/project-navigation";

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
      "De eerste sprint begon met het analyseren van data-analysewebsites zoals ilionx en het opstellen van een eerste mobiel ontwerp op basis van de brandguide. Samen met mijn medestudenten hebben we verschillende designelementen gecombineerd tot één ontwerp. Feedback van 2manydots benadrukte het gebruik van een grid voor betere uitlijning, het toevoegen van een Call to Action (CTA) aan het einde van pagina’s en het consistent  plaatsen van het logo linksboven. Ook werd het ontwerp met een donkergroene achtergrond goedgekeurd.",
    ],

    additionalText1: [
      "In de tweede sprint verwerkte ik de feedback en zocht ik naar inspiratie bij websites zoals Ventriloc. Dit leidde tot een definitief ontwerp voor zowel desktop- als mobiele versies. De feedback van 2manydots waardeerde de creatieve knoppen, maar benadrukte het belang van consistentie, balans en het beperken van het aantal kleuren tot twee. Tijdens deze sprint maakte ik ook een begin met de development-fase, waarbij ik werkte met Storyblok en React om de analysis-pagina te ontwikkelen.",
    ],

    additionalText2: [
      "In de derde sprint richtte ik me volledig op de ontwikkeling van de analysis-pagina, een van de vijf servicepagina’s. Ik koppelde Storyblok aan React en ontwikkelde herbruikbare componenten om het werkproces te versnellen. Na afronding van de pagina maakte ik deze responsief en documenteerde ik mijn werk via GitHub, inclusief een duidelijke README. Tijdens de retrospective noteerde ik feedback van 2manydots en reflecteerde ik samen met mijn team op wat goed ging en wat verbeterd kon worden.",
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
    description:
      "Voor mijn project The Marketing Loom ontwikkel ik een website die marketingprofessionals, ondernemers en bedrijfsleiders in Nederland dagelijks bijpraat over de nieuwste trends en ontwikkelingen in marketing. De website biedt artikelen, analyses, interviews, casestudies en marktdata, en geeft gebruikers de mogelijkheid om zich te abonneren op nieuwsbrieven en deel te nemen aan webinars en evenementen.",
    date: "Novmber 2025",
    tools: ["Figma", "V0.dev", "ChatGPT", "React", "TailwindCSS", "Vscode"],
    reflection:
      "Het project, dat na drie sprints is afgerond, verliep over het algemeen succesvol. Als groep hebben we een functionele en visueel aantrekkelijke website ontwikkeld die aansluit bij de behoeften van de doelgroep. Ik heb veel geleerd over user testing, het verwerken van feedback, en het effectief toepassen van designprincipes. Mijn rol in het ontwerpen en coderen van specifieke onderdelen, zoals de header en de interviewpagina, gaf me waardevolle praktijkervaring.",
    images: [
      "/images/Marketing_1.svg?height=400&width=600",
      "/images/Marketing_2.svg?height=400&width=600",
      "/images/Marketing_3.svg?height=400&width=600",
    ],
    additionalText:
      "Tijdens de eerste weken van het project speelde ik als Scrum Master een belangrijke rol in het bepalen van de richting en het verzamelen van ideeën binnen de groep. Ik verdiepte me in user stories, die ik aanvankelijk lastig vond, maar door bronnen van docenten te raadplegen kreeg ik hier snel meer grip op. Samen hebben we een scrum-bord opgezet en het Basic Design System ontworpen. Zelf analyseerde ik marketingnieuwswebsites, zoals The Verge, om inspiratie op te doen voor visuele elementen en wireframes. Om onze keuzes te valideren, organiseerde ik een usertest met studenten uit P8, wat ons waardevolle inzichten opleverde. Op basis van deze input werkte ik verder aan de brandguide, waarbij ik buttons ontwierp en componenten visualiseerde. De sprint werd afgerond met een presentatie aan 2manydots, waar we nuttige feedback kregen over onder andere kleurgebruik, leesbaarheid en dark mode.",
    additionalText1:
      "In de volgende fase lag mijn focus op het verwerken van de feedback van 2manydots. Hierbij werkte ik aan het verbeteren van knoppen, het optimaliseren van de dark mode en het aanbrengen van meer hiërarchie in de designs. Ik nam daarnaast de verantwoordelijkheid voor het ontwerpen van de interviewpagina, die ik wilde onderscheiden van vergelijkbare marketingwebsites. Door trendonderzoek te doen en actuele thema’s te identificeren, zorgde ik ervoor dat deze pagina zowel relevant als aantrekkelijk is voor de doelgroep. Met behulp van de tool v0.dev creëerde ik een layout waarin belangrijke details zoals naam, functie en leestijd overzichtelijk worden weergegeven.",
    additionalText2:
      "In de laatste weken van deze periode begon ik met het coderen van de header, een uitdagende taak omdat ik nog niet eerder met een mega-header had gewerkt. Dit bracht enkele technische uitdagingen met zich mee, zoals het probleem dat de header over artikelen heen verscheen. Na het vinden van een oplossing heb ik ook de interviewpagina gecodeerd en gezorgd voor een duidelijke structuur binnen onze GitHub-omgeving door README’s toe te voegen bij iedere branch. Deze fase was intensief maar gaf me de kans om mijn vaardigheden te verbeteren en het project verder te professionaliseren.",
  },

  {
    id: 4,
    title: "Mcrace",
    coverImage: "/images/Mcrace_Logo.svg?height=600&width=1200",
    description:
      "Ontwerp en ontwikkel een campagne, die aansluit bij een zelf te kiezen thema en waarin interactie met McDonalds centraal staat. Werk de campagne uit in verschillende digitale middelen, die de aandacht vasthouden, interesse opwekken, bezoekers op een leuke manier bezig houden en uitnodigen tot delen.",
    date: "Maart-Mei 2024",
    tools: ["Figma", "V0.dev", "ChatGPT", "React", "TailwindCSS", "Vscode"],
    reflection:
      "Tijdens het McDonald's project heb ik veel geleerd over het uitvoeren van een marketingcampagne. Door het onderzoeken van de interesse in kaartenverzamelingen en het houden van interviews, kreeg ik een beter beeld van de doelgroep. Het testen van de prototypes gaf me nuttige feedback om mijn ontwerpen te verbeteren. Het samenwerken met mijn team om concepten te visualiseren en uit te werken, zowel op papier als digitaal, heeft mijn vaardigheden in teamwork en creativiteit vergroot.",
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
    description:
      "ZCSL is een cybersecurityconsultancy bedrijf wat gespecialiseerd is in het leveren van hoogwaardig advies en oplossingen op het gebied van cybersecurity voor zowel particulieren als bedrijven.",
    date: "Maart 2024",
    tools: ["ChatGPT", "Figma", "Photoshop", "Vscode"],
    reflection:
      "Ik vond het werken aan het ZCSL-project enorm positief en leerzaam. Het diepgaande onderzoek gaf me goed inzicht in hun bedrijfsdoelen en doelgroep. Het gebruik van Flexbox en Grid verbeterde mijn technische vaardigheden en zorgde voor een responsieve lay-out. De creatieve vrijheid in het ontwerpen, gecombineerd met strikte brandguidelines, was uitdagend maar bevredigend. De dynamische samenwerking door regelmatige feedbackrondes hielp bij continue verbeteringen. Dit project bood een geweldige kans om mijn webdesign- en ontwikkelvaardigheden te versterken en een impactvol eindresultaat te leveren.",
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
    description:
      "Claudy is een getalenteerde singer-son gwriter uit Tilburg, gespecialiseerd in Nederlandstalige popliedjes met een optimistische boodschap. Haar teksten zijn authentiek en weerspiegelen haar emoties, versterkt door haar Brabantse accent.",
    date: "Februari-Maart 2024",
    tools: ["Figma", "Adobe XD", "Photoshop", "ChatGPT"],
    reflection:
      "De presentaties geven was een goed moment voor feedback zodat de designs naar verwachting van claudy worden geleverd. Ik ben trots op de resultaten en mijn bijdrage.",
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
  const projectId = Number.parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

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

        <ProjectNavigation
          currentId={projectId}
          totalProjects={projects.length}
        />
      </div>
      <Footer />
    </main>
  );
}

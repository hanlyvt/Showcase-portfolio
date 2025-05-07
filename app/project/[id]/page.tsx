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
    imagefull1: "/images/Webdeisgn_Upendo.png",
    imagefull2: "/images/Mobiledesign_Upendo.png",
    imagefull3: "/videos/Upendo_webvideo.mp4",
    imagedescription1: "Figma afbeelding Uitleg",
    imagedescription2: "Afbeelding Uitleg",
    imagedescription3: "Uitleg",
    additionalText: [
      "De eerste sprint begon met het analyseren van data-analysewebsites zoals ilionx en het opstellen van een eerste mobiel ontwerp op basis van de brandguide. Samen met mijn medestudenten hebben we verschillende designelementen gecombineerd tot één ontwerp. Feedback van 2manydots benadrukte het gebruik van een grid voor betere uitlijning, het toevoegen van een Call to Action (CTA) aan het einde van pagina’s en het consistent  plaatsen van het logo linksboven. Ook werd het ontwerp met een donkergroene achtergrond goedgekeurd.",
    ],

    additionalText1: [
      "In de tweede sprint verwerkte ik de feedback en zocht ik naar inspiratie bij websites zoals Ventriloc. Dit leidde tot een definitief ontwerp voor zowel desktop- als mobiele versies. De feedback van 2manydots waardeerde de creatieve knoppen, maar benadrukte het belang van consistentie, balans en het beperken van het aantal kleuren tot twee. Tijdens deze sprint maakte ik ook een begin met de development-fase, waarbij ik werkte met Storyblok en React om de analysis-pagina te ontwikkelen.",
    ],

    additionalText2: [
      "In de derde sprint richtte ik me volledig op de ontwikkeling van de analysis-pagina, een van de vijf servicepagina’s. Ik koppelde Storyblok aan React en ontwikkelde herbruikbare componenten om het werkproces te versnellen. Na afronding van de pagina maakte ik deze responsief en documenteerde ik mijn werk via GitHub, inclusief een duidelijke README. Tijdens de retrospective noteerde ik feedback van 2manydots en reflecteerde ik samen met mijn team op wat goed ging en wat verbeterd kon worden.",
    ],
    liveUrl: "https://fontys-upendo.vercel.app/",
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
    imagefull1: "/images/Human_design1.png",
    imagefull2: "/images/AI_inspiratie.png",
    imagefull3: "/videos/Definitief_design.mp4",
    imagedescription1: "Figma afbeelding Uitleg",
    imagedescription2: "Afbeelding Uitleg",
    imagedescription3: "Uitleg",
    additionalText:
      "Mijn proces begon met een diepgaand onderzoek naar beschikbare AI-tools om te begrijpen wat er op de markt is en hoe deze technologieën specifieke taken in design en ontwikkeling kunnen ondersteunen. Dit gaf me de mogelijkheid om bewuste keuzes te maken over welke tools ik zou inzetten en waarvoor. Met deze kennis op zak ging ik aan de slag met het verzamelen van de eisen en wensen van de opdrachtgever, Indi. Dit was een cruciale stap om ervoor te zorgen dat het eindproduct zou aansluiten bij haar verwachtingen en behoeften.",
    additionalText1:
      "Daarna begon ik aan een eerste conceptontwerp, volledig vanuit mijn eigen creatieve vermogen. Zonder hulp van AI legde ik mijn ideeën vast om te zien hoe mijn menselijke brein een ontwerp zou aanpakken. Dit werd mijn referentiepunt voor de volgende stap: het inzetten van AI-tools. Ik onderzocht hoe AI kon bijdragen aan zowel het ontwerpen als ontwikkelen van de website en genereerde een nieuw ontwerp met behulp van deze technologieën.",
    additionalText2:
      "Met twee ontwerpen in handen—mijn handgemaakte concept en het door AI gegenereerde design—voerde ik gebruikerstests uit om de sterke en zwakke punten van beide methodes te identificeren. Feedback van Indi en andere testers gaf waardevolle inzichten in waar AI tekortschiet of juist uitblinkt. Op basis van deze feedback ging ik aan de slag met itereren en optimaliseren. Ik combineerde de unieke kracht van menselijke creativiteit met de snelheid en precisie van AI om een definitief ontwerp te creëren dat zowel esthetisch aantrekkelijk als functioneel en gebruiksvriendelijk was.",
    additionalText3:
      "Deze reis liet me zien hoe mens en AI elkaar kunnen aanvullen, en hoe ik beide kan inzetten om het beste resultaat te bereiken. Het eindproduct weerspiegelt deze samenwerking en biedt een optimale balans tussen technologie en menselijke input.",
    liveUrl: "https://definitieve-website-indi.vercel.app",
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
    liveUrl: "https://marketingloom.vercel.app/",
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
      "/images/Mcrace1.svg?height=400&width=600",
      "/images/Mcrace2.svg?height=400&width=600",
      "/images/Mcrace3.svg?height=400&width=600",
    ],
    additionalText:
      "Tijdens het McDonald's-project ben ik gestart met het uitvoeren van onderzoek naar de interesse van de doelgroep in een digitale kaartenverzameling. Hierbij heb ik interviews gehouden, die mij hielpen om de wensen en behoeften van gebruikers helder te krijgen. Daarna heb ik mijn ideeën gevisualiseerd door een inspiratiebord en samen met mijn team een conceptbord gemaakt op een whiteboard. Dit heb ik vervolgens uitgewerkt in een Adobe XD-bestand, waarin ik duidelijk inzicht kreeg in de campagne en de benodigde werkzaamheden.",
    additionalText1:
      "In de eerste sprint heb ik verschillende digitale producten ontwikkeld, waaronder een aangepaste versie van het homescreen van de McDonald's-app en een motion advertentie die het concept aantrekkelijk presenteerde. In de tweede sprint werd het thema van de campagne aangescherpt naar Formule 1. Hierbij ontwierp ik aanvullende producten, zoals een countdown timer voor de pre-show van het Formule 1 tv-programma, een Instagram-post, en werkte ik aan de game waarin ik ervoor zorgde dat de auto's en sprites correct functioneerden. Het testen van mijn prototypes leverde waardevolle feedback op, die ik direct verwerkte om mijn ontwerpen te verbeteren.",
    additionalText2:
      "Gedurende het hele proces heb ik actief bijgedragen aan de voorbereidingen en uitvoering van de presentaties. In sprint 1 stelde ik een duidelijk overzicht op van de onderdelen die gepresenteerd moesten worden en verdeelde ik taken binnen mijn team. In sprint 2 nam ik zelf het initiatief om te presenteren, omdat ik het concept en mijn gemaakte producten goed kon toelichten. Dit project heeft mijn vaardigheden in onderzoek, prototyping, samenwerken en presenteren sterk ontwikkeld, en ik ben trots op het eindresultaat van onze campagne.",
    liveUrl: "https://i524572.hera.fontysict.net/mcrace/index.html",
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
      "/images/ZCSL1.svg?height=400&width=600",
      "/images/ZCSL2.svg?height=400&width=600",
      "/images/ZCSL3.svg?height=400&width=600",
    ],
    additionalText:
      "Voor het ontwerpen van de website voor ZCSL begon ik met grondig onderzoek naar het bedrijf, de doelstellingen en de doelgroep. Hiervoor stelde ik gerichte vragen op, waarmee ik inzicht kreeg in de specifieke behoeften en verwachtingen van de opdrachtgever. Daarnaast analyseerde ik verschillende inspirerende websites op aspecten zoals professioneel ontwerp, gebruiksvriendelijke navigatie, educatieve inhoud en visueel aantrekkelijke elementen. Deze analyse vormde een duidelijke leidraad en hielp mij om richtlijnen vast te stellen voor het ontwerpproces.",
    additionalText1:
      "Vervolgens ging ik aan de slag met het daadwerkelijke ontwerp van de website, waarbij ik rekening hield met de voorkeuren van ZCSL. Ik had veel creatieve vrijheid en koos bewust voor de kleuren blauw en wit om transparantie en rust uit te stralen. Ook maakte ik gebruik van AI om diverse brandguides te genereren, wat zorgde voor een professionele en consistente visuele identiteit met een passend kleurenschema, typografie en logo-ontwerp. Deze brandguides dienden vervolgens als basis voor het ontwerp van de homepagina, die ik zelfstandig ontwierp en bouwde.",
    additionalText2:
      "Tijdens het hele project heb ik veel geleerd, zowel op creatief als technisch vlak. De toepassing van Flexbox en Grid verbeterde mijn vaardigheden aanzienlijk en zorgde voor een goede responsiviteit van het ontwerp. De combinatie van creatieve vrijheid en duidelijke richtlijnen was uitdagend, maar zeer leerzaam en bevredigend. Bovendien zorgde de regelmatige feedback ervoor dat het ontwerp continu werd verbeterd. Al met al bood het ZCSL-project mij een waardevolle kans om mijn webdesign- en ontwikkelvaardigheden verder te ontwikkelen en een kwalitatief en impactvol eindproduct op te leveren.",
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
      "/images/Claudy1.svg?height=400&width=600",
      "/images/Claudy2.svg?height=400&width=600",
      "/images/Claudy3.svg?height=400&width=600",
    ],
    additionalText:
      "Voor het project rondom Claudy begon ik met het visueel maken van haar identiteit. Dit deed ik door eerst een moodboard te maken dat een goed beeld gaf van wie Claudy is en wat ze uitstraalt. Op basis daarvan ontwikkelde ik een stylescape waarmee ik de sfeer en stijl van haar merk concreet kon neerzetten. Daarna begon ik aan de brandguide waarin ik haar kernwaarden en persoonlijkheid visueel vertaalde naar een consistente huisstijl. Hierbij keek ik ook naar haar bestaande visuele uitingen en vergeleek ik deze met soortgelijke artiesten om te bepalen welke uitstraling en platforms het beste bij haar passen.",
    additionalText1:
      "Tijdens het ontwerpproces koos ik aanvankelijk voor roze en paars als hoofdkleuren, maar na feedback verving ik het paars door zwart voor een krachtigere uitstraling. Ook het eerste logo-ontwerp met muzieknoten werd aangepast omdat het te kinderlijk overkwam. In plaats daarvan gebruikte ik het speelse maar sierlijke lettertype 'Betterlett' en voegde ik groene accenten toe aan de combinatie van pastelroze en zwart. Deze keuzes werden positief ontvangen door zowel Claudy als de docenten. De brandguide bevatte vijf logo-variaties en een kleurenring die de verhoudingen visueel maakte. Ook de toevoeging van groene penseelstreken zorgde voor een visueel samenhangend geheel. Voor de contentstrategie baseerde ik me op de opbouw van artiestenwebsites, met Claudy centraal in beeld en accenten die haar stijl versterken.",
    additionalText2:
      "Dit project was mijn eerste ervaring met groepswerk, wat een leerzame uitdaging was. Het samenwerken aan een merkidentiteit voor een echte artiest gaf extra motivatie en betrokkenheid. De wekelijkse feedbackmomenten waren erg waardevol en zorgden ervoor dat ik mijn werk steeds verder kon verbeteren. Ook het presenteren van de voortgang hielp om het ontwerp goed af te stemmen op Claudy’s wensen. Ik kijk met trots terug op mijn bijdrage en de eindresultaten van dit project.",
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

        {/* Project Full image */}
        <section className="mb-12">
          <div className="relative w-full aspect-video">
            <Image
              src={project.imagefull1 || "/placeholder.svg"}
              alt={`${project.title} collection image`}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-[#4E4E4E] mb-24 mt-4">
            <strong>Project</strong> {project.imagedescription1}
          </p>
          <div className="relative w-full aspect-video">
            <Image
              src={project.imagefull2 || "/placeholder.svg"}
              alt={`${project.title} collection image`}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-[#4E4E4E] mb-24 mt-4">
            <strong>Project</strong> {project.imagedescription2}
          </p>
          <div className=" w-full m-0">
            <video
              src={project.imagefull3 || "/placeholder.svg"}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <p className="text-[#4E4E4E] mb-24 mt-4">
            <strong>Project</strong> {project.imagedescription3}
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

        {project.liveUrl && (
          <div className="text-center mb-12">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#4E4E4E] text-[#DBD5C6] hover:bg-[#BE1313] transition-colors duration-300 rounded"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              BEKIJK LIVE PROJECT
            </a>
          </div>
        )}

        <ProjectNavigation
          currentId={projectId}
          totalProjects={projects.length}
        />
      </div>
      <Footer />
    </main>
  );
}

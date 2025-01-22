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
    id: 2,
    title: "Indi Janssen portfolio",
    coverImage: "/images/Indi_Janssen_Logo.svg?height=600&width=1200",
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
        </section>
      </div>
      <Footer />
    </main>
  );
}

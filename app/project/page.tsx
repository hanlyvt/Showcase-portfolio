import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    image: "/images/Upendo.svg?height=600&width=800",
    category: "Upendo",
  },
  {
    id: 2,
    title: "Project 2",
    image: "/images/Indi_project.svg?height=600&width=800",
    category: "Indi Janssen portfolio",
  },
  {
    id: 3,
    title: "Project 3",
    image: "/images/Marketing_loom.svg?height=600&width=800",
    category: "Marketing Loom",
  },
  {
    id: 4,
    title: "Project 4",
    image: "/images/Mcrace.svg?height=600&width=800",
    category: "Mcrace",
  },
  {
    id: 5,
    title: "Project 5",
    image: "/images/ZCSL.svg?height=600&width=800",
    category: "ZCSL",
  },
  {
    id: 6,
    title: "Project 6",
    image: "/images/Claudy.svg?height=600&width=800",
    category: "Claudy",
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#DBD5C6]">
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Background Letter */}
        <div
          className="absolute inset-0 flex items-center justify-center text-[600px] text-[#D6D0C1] pointer-events-none"
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          P
        </div>

        {/* Content */}
        <div className="relative">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-[#4E4E4E] mb-8"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            PROJECTEN
          </h1>
          <p className="max-w-2xl text-[#4E4E4E] text-lg md:text-xl">
            Ontdek mijn portfolio van creatieve projecten die design en
            technologie samenbrengen
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/project/${project.id}`}
              key={project.id}
              className="group"
            >
              <div className="relative aspect-[4/3] bg-[#161514] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3
                      className="text-[#DBD5C6] text-2xl mb-2"
                      style={{ fontFamily: "'Aboreto', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#DBD5C6]">{project.category}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

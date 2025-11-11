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
    image: "/images/IndiJanssen_logo.svg?height=600&width=800",
    category: "Indi Janssen portfolio",
  },
  {
    id: 3,
    title: "Project 3",
    image: "/images/MarketingLoom_Logo.svg?height=600&width=800",
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
  {
    id: 7,
    title: "Project 7",
    image: "/images/Zavantis.svg?height=600&width=800",
    category: "Zavantis",
  },
  {
    id: 8,
    title: "Project 8",
    image: "/images/Webflow.svg?height=600&width=800",
    category: "Webflwow",
  },
  {
    id: 9,
    title: "Project 9",
    image: "/images/Zwijsen.svg?height=600&width=800",
    category: "Zwijsen",
  },
  {
    id: 10,
    title: "Project 10",
    image: "/images/Fitquest.svg?height=600&width=800",
    category: "Fitquest",
  },
];

export default function ProjectPage() {
  const boxClasses = [
    "col-span-12 md:col-span-8 md:row-span-2 bg-white rounded-2xl overflow-hidden", // 1
    "col-span-6 md:col-span-2 bg-[#A6A6A6] rounded-2xl overflow-hidden", // 2
    "col-span-6 md:col-span-2 bg-[#1A1A1A] rounded-2xl overflow-hidden", // 3
    "col-span-6 md:col-span-4 bg-[#1A1A1A] rounded-2xl overflow-hidden", // 4
    "col-span-6 md:col-span-5 bg-[#18475B] rounded-2xl overflow-hidden", // 5
    "col-span-12 md:col-span-4 bg-[#A6A6A6] rounded-2xl overflow-hidden", // 6
    "col-span-12 md:col-span-3 bg-[#042B2C] rounded-2xl overflow-hidden", // 7
    "col-span-6 md:col-span-4 bg-black rounded-2xl overflow-hidden", // 8
    "col-span-6 md:col-span-5 bg-white rounded-2xl overflow-hidden", // 9
    "col-span-6 md:col-span-3 bg-[#92A194] rounded-2xl overflow-hidden", // 10
  ];

  const imageProps = [
    { width: 612, height: 456 },
    { width: 293, height: 199 },
    { width: 293, height: 199 },
    { width: 400, height: 200 },
    { width: 191, height: 171 },
    { width: 293, height: 171 },
    { width: 293, height: 449 },
    { width: 400, height: 200 },
    { width: 506, height: 249 },
    { width: 191, height: 171 },
  ];

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
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className={`${boxClasses[i]} group`}
              style={{ display: "block", position: "relative" }}
            >
              {/* De afbeelding */}
              <Image
                src={project.image}
                alt={project.title}
                width={imageProps[i].width}
                height={imageProps[i].height}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay bij hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="text-center">
                  <h3
                    className="text-[#DBD5C6] text-2xl mb-2"
                    style={{ fontFamily: "'Aboreto', serif" }}
                  >
                    PROJECT {project.id}
                  </h3>
                  <p className="text-[#FFFFFF]">{project.category}</p>
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

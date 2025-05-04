"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    image: "/images/Indi_project.svg?height=400&width=700",
  },
  {
    id: 2,
    title: "Project 2",
    image: "/images/Claudy.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Project 3",
    image: "/images/Mcrace.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Project 4",
    image: "/images/Marketing_loom.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Project 5",
    image: "/images/Upendo.svg?height=600&width=800",
  },
  { id: 6, title: "Project 6", image: "/images/ZCSL.svg?height=600&width=800" },
];

export default function ProjectCarousel() {
  return (
    <div className="bg-[#DBD5C6] relative">
      {/* Horizontale "WORK" tekst alleen op mobiel */}
      <div className="block md:hidden px-4 pt-4 pb-4 flex items-center justify-center">
        <div
          className="text-[#4E4E4E] text-3xl font-bold tracking-widest text-center"
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          WORK
        </div>
      </div>

      {/* Verticale "WORK" tekst alleen op desktop */}
      <div className="hidden md:flex absolute right-6 top-0 bottom-0 w-32 bg-[#DBD5C6] z-10 items-center justify-center">
        <div
          className="text-[#4E4E4E] text-8xl tracking-widest"
          style={{
            fontFamily: "'Aboreto', serif",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          WORK
        </div>
      </div>

      {/* Gradient overlay alleen op desktop */}
      <div className="hidden md:block absolute right-32 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-[#DBD5C6] z-10" />

      {/* Horizontale carousel container */}
      <div
        className="
          flex flex-row
          overflow-x-auto
          scrollbar-hide
          py-6 md:py-12 px-2 sm:px-4 md:px-8
          gap-3 sm:gap-5 md:gap-8
          md:mr-64
        "
      >
        {projects.map((project) => (
          <Link href="/project" key={project.id}>
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="
                relative flex-none
                w-[70vw] h-[36vw] max-w-[220px] max-h-[110px]
                sm:w-[250px] sm:h-[140px] sm:max-w-[250px] sm:max-h-[140px]
                md:w-[500px] md:h-[280px] md:max-w-[500px] md:max-h-[280px]
                lg:w-[700px] lg:h-[400px] lg:max-w-[700px] lg:max-h-[400px]
                bg-[#161514] rounded-lg overflow-hidden
                shadow-md
              "
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute bottom-2 left-2 bg-[#DBD5C6]/80 text-[#161514] text-xs sm:text-sm md:text-lg px-2 py-1 rounded">
                {project.title}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

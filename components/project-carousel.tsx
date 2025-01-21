"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Project 1", image: "/placeholder.svg?height=600&width=800" },
  { id: 2, title: "Project 2", image: "/placeholder.svg?height=600&width=800" },
  { id: 3, title: "Project 3", image: "/placeholder.svg?height=600&width=800" },
  { id: 4, title: "Project 4", image: "/placeholder.svg?height=600&width=800" },
  { id: 5, title: "Project 5", image: "/placeholder.svg?height=600&width=800" },
];

export default function ProjectCarousel() {
  return (
    <div className="bg-[#DBD5C6] relative">
      {/* Vertical "WORK" text */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-[#DBD5C6] z-10 flex items-center justify-center">
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

      {/* Gradient overlay for smooth cut-off */}
      <div className="absolute right-32 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-[#DBD5C6] z-10" />

      {/* Carousel container */}
      <div className="flex overflow-x-auto scrollbar-hide py-12 px-8 gap-8 mr-64">
        {projects.map((project) => (
          <Link href="/project" key={project.id}>
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative flex-none w-[600px] h-[400px] bg-[#161514] rounded-lg overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

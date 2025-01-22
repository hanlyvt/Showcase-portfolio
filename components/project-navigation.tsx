import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  currentId: number;
  totalProjects: number;
}

export default function ProjectNavigation({
  currentId,
  totalProjects,
}: ProjectNavigationProps) {
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < totalProjects ? currentId + 1 : null;

  return (
    <div className="flex justify-between items-center mt-12 py-6 border-t border-[#4E4E4E]">
      {prevId ? (
        <Link
          href={`/project/${prevId}`}
          className="flex items-center text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" />
          <span>Vorig project</span>
        </Link>
      ) : (
        <div></div>
      )}
      {nextId ? (
        <Link
          href={`/project/${nextId}`}
          className="flex items-center text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
        >
          <span>Volgend project</span>
          <ArrowRight className="ml-2" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

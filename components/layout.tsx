import Link from "next/link"
import { Menu } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#DBD5C6]">
      <header className="fixed w-full top-0 z-50 px-8 py-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="space-x-12">
            <Link href="/" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors">
              ABOUT
            </Link>
            <Link href="/project" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors">
              PROJECT
            </Link>
            <Link href="/contact" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors">
              CONTACT
            </Link>
          </div>
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-[#4E4E4E]" />
          </button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}


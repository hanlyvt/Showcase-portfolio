"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-12">
          <Link href="/" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300">
            HOME
          </Link>
          <Link href="/about" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300">
            ABOUT
          </Link>
          <Link href="/project" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300">
            PROJECT
          </Link>
          <Link href="/contact" className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300">
            CONTACT
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#DBD5C6] z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/project"
              className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              PROJECT
            </Link>
            <Link
              href="/contact"
              className="text-[#4E4E4E] hover:text-[#BE1313] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}


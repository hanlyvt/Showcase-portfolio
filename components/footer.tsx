import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4E4E4E] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Navigation Menu */}
        <nav className="mb-24">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-[32px] text-[#DBD5C6] hover:text-[#BE1313] transition-colors duration-300 font-bold"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[32px] text-[#DBD5C6] hover:text-[#BE1313] transition-colors duration-300 font-bold"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="text-[32px] text-[#DBD5C6] hover:text-[#BE1313] transition-colors duration-300 font-bold"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[32px] text-[#DBD5C6] hover:text-[#BE1313] transition-colors duration-300 font-bold"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Name Section */}
        <div className="flex justify-between items-center">
          <h2
            className="text-[136px] text-[#555555] leading-none"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            HAN LY VU
          </h2>
          <h2
            className="text-[128px] text-[#555555] leading-none"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            TRANG
          </h2>
        </div>

        {/* Logo Placeholder */}
        <div className="mt-24 w-32 h-32">{/* Add your logo here */}</div>
      </div>
    </footer>
  );
}

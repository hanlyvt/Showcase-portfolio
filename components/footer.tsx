import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#4E4E4E] py-24 overflow-hidden"
      style={{
        height: "580px",
        backgroundImage: "url('/images/Logo.svg')", // Achtergrondafbeelding
        backgroundRepeat: "no-repeat", // Voorkomt herhaling van de afbeelding
        backgroundPosition: "right", // Zorgt dat de afbeelding gecentreerd is
        backgroundSize: "contain", // Zorgt dat de afbeelding proportioneel blijft
      }}
    >
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
            className="text-[136px] text-[#555555]"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            HAN LY VU
          </h2>
          <h2
            className="text-[128px] text-[#555555]"
            style={{ fontFamily: "'Aboreto', serif" }}
          >
            TRANG
          </h2>
        </div>
      </div>
    </footer>
  );
}

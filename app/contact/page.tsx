"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="h-screen bg-[#DBD5C6] overflow-hidden flex flex-col">
      <Navigation />

      <div className="flex-grow flex flex-col justify-center items-center px-4 justify-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-[#4E4E4E] mb-8 text-center"
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          CONTACT
        </h1>

        <div className="w-auto gap-8 items-start justify-center">
          {/* Contact Information */}
          <div className="bg-[#4E4E4E] p-10 rounded-lg shadow-lg text-[#DBD5C6] text-center">
            <h2
              className="text-xl mb-4"
              style={{ fontFamily: "'Aboreto', serif" }}
            >
              Contactgegevens
            </h2>
            <div className="flex flex-col space-y-3 text-sm text-center">
              <div className="flex flex-col space-y-2 items-center text-center p-2">
                <Mail className="mr-3 w-4 h-4 text-center" />
                <p>hanlyvutrang@gmail.com</p>
              </div>
              <div className="flex flex-col space-y-2 items-center text-center p-2">
                <Phone className="mr-3 w-4 h-4 " />
                <p>+31 6 39723280</p>
              </div>
              <div className="flex flex-col space-y-2  items-center text-center p-2">
                <MapPin className="mr-3 w-4 h-4" />
                <p>Etten-Leur, Nederland</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "'Aboreto', serif" }}
              >
                Bekijk mijn code
              </h3>
              <div className="flex justify-center">
                <a
                  href="https://github.com/hanlyvt/"
                  className="hover:text-[#BE1313] transition-colors duration-300 flex items-center space-x-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "'Aboreto', serif" }}
              >
                Volg mij of stuur een bericht.
              </h3>
              <div className="flex space-x-4 text-sm justify-center">
                <a
                  href="https://www.linkedin.com/in/han-ly-vu-trang/"
                  className="hover:text-[#BE1313] transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/hanlyvtrang/"
                  className="hover:text-[#BE1313] transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

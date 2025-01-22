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

      <div className="flex-grow flex flex-col justify-center items-center px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-[#4E4E4E] mb-8 text-center"
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          CONTACT
        </h1>

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-[#E5E0D1] p-6 rounded-lg shadow-lg">
            <h2
              className="text-xl text-[#4E4E4E] mb-4"
              style={{ fontFamily: "'Aboreto', serif" }}
            >
              Stuur een bericht
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#4E4E4E] mb-1 text-sm"
                >
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm bg-[#DBD5C6] text-[#4E4E4E] border border-[#4E4E4E] focus:outline-none focus:ring-2 focus:ring-[#BE1313] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#4E4E4E] mb-1 text-sm"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm bg-[#DBD5C6] text-[#4E4E4E] border border-[#4E4E4E] focus:outline-none focus:ring-2 focus:ring-[#BE1313] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#4E4E4E] mb-1 text-sm"
                >
                  Bericht
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-[#DBD5C6] text-[#4E4E4E] border border-[#4E4E4E] focus:outline-none focus:ring-2 focus:ring-[#BE1313] rounded"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm bg-[#4E4E4E] text-[#DBD5C6] hover:bg-[#BE1313] transition-colors duration-300 rounded"
                  style={{ fontFamily: "'Articulat CF', sans-serif" }}
                >
                  VERSTUUR
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#4E4E4E] p-6 rounded-lg shadow-lg text-[#DBD5C6]">
            <h2
              className="text-xl mb-4"
              style={{ fontFamily: "'Aboreto', serif" }}
            >
              Contactgegevens
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="mr-3 w-4 h-4" />
                <p>hanlytrang@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 w-4 h-4" />
                <p>+31 6 12345678</p>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 w-4 h-4" />
                <p>Etten-Leur, Nederland</p>
              </div>
            </div>
            <div className="mt-6">
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "'Aboreto', serif" }}
              >
                Volg mij
              </h3>
              <div className="flex space-x-4 text-sm">
                <a
                  href="#"
                  className="hover:text-[#BE1313] transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
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

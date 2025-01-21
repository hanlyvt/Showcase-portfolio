import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DBD5C6]">
      <Navigation />
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <h1
          className="text-[#4E4E4E] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] font-light text-center"
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          HAN LY VU
        </h1>
        <p className="text-[#4E4E4E] mt-4 tracking-widest text-center">ICT-Media Designer</p>
      </div>
    </main>
  )
}


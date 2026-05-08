import { useEffect, useState } from "react";

export default function WebDevelopmentPortfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 top-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Micro Sonic" className="h-9 w-9 rounded-full shadow-lg shadow-blue-500/30" />
            <h1 className="font-bold text-xl tracking-wide">Micro Sonic</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="pt-32 flex flex-col items-center text-center px-6 py-28">
        <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Agency Level <span className="text-blue-500">Web Development</span>
        </h1>

        <p className={`text-gray-300 max-w-2xl text-lg md:text-xl mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          We design and develop high-performance, modern and scalable websites for businesses and personal brands.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition shadow-lg shadow-blue-600/30">
            View Work
          </a>
          <a href="https://wa.me/94775524809" target="_blank" className="border border-gray-500 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
            Contact
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="bg-gray-900/60 border border-gray-800 p-10 rounded-3xl text-gray-300 leading-relaxed">
          I am a professional web developer specializing in modern UI/UX, responsive design, and fast-loading websites. I help businesses grow online with powerful digital solutions.
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Business Websites", desc: "High converting websites for brands." },
            { title: "Portfolio Sites", desc: "Clean personal branding websites." },
            { title: "UI/UX Design", desc: "Modern and user friendly interfaces." }
          ].map((s, i) => (
            <div key={i} className="bg-gray-900/60 border border-gray-800 p-8 rounded-3xl hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="space-y-6">
          {[
            { name: "React / Next.js", value: 90 },
            { name: "Tailwind CSS", value: 95 },
            { name: "UI/UX Design", value: 85 }
          ].map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: skill.value + "%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-black px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Business Site", "E-Commerce", "Portfolio"].map((title, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition">
                <div className="h-48 bg-gradient-to-r from-blue-900 to-purple-900"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400">High quality modern web project.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-gray-900/60 border border-gray-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">Details</h3>
            <p>Name: M.S Asanka Udaya Kumara</p>
            <p>Phone: 0775524809</p>
            <p>Email: Asankaudayak31@gmail.com</p>
            <p>Address: Kerangahawella, Yakkalamulla</p>
          </div>

          <div className="bg-gray-900/60 border border-gray-800 p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Let’s Work Together</h3>
            <a href="https://wa.me/94775524809" target="_blank" className="bg-blue-600 text-center px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Micro Sonic. All rights reserved.
      </footer>

    </div>
  );
}

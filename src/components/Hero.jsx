import { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg";

const roles = ["Data Analyst", "ML Engineer (in progress)", "Full-Stack Developer"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), 1200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1">
        <p className="text-cyan-400 font-mono text-sm mb-3">
          Building Intelligent Solutions with AI & Software Engineering
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Saurav Kumar Prasad
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6 h-8">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-slate-400 max-w-xl mb-8">
          Aspiring Data Analyst / ML Engineer with hands-on experience in
          Python, SQL, and full-stack development.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-cyan-400 text-slate-900 font-semibold px-5 py-2.5 rounded-md hover:bg-cyan-300">
            Get in Touch
          </a>
          <a href="#projects" className="border border-slate-700 text-white px-5 py-2.5 rounded-md hover:border-cyan-400">
            View Projects
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={profilePic}
          alt="Saurav Kumar Prasad"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-slate-700"
        />
      </div>
    </section>
  );
}

export default Hero;
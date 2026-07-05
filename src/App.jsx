import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Educataion from "./components/Education"
import Certificates from "./components/Certificates";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Educataion />
      <Certificates/>
      <Contact />
    </div>
  );
}

export default App;
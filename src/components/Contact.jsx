function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-10 text-center">
        <p className="text-cyan-400 font-mono text-sm mb-2">-- Let's Connect</p>
        <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm mb-6">
          <a href="mailto:skp51205@gmail.com" className="hover:text-cyan-400">
            skprasad51205@gmail.com
          </a>
          <a href="tel:+917800197758" className="hover:text-cyan-400">
            +91-7800197758
          </a>
          <span>Ekma, Saran, Bihar</span>
        </div>
        <div className="flex justify-center gap-5">
          
          <a href="https://github.com/skp051205"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400">
          
            GitHub
          </a>  
          <a href="https://www.linkedin.com/in/sauravprasad05"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="text-center text-slate-500 text-xs mt-10 pb-6 font-mono">
        BUILD BY - SAURAV KUMAR PRASAD
      </footer>
    </section>
  );
}

export default Contact;
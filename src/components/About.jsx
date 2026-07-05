function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-cyan-400 font-mono text-sm">01</span>
        <h2 className="text-3xl font-bold text-white">About</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <p className="md:col-span-2 text-slate-400 leading-relaxed">
          MCA student at AKTU with a strong foundation in data analytics, SQL,
          and software engineering fundamentals. I like turning messy datasets
          into clear stories through EDA, dashboards, and predictive models,
          and I build full-stack tools to ship that work end to end.
          Currently deepening my machine learning skills with Scikit-learn
          while staying grounded in solid engineering practices.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <p className="text-2xl font-bold text-cyan-400">8.0</p>
            <p className="text-xs text-slate-400 mt-1">SGPA (MCA)</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <p className="text-2xl font-bold text-cyan-400">2</p>
            <p className="text-xs text-slate-400 mt-1">Internships</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <p className="text-2xl font-bold text-cyan-400">1</p>
            <p className="text-xs text-slate-400 mt-1">Major Project</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <p className="text-2xl font-bold text-cyan-400">4+</p>
            <p className="text-xs text-slate-400 mt-1">DB Concepts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
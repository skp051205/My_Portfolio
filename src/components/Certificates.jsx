const certifications = [
  {
    title: "Python AI & Machine Learning Training",
    org: "Analyze Infotech",
    status: "In Progress",
    note: "45-day hands-on program covering Python fundamentals, ML algorithms, and practical model-building.",
  },
  {
    title: "Python — 30-Hour Training Program",
    org: "Apr–May 2026",
    status: "Completed",
    note: "Covered Python syntax, data structures, OOP, and file handling — core prerequisites for ML/AI development.",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-cyan-400 font-mono text-sm">05</span>
        <h2 className="text-3xl font-bold text-white">Certifications & Training</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 flex items-start justify-between gap-4"
          >
            <div>
              <p className="text-white font-semibold">{cert.title}</p>
              <p className="text-cyan-400 text-xs font-mono mt-1">{cert.org}</p>
              <p className="text-slate-400 text-sm mt-2">{cert.note}</p>
            </div>
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap ${
                cert.status === "In Progress"
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                  : "bg-slate-700 text-slate-400"
              }`}
            >
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-cyan-400 font-mono text-sm">03</span>
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-white">IT-Prep-Hub</h3>
          
            <a href="https://github.com/skp051205/IT-PREP-HUB"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 text-sm font-mono hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <p className="text-slate-400 mb-4">
          Full-Stack Interview Preparation Platform
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Node.js", "Express.js", "MySQL", "JWT", "HTML/CSS/JS"].map((tag) => (
            <span
              key={tag}
              className="bg-slate-700 text-cyan-400 text-xs font-mono px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-slate-400 text-sm">
          <li>
            • Developed RESTful APIs for topic management, question retrieval,
            and user progress tracking using MVC architecture with JWT-based
            authentication.
          </li>
          <li>
            • Designed a normalized MySQL relational schema for users, topics,
            questions, and progress state — built to support future
            ML-based topic recommendations.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
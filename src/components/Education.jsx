const education = [
  {
    period: "2025 – Present",
    title: "MCA (Pursuing)",
    org: "Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow",
    note: "SGPA: 8.0",
  },
  {
    period: "2022 – 2025",
    title: "B.Sc. Mathematics",
    org: "Deen Dayal Upadhyay Gorakhpur University",
    note: "CGPA: 6.2",
  },
  {
    period: "2022",
    title: "Class XII(PCMB) — CBSE",
    org: "St. Xavier's High School, Deoria",
    note: "59%",
  },
  {
    period: "2020",
    title: "Class X — CBSE",
    org: "St. Xavier's High School, Deoria",
    note: "79%",
  },
];

function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-cyan-400 font-mono text-sm">04</span>
        <h2 className="text-3xl font-bold text-white">Education</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div>
        {education.map((item, index) => (
          <div key={item.title} className="flex gap-4 pb-8">
            <div className="flex flex-col items-center">
              <div
                className={`h-3 w-3 rounded-full mt-1.5 ${
                  index === 0 ? "bg-cyan-400" : "bg-slate-700"
                }`}
              ></div>
              {index !== education.length - 1 && (
                <div className="w-px flex-1 bg-slate-800"></div>
              )}
            </div>
            <div>
              <p className="text-cyan-400 font-mono text-xs mb-1">
                {item.period}
              </p>
              <p className="text-white font-semibold">{item.title}</p>
              <p className="text-slate-400 text-sm mt-0.5">
                {item.org} · {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
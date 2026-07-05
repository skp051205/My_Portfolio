const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript (Node.js)", "SQL"],
  },
  {
    title: "Data Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Power BI", "Excel"],
  },
  {
    title: "Databases",
    items: ["MySQL"],
  },
  {
    title: "ML Concepts",
    items: ["Linear Regression",
"Logistic Regression",
"Decision Trees",
"Random Forest",
"SVM (Support Vector Machine)",
"KNN (K-Nearest Neighbors)",
"EDA (Exploratory Data Analysis)", "Feature Engineering"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Node.js", "Express.js", "Spring Boot", "Git",  "VS Code"],
  },
  {
    title: "Core Concepts",
    items: ["Object-Oriented Programming (OOP)", "MVC Architecture", "JWT Authentication & Authorization", "REST API Development", "Normalization"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-cyan-400 font-mono text-sm">02</span>
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-5"
          >
            <h3 className="text-white font-semibold mb-3">{group.title}</h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-slate-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
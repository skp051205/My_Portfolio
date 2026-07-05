# Saurav Kumar Prasad — Portfolio Website

A personal portfolio website built from scratch to showcase my journey as an aspiring Data Analyst / ML Engineer — my skills, projects, education, and certifications.

**Live Demo:** [Add your Vercel link here after deployment]

---

## About This Project

This isn't just a template — I built this portfolio component by component, from an empty Vite project to a fully working multi-section website, while learning React fundamentals (components, props, `useState`, `useEffect`, array `.map()` rendering, and conditional styling) along the way.

## Tech Stack

- **React** — Component-based UI library
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first styling (no config file needed, integrated via `@tailwindcss/vite`)

## How It Was Built — Step by Step

**1. Project Setup**
Initialized a fresh React project using Vite:
```bash
npm create vite@latest . -- --template react
npm install
```

**2. Styling Setup — Tailwind CSS v4**
Installed Tailwind and wired it directly into Vite (v4 no longer needs `tailwind.config.js` or a separate init step):
```bash
npm install -D tailwindcss postcss autoprefixer
npm install @tailwindcss/vite
```
Added the plugin to `vite.config.js` and imported Tailwind in `src/index.css` with a single line: `@import "tailwindcss";`

**3. Component-Based Architecture**
Broke the site into independent, reusable components inside `src/components/`, each responsible for one section:
- `Navbar.jsx` — sticky top navigation with smooth-scroll links
- `Hero.jsx` — intro section with profile photo and an animated typing effect (built using `useState` + `useEffect`) that rotates through role titles
- `About.jsx` — summary paragraph and quick stats grid
- `Skills.jsx` — technical skills grouped into categories, rendered dynamically from a data array using `.map()`
- `Projects.jsx` — featured project showcase (IT-Prep-Hub) with tech tags and GitHub link
- `Education.jsx` — vertical timeline of academic history
- `Certifications.jsx` — training and certifications, with a status badge (Completed / In Progress) driven by conditional styling
- `Contact.jsx` — direct contact links and footer

**4. Assembling in App.jsx**
Each component was imported and composed together in `src/App.jsx`, in the order they appear on the page.

**5. Debugging**
Along the way, fixed real-world issues like:
- Import path mismatches between filenames and import statements
- Vite transform errors read directly from terminal/browser error overlays

**6. Deployment**
Pushed the codebase to GitHub and connected the repository to Vercel for continuous deployment — every future push to `main` automatically redeploys the live site.

## Sections

| Section | Description |
|---|---|
| Hero | Name, animated role rotator, profile photo, CTA buttons |
| About | Short bio + quick stats (SGPA, internships, projects) |
| Skills | Languages, Data Analytics, Databases, ML Concepts, Frameworks & Tools, Core Concepts |
| Projects | IT-Prep-Hub — Full-Stack Interview Prep Platform |
| Education | MCA (AKTU) → B.Sc. Mathematics → Class XII → Class X |
| Certifications & Training | Completed and in-progress programs |
| Contact | Email, phone, GitHub, LinkedIn |

## Getting Started Locally

Clone the repository and install dependencies:
```bash
git clone https://github.com/skp051205/My_Portfolio.git
cd My_Portfolio
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Build for production:
```bash
npm run build
```

## Connect With Me

- **Email:** skp51205@gmail.com
- **LinkedIn:** [linkedin.com/in/sauravprasad05](https://www.linkedin.com/in/sauravprasad05)
- **GitHub:** [github.com/skp051205](https://github.com/skp051205)

---

Saurav Kumar Prasad

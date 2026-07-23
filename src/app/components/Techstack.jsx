import React from 'react'
import { Laptop2, DatabaseZap, Puzzle, Webhook, GraduationCap, Palette } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Laptop2 size={32} />,
    items: ["HTML5", "CSS3", "ReactJs", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Next.js","TypeScript"],
  },
  {
    title: "Backend & Database",
    icon: <DatabaseZap size={32} />,
    items: ["Node.js", "Express.js","Nestjs","PostgreSQL", "MySQL / SQL","Redis","MongoDB", "Mongoose", "Firebase", "TypeORM"],
  },
  {
    title: "Programming Languages",
    icon: <Puzzle size={32} />,
    items: ["C & C++", "Java", "Python", "JavaScript","TypeScript", "PHP"],
  },
  {
    title: "Tools & Platforms",
    icon: <Webhook size={32} />,
    items: ["Git & GitHub", "VS Code", "VPS Management","Coolify","Railway", "DigitalOcean", "Vercel", "Render", "Postman (API Testing)","Netlify",  "Firebase Hosting"],
  },
    {
    title: "Relevant Coursework",
    icon: <GraduationCap size={32} />,
    items: ["Algorithms", "Operating Systems", "OOP", "DBMS","System Design", "Software Architecture"],
  },
    {
    title: "Soft Skills",
    icon: <Palette size={32} />,
    items: ["Problem Solving", "Collaboration", "Adaptability", "Self-learning", "Time Management", "Leadership"],
  }
];


const Techstack = () => {
  return (
   <section id="tech" className="bg-slate-900 text-[#F8FAFC] py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Technical Expertise
      </h2>
     <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8"> 
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-700 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#38BDF8]">{skill.icon}</div>
              <h2 className="text-2xl font-semibold">{skill.title}</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="techstack bg-slate-600 text-[#F8FAFC] px-4 py-2 rounded-[24px] text-sm border border-[#38BDF8] grow text-center"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Techstack
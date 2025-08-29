import React from "react";
import { FiMail } from "react-icons/fi"; // minimalistic email icon

const projects = [
  {
    title: "Portfolio Website",
    tag: "React + Tailwind",
    img: "/projects/portfolio.jpg",
    link: "#",
  },
  {
    title: "Student Management System",
    tag: "Django + Oracle",
    img: "/projects/sms.jpg",
    link: "#",
  },
  {
    title: "Netflix Frontend Clone",
    tag: "HTML + CSS",
    img: "/projects/netflix.jpg",
    link: "https://charlieboy5360.github.io/Netflix/",
  },
  {
    title: "Teacher Exam Duty Mail",
    tag: "Apps Script + Sheets",
    img: "/projects/smsreminder.jpg ",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <span className="sketch">Featured Projects</span>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="card hover:translate-y-[-3px] transition">
              <div className="aspect-[4/3] bg-slate-100 rounded-t-2xl overflow-hidden">
                {/* placeholder gradient if image missing */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="h2 text-xl font-bold text-slate-900">{p.title}</h3>
                  <span className="note-tag">{p.tag}</span>
                </div>
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="inline-block mt-4 text-slate-900 font-semibold hover:underline">
                  View →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const TableOfContents = ({ type }) => {
  const [activeId, setActiveId] = useState("overview");

  const commonSections = [
    { id: "overview", label: "Overview" },
  ];

  const clientSections = [
    { id: "client-brief", label: "Client Brief" },
    { id: "solution-results", label: "Solution & Results" },
    { id: "challenges", label: "Challenges" },
  ];

  const personalSections = [
    { id: "the-why", label: "The Idea" },
    { id: "learning", label: "Learning Outcomes" },
  ];

  const demoSections = [
    { id: "demo-purpose", label: "Purpose" },
    { id: "technical-exploration", label: "Exploration" },
  ];

  const openSourceSections = [
    { id: "contribution", label: "Open Source Impact" },
  ];

  let sections = [...commonSections];
  if (type === "client") sections = [...sections, ...clientSections];
  if (type === "personal") sections = [...sections, ...personalSections];
  if (type === "demo") sections = [...sections, ...demoSections];
  if (type === "open-source") sections = [...sections, ...openSourceSections];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-32 hidden lg:block w-64 p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 backdrop-blur-xl">
      <h3 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Contents</h3>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block text-sm transition-all duration-300 border-l-2 pl-4",
                activeId === section.id
                  ? "text-cyan-400 border-cyan-400 font-medium scale-105 origin-left"
                  : "text-slate-500 border-slate-700 hover:text-slate-300 hover:border-slate-500"
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;

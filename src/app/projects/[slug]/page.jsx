import React from "react";
import { notFound } from "next/navigation";
import projects from "../../data/projects";
import ProjectHero from "../../components/project-details/ProjectHero";
import ProjectInfoSidebar from "../../components/project-details/ProjectInfoSidebar";
import ProjectTechStack from "../../components/project-details/ProjectTechStack";
import ProjectDynamicSections from "../../components/project-details/ProjectDynamicSections";
import TableOfContents from "../../components/project-details/TableOfContents";

// This is required for Next.js to generate static pages for each project
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <ProjectHero project={project} />

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16 relative items-start">
        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0">
          
          {/* Quick Info & Tech Stack */}
          <section id="overview" className="scroll-mt-32">
            <ProjectInfoSidebar project={project} />
            <ProjectTechStack techStack={project.techStack} />
          </section>

          {/* Project Overview */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Overview</h2>
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              <p>{project.overview}</p>
            </div>
          </section>

          {/* Dynamic Sections based on type */}
          <ProjectDynamicSections project={project} />
          
        </div>

        {/* Sticky Table of Contents (Desktop Only) */}
        <TableOfContents type={project.type} />
      </div>
    </main>
  );
}

"use client";
import React from "react";
import { CheckCircle2, Trophy, Target, Lightbulb, Code2, AlertTriangle, GitPullRequest } from "lucide-react";

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
      <Icon className="w-6 h-6" />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
  </div>
);

const ClientSections = ({ project }) => {
  if (!project.clientInfo) return null;
  const { clientInfo, challenges } = project;

  return (
    <div className="space-y-16 mt-16">
      <section id="client-brief">
        <SectionHeader icon={Target} title="Client Brief & Goals" />
        <div className="bg-slate-800/30 border border-slate-700/50 p-6 md:p-8 rounded-2xl">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{clientInfo.brief}</p>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2 uppercase text-sm tracking-wider">Business Goals</h4>
            <p className="text-slate-200">{clientInfo.goals}</p>
          </div>
        </div>
      </section>

      <section id="solution-results">
        <SectionHeader icon={Trophy} title="Solution & Results" />
        <div className="bg-slate-800/30 border border-slate-700/50 p-6 md:p-8 rounded-2xl">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{clientInfo.solution}</p>
          <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 className="text-green-400 font-medium mb-2 uppercase text-sm tracking-wider">Outcomes</h4>
            <p className="text-slate-200">{clientInfo.results}</p>
          </div>
        </div>
      </section>

      {challenges && challenges.length > 0 && (
        <section id="challenges">
          <SectionHeader icon={AlertTriangle} title="Technical Challenges" />
          <div className="space-y-4">
            {challenges.map((challenge, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
                <h4 className="text-slate-100 font-medium mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Problem: {challenge.problem}
                </h4>
                <p className="text-slate-400 pl-4 border-l-2 border-slate-700 ml-1 mt-3">
                  <strong className="text-cyan-400">Solution:</strong> {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const PersonalSections = ({ project }) => {
  if (!project.learning) return null;
  const { learning } = project;

  return (
    <div className="space-y-16 mt-16">
      <section id="the-why">
        <SectionHeader icon={Lightbulb} title="The Idea & Motivation" />
        <div className="bg-slate-800/30 border border-slate-700/50 p-6 md:p-8 rounded-2xl space-y-6">
          <div>
            <h4 className="text-slate-100 font-medium mb-2">Why I Built This</h4>
            <p className="text-slate-400">{learning.whyBuilt}</p>
          </div>
          <div>
            <h4 className="text-slate-100 font-medium mb-2">The Problem</h4>
            <p className="text-slate-400">{learning.problem}</p>
          </div>
          <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 className="text-cyan-400 font-medium mb-2">The Solution</h4>
            <p className="text-slate-200">{learning.idea}</p>
          </div>
        </div>
      </section>

      <section id="learning">
        <SectionHeader icon={CheckCircle2} title="Learning Outcomes" />
        <div className="bg-slate-800/30 border border-slate-700/50 p-6 md:p-8 rounded-2xl">
          <p className="text-slate-300 text-lg leading-relaxed">{learning.outcomes}</p>
        </div>
      </section>
    </div>
  );
};

const DemoSections = ({ project }) => {
  if (!project.demoInfo) return null;
  const { demoInfo } = project;

  return (
    <div className="space-y-16 mt-16">
      <section id="demo-purpose">
        <SectionHeader icon={Target} title="Purpose & Goals" />
        <div className="bg-slate-800/30 border border-slate-700/50 p-6 md:p-8 rounded-2xl space-y-6">
          <div>
            <h4 className="text-slate-100 font-medium mb-2">Project Purpose</h4>
            <p className="text-slate-400">{demoInfo.purpose}</p>
          </div>
          <div>
            <h4 className="text-slate-100 font-medium mb-2">Learning Goals</h4>
            <p className="text-slate-400">{demoInfo.learningGoals}</p>
          </div>
        </div>
      </section>

      <section id="technical-exploration">
        <SectionHeader icon={Code2} title="Technical Exploration" />
        <div className="bg-slate-800/30 border border-slate-700/50 p-6 md:p-8 rounded-2xl space-y-6">
          <p className="text-slate-300">{demoInfo.exploration}</p>
          <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
            <h4 className="text-cyan-400 font-medium mb-2">Outcomes</h4>
            <p className="text-slate-200">{demoInfo.outcomes}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const OpenSourceSections = ({ project }) => {
  if (!project.openSourceInfo) return null;
  const { openSourceInfo } = project;

  return (
    <div className="space-y-16 mt-16">
      <section id="contribution">
        <SectionHeader icon={GitPullRequest} title="Open Source Impact" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
            <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-1">Role</h4>
            <p className="text-slate-100 text-lg font-medium">{openSourceInfo.contributionType}</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
            <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-1">Activity</h4>
            <p className="text-slate-100 text-lg font-medium">{openSourceInfo.pullRequests}</p>
            <p className="text-slate-100 text-lg font-medium">{openSourceInfo.issuesSolved}</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl sm:col-span-2">
            <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Community Impact</h4>
            <p className="text-slate-200">{openSourceInfo.communityImpact}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectDynamicSections = ({ project }) => {
  switch (project.type) {
    case "client":
      return <ClientSections project={project} />;
    case "personal":
      return <PersonalSections project={project} />;
    case "demo":
      return <DemoSections project={project} />;
    case "open-source":
      return <OpenSourceSections project={project} />;
    default:
      return null;
  }
};

export default ProjectDynamicSections;

import React from "react";

const ProjectTechStack = ({ techStack }) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
          >
            <span className="text-slate-200 font-medium">{tech.name}</span>
            {tech.category && (
              <span className="text-xs text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded-full">
                {tech.category}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;

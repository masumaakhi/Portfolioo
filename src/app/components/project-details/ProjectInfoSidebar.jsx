import React from "react";
import { Briefcase, Building2, Clock, Users, Activity } from "lucide-react";

const InfoItem = ({ icon: Icon, label, value }) => {
  if (!value) return null;
  return (
    <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
      <div className="p-2.5 bg-slate-700/50 rounded-lg text-cyan-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-slate-100 font-medium leading-snug">{value}</p>
      </div>
    </div>
  );
};

const ProjectInfoSidebar = ({ project }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
      <InfoItem icon={Briefcase} label="Role" value={project.role} />
      <InfoItem icon={Building2} label="Industry" value={project.industry} />
      <InfoItem icon={Clock} label="Duration" value={project.duration} />
      <InfoItem icon={Users} label="Team Size" value={project.teamSize} />
      <InfoItem icon={Activity} label="Status" value={project.status} />
    </div>
  );
};

export default ProjectInfoSidebar;

//src/app/components/ProjectCard.jsx

import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ slug, image, title, description, tasks, viewLink, githubLink }) => {
  return (
    <div className="card group relative bg-slate-800 text-white overflow-hidden shadow-lg hover:shadow-xl w-full max-w-sm">
      
      {/* 🖼️ Image Section */}
    <div className="w-full h-[570px] relative bg-slate-900">
  <Image
    src={image}
    alt={`${title} - Project Screenshot`}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="object-cover object-top"
    quality={85}
    loading="lazy"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  />
</div>

      {/* Overlay Content */}
      <div className="card__overlay">
        <div className="card__header bg-slate-800">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
          <div className="card__header-text p-3">
            <h3 className="card__title text-xl font-bold mb-3">{title}</h3>

            {/* 🔗 Buttons Section */}
            <div className="flex flex-wrap gap-2 items-center mt-2">
              <a
                href={viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" viewlink bg-blue-600 text-white px-3 py-1.5 rounded-[24px] text-[13px] font-medium whitespace-nowrap"
              >
                View Live
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" gitlink bg-gray-700 text-white px-3 py-1.5 rounded-[24px] text-[13px] font-medium whitespace-nowrap"
              >
                GitHub
              </a>
              {slug && (
                <Link
                  href={`/projects/${slug}`}
                  className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-3 py-1.5 rounded-[24px] text-[13px] font-medium whitespace-nowrap transition-all"
                >
                  Details View
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 📄 Description Section */}
        <div className="card__description bg-slate-800 text-[#F8FAFC] p-6">
          <p className="mb-4 text-slate-200">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tasks.map((task, index) => (
              <span
                key={index}
                className="taskbutton bg-slate-700 text-[#F8FAFC] text-sm px-3 py-2 rounded-[24px]"
              >
                {task}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

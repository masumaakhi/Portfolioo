"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ProjectHero = ({ project }) => {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative w-full pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-cyan-500/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm md:text-base text-cyan-400 mb-8 font-medium overflow-hidden">
          <Link href="/" className="hover:text-cyan-300 transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
          <Link href="/projects" className="hover:text-cyan-300 transition-colors shrink-0">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
          <span className="text-slate-400 truncate">
            {project.title}
          </span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium mb-6 uppercase tracking-wider">
            {project.type.replace("-", " ")} Project
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {project.viewLink && (
              <a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-full transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-cyan-900/20 bg-slate-900"
        >
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`${project.title} - Image ${currentIndex + 1}`}
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Indicators for Carousel */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIndex
                      ? "w-6 h-2 bg-cyan-400"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;

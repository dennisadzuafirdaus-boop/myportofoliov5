import React, { useRef, useState } from "react";
import { motion } from "motion/react";

import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY(((x - centerX) / centerX) * 8);
    setRotateX(-((y - centerY) / centerY) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      className="group"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(project)}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative cursor-pointer"
      >
        {/* Glow */}
        <div
          className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/90 shadow-2xl">
          {/* Image */}
          <div
            className="relative overflow-hidden"
            style={{
              transform: "translateZ(30px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="aspect-video overflow-hidden bg-neutral-900">
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Category */}
            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            {/* Year */}
            <div className="absolute right-5 top-5">
              <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-neutral-300 backdrop-blur-md">
                {project.year}
              </span>
            </div>

            {/* View Details */}
            <div
              className={`absolute bottom-5 right-5 transition-all duration-500 ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <span className="rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-200 backdrop-blur-md">
                View Details →
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className="p-6"
            style={{
              transform: "translateZ(20px)",
              transformStyle: "preserve-3d",
            }}
          >
            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-400">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-blue-300"
                >
                  {technology}
                </span>
              ))}

              {project.technologies.length > 5 && (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-500">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-neutral-500">Explore project</span>

              <span className="text-lg text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

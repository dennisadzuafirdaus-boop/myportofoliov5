import React, { useState } from "react";

import type { Project } from "../../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) return null;

  const images = project.images ?? [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-xl text-white backdrop-blur-md transition hover:bg-white/10"
        >
          ×
        </button>

        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="mb-8 pr-12">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                {project.category}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                {project.year}
              </span>
            </div>

            <h2 className="text-3xl font-black text-white md:text-4xl">
              {project.title}
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              {project.description}
            </p>
          </div>

          {/* Screenshots */}
          {images.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-white">
                Project Preview
              </h3>

              {/* Main image */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <img
                  src={images[selectedImage]}
                  alt={`${project.title} screenshot ${selectedImage + 1}`}
                  className="max-h-[500px] w-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`overflow-hidden rounded-xl border transition ${
                        selectedImage === index
                          ? "border-blue-400 ring-2 ring-blue-500/30"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="aspect-video w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-white">Key Features</h3>

            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-6 text-neutral-400"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribution */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              My Contribution
            </h3>

            <p className="leading-7 text-neutral-400">{project.contribution}</p>
          </div>

          {/* Online Demo */}
          {project.demo && (
            <div>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 font-medium text-blue-300 transition hover:bg-blue-500/20 hover:text-white"
              >
                <span>🌐</span>
                Open Live Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

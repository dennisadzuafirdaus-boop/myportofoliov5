import React, { useState } from "react";

import { projects, type Project } from "../../data/projects";

import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

import SectionBackground from "../ui/SectionBackground";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-black px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionBackground>
        <div className="px-6 py-24">
          <div className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="relative mx-auto w-full max-w-7x">
              {/* Header */}
              <div className="mb-14 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.4em] text-blue-400">
                  My Projects
                </p>

                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  Featured{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
                  A collection of projects I have developed, including web
                  applications, information systems, e-commerce platforms, and
                  other software projects.
                </p>
              </div>

              {/* Projects */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;

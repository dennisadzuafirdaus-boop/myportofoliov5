import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Particles from "../ui/Particles";
import SkillOrbit from "../ui/SkillOrbit";

import {
  skills,
  skillCategories,
  type Skill,
  type SkillFilter,
} from "../../data/Skills";

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("All");

  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") {
      return skills;
    }

    return skills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: SkillFilter) => {
    setActiveFilter(filter);
    setActiveSkill(null);
  };

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-black px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* ================================================= */}
      {/* PARTICLES BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Dark overlay */}

      <div className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.75)_65%,#000_100%)]" />

      {/* Top glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 -z-[4] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.45em] text-blue-400 sm:text-sm">
            My Toolkit
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            A collection of technologies and tools I use to transform ideas into
            functional, modern, and interactive digital experiences.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* FILTER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {skillCategories.map((category) => {
            const active = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleFilterChange(category)}
                className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  active
                    ? "border-blue-400/30 bg-blue-500/10 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.1)]"
                    : "border-white/10 bg-white/[0.025] text-neutral-500 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skill-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10"
                  />
                )}

                {category}
              </button>
            );
          })}
        </motion.div>

        {/* ================================================= */}
        {/* ORBIT + INFO */}
        {/* ================================================= */}

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Orbit */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            <SkillOrbit
              skills={filteredSkills}
              activeSkill={activeSkill}
              onSkillSelect={setActiveSkill}
            />
          </motion.div>

          {/* ================================================= */}
          {/* INFORMATION PANEL */}
          {/* ================================================= */}

          <div className="relative">
            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.id}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9"
                >
                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                  <div className="relative z-10">
                    {/* Icon */}

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/60">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-9 w-9"
                        fill={`#${activeSkill.icon.hex}`}
                      >
                        <path d={activeSkill.icon.path} />
                      </svg>
                    </div>

                    {/* Category */}

                    <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                      {activeSkill.category}
                    </p>

                    {/* Name */}

                    <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                      {activeSkill.name}
                    </h3>

                    {/* Description */}

                    <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">
                      {activeSkill.description}
                    </p>

                    {/* Line */}

                    <div className="mt-8 h-px w-full bg-white/10">
                      <div className="h-px w-1/3 bg-gradient-to-r from-blue-400 to-violet-500" />
                    </div>

                    {/* Small text */}

                    <p className="mt-6 text-xs leading-5 text-neutral-600">
                      Part of my development toolkit and used across personal
                      projects, academic projects, and professional experience.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9"
                >
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-violet-400">
                      Fullstack Developer
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                      Building from{" "}
                      <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                        Frontend
                      </span>{" "}
                      to Backend.
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">
                      I work across the stack, from designing interfaces and
                      building interactive experiences to developing backend
                      logic, APIs, and database systems.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <p className="text-2xl font-black text-white">
                          {
                            skills.filter(
                              (skill) => skill.category === "Frontend",
                            ).length
                          }
                        </p>

                        <p className="mt-1 text-xs text-neutral-600">
                          Frontend
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <p className="text-2xl font-black text-white">
                          {
                            skills.filter(
                              (skill) => skill.category === "Backend",
                            ).length
                          }
                        </p>

                        <p className="mt-1 text-xs text-neutral-600">Backend</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <p className="text-2xl font-black text-white">
                          {
                            skills.filter(
                              (skill) => skill.category === "Database",
                            ).length
                          }
                        </p>

                        <p className="mt-1 text-xs text-neutral-600">
                          Database
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <p className="text-2xl font-black text-white">
                          {
                            skills.filter((skill) => skill.category === "Tools")
                              .length
                          }
                        </p>

                        <p className="mt-1 text-xs text-neutral-600">Tools</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <p className="text-xs leading-6 text-neutral-600 sm:text-sm">
            Always learning, experimenting, and exploring new technologies to
            build better digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

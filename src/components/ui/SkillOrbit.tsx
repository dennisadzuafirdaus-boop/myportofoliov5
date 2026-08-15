import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import type { Skill } from "../../data/Skills";

interface SkillOrbitProps {
  skills: Skill[];
  activeSkill: Skill | null;
  onSkillSelect: (skill: Skill) => void;
}

interface OrbitItemProps {
  skill: Skill;
  index: number;
  total: number;
  radius: number;
  duration: number;
  paused: boolean;
  onSelect: (skill: Skill) => void;
}

const OrbitItem: React.FC<OrbitItemProps> = ({
  skill,
  index,
  total,
  radius,
  duration,
  paused,
  onSelect,
}) => {
  const angle = (360 / total) * index;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
      animate={{
        rotate: paused ? angle : [angle, angle + 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(skill)}
        className="absolute left-1/2 top-0 -translate-x-1/2"
        whileHover={{
          scale: 1.15,
        }}
        aria-label={`View ${skill.name}`}
      >
        <div className="group relative">
          {/* Glow */}
          <div className="absolute -inset-3 rounded-full bg-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

          {/* Icon */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/80 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 sm:h-16 sm:w-16">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
              fill={`#${skill.icon.hex}`}
            >
              <path d={skill.icon.path} />
            </svg>
          </div>

          {/* Name */}
          <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[10px] font-medium text-neutral-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
            {skill.name}
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

const SkillOrbit: React.FC<SkillOrbitProps> = ({
  skills,
  activeSkill,
  onSkillSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const orbitSkills = useMemo(() => {
    return skills.slice(0, isMobile ? 8 : 12);
  }, [skills, isMobile]);

  const radius = isMobile ? 115 : 175;

  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================= */}
      {/* OUTER GLOW */}
      {/* ========================= */}

      <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute h-[45%] w-[45%] rounded-full bg-violet-500/10 blur-[80px]" />

      {/* ========================= */}
      {/* ORBIT RINGS */}
      {/* ========================= */}

      <div
        className="absolute rounded-full border border-white/[0.07]"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />

      <div
        className="absolute rounded-full border border-blue-500/[0.08]"
        style={{
          width: radius * 1.45,
          height: radius * 1.45,
        }}
      />

      {/* ========================= */}
      {/* CENTER */}
      {/* ========================= */}

      <motion.div
        animate={{
          scale: activeSkill ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="relative z-20 flex h-36 w-36 items-center justify-center rounded-full border border-blue-400/20 bg-black/80 shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-xl sm:h-44 sm:w-44"
      >
        {/* Inner glow */}
        <div className="pointer-events-none absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent" />

        <div className="relative text-center">
          {activeSkill ? (
            <>
              <svg
                viewBox="0 0 24 24"
                className="mx-auto mb-2 h-9 w-9 sm:h-10 sm:w-10"
                fill={`#${activeSkill.icon.hex}`}
              >
                <path d={activeSkill.icon.path} />
              </svg>

              <p className="text-sm font-bold text-white sm:text-base">
                {activeSkill.name}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-blue-400">
                {activeSkill.category}
              </p>
            </>
          ) : (
            <>
              <p className="text-xl font-black tracking-tight text-white sm:text-2xl">
                FULLSTACK
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-blue-400 sm:text-xs">
                Developer
              </p>

              <div className="mx-auto mt-3 h-px w-10 bg-gradient-to-r from-blue-400 to-violet-500" />
            </>
          )}
        </div>
      </motion.div>

      {/* ========================= */}
      {/* ORBITING SKILLS */}
      {/* ========================= */}

      {orbitSkills.map((skill, index) => (
        <OrbitItem
          key={skill.id}
          skill={skill}
          index={index}
          total={orbitSkills.length}
          radius={radius}
          duration={isMobile ? 30 : 38}
          paused={isHovered}
          onSelect={onSkillSelect}
        />
      ))}

      {/* ========================= */}
      {/* HOVER MESSAGE */}
      {/* ========================= */}

      {!activeSkill && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-neutral-600"
        >
          Hover & click a technology
        </motion.p>
      )}
    </div>
  );
};

export default SkillOrbit;

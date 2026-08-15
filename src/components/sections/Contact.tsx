import React from "react";
import { motion } from "motion/react";

import Particles from "../ui/Particles";
import ContactCard from "../ui/ContactCard";

import { contactItems } from "../../data/contact";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-black px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* ================================================= */}
      {/* PARTICLES */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#60a5fa", "#8b5cf6"]}
          particleCount={450}
          particleSpread={18}
          speed={0.16}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ================================================= */}
      {/* DARK OVERLAY */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.8)_70%,#000_100%)]" />

      {/* ================================================= */}
      {/* BLUE / VIOLET GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[4] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-[20%] top-[30%] -z-[4] h-48 w-48 rounded-full bg-violet-600/10 blur-[100px]" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />

            <p className="text-xs font-medium uppercase tracking-[0.4em] text-blue-400 sm:text-sm">
              Get In Touch
            </p>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          {/* Heading */}

         <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Something
            </span>{" "}
            <span className="text-white">Extraordinary.</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            Have an idea, project, or opportunity? Let's turn it into something
            real. I'm always open to discussing new ideas, collaborations, and
            exciting opportunities.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* MAIN CARD */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10"
        >
          {/* Card glow */}

          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative z-10">
            {/* ================================================= */}
            {/* STATUS */}
            {/* ================================================= */}

            <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                {/* Online indicator */}

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/5">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400/40" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Available
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Open to opportunities & collaborations
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span className="text-blue-400">●</span>
                Jakarta, Indonesia
              </div>
            </div>

            {/* ================================================= */}
            {/* MESSAGE */}
            {/* ================================================= */}

            <div className="grid gap-10 py-9 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-violet-400">
                  Let's Connect
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Have something
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                    in mind?
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                  Whether it's a web application, software project, internship
                  opportunity, or collaboration, feel free to reach out.
                </p>
              </div>

              {/* ================================================= */}
              {/* CONTACT GRID */}
              {/* ================================================= */}

              <div className="grid gap-3 sm:grid-cols-2">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.id}
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
                      duration: 0.5,
                      delay: 0.25 + index * 0.08,
                    }}
                  >
                    <ContactCard item={item} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================================================= */}
            {/* BOTTOM */}
            {/* ================================================= */}

            <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-400">
                  Thanks for stopping by.
                </p>

                <p className="mt-1 text-xs text-neutral-600">
                  Let's create something meaningful together.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">
                  Dennis
                </span>

                <span className="h-1 w-1 rounded-full bg-blue-400" />

                <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">
                  Fullstack Developer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-16 text-center"
        >
          <div className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <p className="text-xs text-neutral-700">
            © 2026 Dennis Adzua Firdaus. Built with React, Tailwind CSS & lots
            of caffeine.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import RotatingText from "../ui/RotatingText";
import Particles from "../ui/Particles";
import AnimatedContent from "../ui/AnimatedContent";
import SplitText from "../ui/SplitText";
import BlurText from "../ui/BlurText";
import FadeContent from "../ui/FadeContent";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white">
      {/* PARTICLES */}
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

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center gap-3">
        {/* READY FOR JOB + ROTATING TEXT */}
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={1.25}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-xl font-bold">
            <span className="text-white">READY FOR JOB</span>

            <div className="inline-flex min-w-[260px] justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-white shadow-lg shadow-violet-500/20">
              <RotatingText
                texts={[
                  "Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                ]}
                mainClassName="font-bold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </div>
          </div>
        </AnimatedContent>

        <div className="flex flex-col items-center justify-center gap-5 text-center">
          {/* HELLO */}
          <SplitText
            text="HELLO, I'M"
            className="text-sm font-medium uppercase tracking-[0.5em] text-blue-400 sm:text-base"
            delay={50}
            duration={1.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          {/* NAME */}
          <SplitText
            text="Dennis."
            className="text-4xl font-black tracking-tight sm:text-7xl md:text-8xl"
            delay={50}
            duration={1.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
    {/* ROLE */}
          <SplitText
            text="FullStack Developer"
            className="text-2xl font-bold sm:text-3xl md:text-4xl"
            delay={50}
            duration={1.45}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div>
          <BlurText
            text="I am a passionate FullStack Developer with expertise in both frontend and backend development. My goal is to contribute to innovative projects and continuously enhance my skills in the ever-evolving field of web development."
            delay={50}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="mx-auto max-w-4xl text-center text-base leading-8 text-neutral-400 sm:text-lg md:text-xl"
          />
        </div>

        <FadeContent
          blur={true}
          duration={1000}
          ease="power2.out"
          initialOpacity={0}
        >
          {/* BUTTON */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
            >
              View My Projects
            </a>

            <a
              href="./cv/Dennis Adzua firdaus-resume.pdf"
              download
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
            >
              Download CV
            </a>
          </div>
        </FadeContent>

        {/* SCROLL */}
        <a
          href="#about"
          className="mt-12 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.4em] text-neutral-500 transition-colors hover:text-cyan-400"
        >
          <span>Scroll</span>

          <span className="h-10 w-px bg-gradient-to-b from-neutral-500 to-transparent" />
        </a>
      </div>
    </section>
  );
}

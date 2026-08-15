"use client";

import Lanyard from "../ui/Lanyard";
import ShapeGrid from "../ui/ShapeGrid";
import BlurText from "../ui/BlurText";
import SectionBackground from "../ui/SectionBackground";

import {
  siReact,
  siJavascript,
  siTypescript,
  siHtml5,
  siTailwindcss,
  siPhp,
  siLaravel,
  siMysql,
  siGit,
  siGithub,
  siVite,
} from "simple-icons";

import LogoScrollVelocity, { type LogoItem } from "../ui/LogoScrollVelocity";

const technologyLogos: LogoItem[] = [
  { name: "React", icon: siReact },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "HTML5", icon: siHtml5 },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "PHP", icon: siPhp },
  { name: "Laravel", icon: siLaravel },
  { name: "MySQL", icon: siMysql },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "Vite", icon: siVite },
];

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-black px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionBackground>
        <div className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            {/* ================================================= */}
            {/* CONTAINER UTAMA ABOUT                             */}
            {/* ShapeGrid mengikuti ukuran container ini          */}
            {/* ================================================= */}
            <div className="relative mx-auto w-full max-w-7xl">
              {/* ================================================= */}
              {/* BACKGROUND SHAPE GRID                             */}
              {/* HANYA SEBESAR CONTAINER ABOUT                     */}
              {/* ================================================= */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <ShapeGrid
                  speed={0.7}
                  squareSize={45}
                  direction="diagonal"
                  borderColor="#E0E7FF"
                  hoverFillColor="#FFFFFF"
                  shape="square"
                  hoverTrailAmount={3}
                />
              </div>

              {/* ================================================= */}
              {/* DARK OVERLAY                                       */}
              {/* ================================================= */}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-black/60" />

              {/* ================================================= */}
              {/* SEMUA CONTENT                                      */}
              {/* ================================================= */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                {/* ========================= */}
                {/* JUDUL SECTION              */}
                {/* ========================= */}
                <div className="mb-10 text-center">
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.4em] text-blue-400">
                    About Me
                  </p>

                  <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    Get to Know{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                      Me
                    </span>
                  </h2>
                </div>

                {/* ========================= */}
                {/* CARD / CONTENT             */}
                {/* ========================= */}
                <div className="relative z-10">
                  <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">
                    {/* ========================= */}
                    {/* LEFT - LANYARD              */}
                    {/* ========================= */}
                    <div className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[700px]">
                      {/* Glow */}
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                      <div className="relative z-10 h-[700px] w-full scale-110">
                        <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
                      </div>
                    </div>

                    {/* ========================= */}
                    {/* RIGHT - ABOUT CONTENT      */}
                    {/* ========================= */}
                    <div className="flex items-center px-6 py-12 sm:px-10 lg:px-14">
                      <div className="max-w-xl">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                          Who I Am
                        </p>

                        <h3 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                          I'm Dennis, a{" "}
                          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                            Fullstack Developer.
                          </span>
                        </h3>

                        <div className="space-y-4 text-base leading-7 text-neutral-400">
                          <BlurText
                            text="Hello! I'm Dennis, a Full-stack Developer with an interest in building modern, interactive, and user-friendly web applications."
                            animateBy="words"
                            direction="bottom"
                            delay={40}
                            stepDuration={0.35}
                            threshold={0.1}
                            rootMargin="-50px"
                            className="text-base leading-7 text-neutral-400"
                          />

                          <BlurText
                            text="I enjoy developing applications across both the frontend and backend—from designing user interfaces and building features to managing databases and APIs."
                            animateBy="words"
                            direction="bottom"
                            delay={40}
                            stepDuration={0.35}
                            threshold={0.1}
                            rootMargin="-50px"
                            className="text-base leading-7 text-neutral-400"
                          />

                          <BlurText
                            text="For me a website shouldn't just look good, it also needs to have a solid structure, optimal performance, and provide a comfortable user experience."
                            animateBy="words"
                            direction="bottom"
                            delay={40}
                            stepDuration={0.35}
                            threshold={0.1}
                            rootMargin="-50px"
                            className="text-base leading-7 text-neutral-400"
                          />
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8 flex flex-wrap gap-3">
                          {[
                            "React",
                            "TypeScript",
                            "Tailwind CSS",
                            "Laravel",
                            "MySQL",
                            "Node.js",
                            "Next.js",
                          ].map((tech) => (
                            <BlurText
                              key={tech}
                              text={tech}
                              animateBy="letters"
                              direction="bottom"
                              delay={30}
                              stepDuration={0.3}
                              threshold={0.1}
                              rootMargin="-30px"
                              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ========================= */}
                  {/* TECHNOLOGY STACK            */}
                  {/* ========================= */}
                  <div className="mt-20">
                    <div className="mb-8 text-center">
                      <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        My Stack
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                        Technologies I Use
                      </h3>

                      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-400">
                        I have experience with a variety of technologies and
                        tools.
                      </p>
                    </div>

                    <div className="space-y-6 pb-10">
                      <LogoScrollVelocity
                        logos={technologyLogos}
                        direction="left"
                        speed={1}
                        gap={70}
                        logoSize={45}
                        pauseOnHover={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </section>
  );
};

export default About;

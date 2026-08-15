import React from "react";
import Particles from "./Particles";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`relative isolate overflow-hidden bg-black ${className}`}
    >
      {/* Particles Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
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

      {/* Gradient supaya particles tidak terlalu terang */}
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_70%,#000_100%)]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SectionBackground;

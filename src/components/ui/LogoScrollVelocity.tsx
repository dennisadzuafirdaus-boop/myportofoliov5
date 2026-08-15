import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SimpleIcon } from "simple-icons";

gsap.registerPlugin(ScrollTrigger);

export interface LogoItem {
  name: string;
  icon: SimpleIcon;
}

interface LogoScrollVelocityProps {
  logos: LogoItem[];
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
  logoSize?: number;
  className?: string;
  pauseOnHover?: boolean;
}

const LogoScrollVelocity: React.FC<LogoScrollVelocityProps> = ({
  logos,
  direction = "left",
  speed = 1,
  gap = 80,
  logoSize = 48,
  className = "",
  pauseOnHover = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track || logos.length === 0) {
      return;
    }

    /*
     * Karena logo kita duplikat 2x,
     * setengah dari total width adalah
     * jarak satu putaran penuh.
     */
    const loopWidth = track.scrollWidth / 2;

    if (loopWidth <= 0) return;

    const directionMultiplier = direction === "left" ? -1 : 1;

    const baseSpeed = 50 * speed;

    /*
     * Animasi dasar logo.
     */
    const animation = gsap.to(track, {
      x: directionMultiplier * loopWidth,
      duration: loopWidth / baseSpeed,
      ease: "none",
      repeat: -1,

      modifiers: {
        x: gsap.utils.unitize((value) => {
          const current = parseFloat(value);

          if (direction === "left") {
            return current <= -loopWidth ? current + loopWidth : current;
          }

          return current >= loopWidth ? current - loopWidth : current;
        }),
      },
    });

    animationRef.current = animation;

    /*
     * Scroll velocity.
     */
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,

      start: "top bottom",
      end: "bottom top",

      onUpdate: (self) => {
        const velocity = self.getVelocity();

        /*
         * Batasi velocity supaya logo
         * tidak bergerak terlalu ekstrem.
         */
        const limitedVelocity = gsap.utils.clamp(-2000, 2000, velocity);

        const velocityAmount = Math.min(Math.abs(limitedVelocity) / 800, 3);

        /*
         * Semakin cepat scroll,
         * semakin cepat logo bergerak.
         */
        const timeScale = 1 + velocityAmount;

        gsap.to(animation, {
          timeScale,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        /*
         * Efek miring ketika scroll cepat.
         */
        const skewAmount = gsap.utils.clamp(-8, 8, limitedVelocity / 250);

        gsap.to(track, {
          skewX: skewAmount,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });
      },
    });

    /*
     * Ketika scroll berhenti,
     * kembali ke kecepatan normal.
     */
    const handleScrollEnd = () => {
      gsap.to(animation, {
        timeScale: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(track, {
        skewX: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    ScrollTrigger.addEventListener("scrollEnd", handleScrollEnd);

    /*
     * Pause ketika hover.
     */
    const handleMouseEnter = () => {
      if (!pauseOnHover) return;

      gsap.to(animation, {
        timeScale: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!pauseOnHover) return;

      gsap.to(animation, {
        timeScale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);

    container.addEventListener("mouseleave", handleMouseLeave);

    /*
     * Cleanup.
     */
    return () => {
      scrollTrigger.kill();

      ScrollTrigger.removeEventListener("scrollEnd", handleScrollEnd);

      container.removeEventListener("mouseenter", handleMouseEnter);

      container.removeEventListener("mouseleave", handleMouseLeave);

      animation.kill();

      animationRef.current = null;
    };
  }, [logos, direction, speed, pauseOnHover]);

  /*
   * Duplikasi logo untuk infinite loop.
   */
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Fade kiri */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />

      {/* Fade kanan */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max items-center"
        style={{
          gap: `${gap}px`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="group flex shrink-0 items-center justify-center"
            style={{
              width: `${logoSize + 20}px`,
              height: `${logoSize + 20}px`,
            }}
          >
            <svg
              role="img"
              aria-label={logo.name}
              viewBox="0 0 24 24"
              className="fill-current text-neutral-500 opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:opacity-100"
              style={{
                width: `${logoSize}px`,
                height: `${logoSize}px`,
              }}
            >
              <path d={logo.icon.path} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScrollVelocity;

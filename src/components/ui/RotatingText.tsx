import { AnimatePresence, motion, type Transition } from "motion/react";
import { useEffect, useState } from "react";

interface RotatingTextProps {
  texts: string[];

  rotationInterval?: number;

  mainClassName?: string;

  splitLevelClassName?: string;

  transition?: Transition;

  initial?: {
    y?: string | number;
    opacity?: number;
  };

  animate?: {
    y?: string | number;
    opacity?: number;
  };

  exit?: {
    y?: string | number;
    opacity?: number;
  };

  staggerDuration?: number;

  staggerFrom?: "first" | "last" | "center";

  splitBy?: "characters" | "words";

  auto?: boolean;

  loop?: boolean;
}

export default function RotatingText({
  texts,
  rotationInterval = 2000,
  mainClassName = "",
  splitLevelClassName = "",
  transition = {
    type: "spring",
    damping: 30,
    stiffness: 400,
  },
  initial = {
    y: "100%",
    opacity: 0,
  },
  animate = {
    y: 0,
    opacity: 1,
  },
  exit = {
    y: "-120%",
    opacity: 0,
  },
  staggerDuration = 0.025,
  staggerFrom = "first",
  splitBy = "characters",
  auto = true,
  loop = true,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!auto || texts.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => {
        if (current === texts.length - 1) {
          return loop ? 0 : current;
        }

        return current + 1;
      });
    }, rotationInterval);

    return () => {
      window.clearInterval(interval);
    };
  }, [auto, loop, rotationInterval, texts.length]);

  const currentText = texts[currentIndex] ?? "";

  const items =
    splitBy === "words" ? currentText.split(" ") : Array.from(currentText);

  const getDelay = (index: number) => {
    if (staggerFrom === "last") {
      return (items.length - 1 - index) * staggerDuration;
    }

    if (staggerFrom === "center") {
      const center = Math.floor(items.length / 2);

      return Math.abs(center - index) * staggerDuration;
    }

    return index * staggerDuration;
  };

  return (
    <span className={`relative inline-flex flex-wrap ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex flex-wrap"
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          {items.map((item, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ...transition,
                delay: getDelay(index),
              }}
              className={`inline-block ${splitLevelClassName}`}
            >
              {item}

              {splitBy === "words" && index < items.length - 1 && (
                <span>&nbsp;</span>
              )}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

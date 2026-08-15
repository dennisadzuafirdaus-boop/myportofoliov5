import React from "react";
import { motion } from "motion/react";

import type { ContactItem } from "../../data/contact";

interface ContactCardProps {
  item: ContactItem;
}

const ContactIcon: React.FC<{
  type: ContactItem["icon"];
}> = ({ type }) => {
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.87 9.87 0 01-1.511-5.26c.002-5.45 4.437-9.884 9.893-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.891 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.89c0 2.096.547 4.142 1.588 5.945L.06 24l6.304-1.654a11.882 11.882 0 005.684 1.447h.005c6.554 0 11.89-5.335 11.892-11.89a11.821 11.821 0 00-3.481-8.415" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />

        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 01.001 4.124zM3.555 8.999h3.558v11.453H3.555V8.999z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />

      <circle cx="12" cy="12" r="4" />

      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};

const ContactCard: React.FC<ContactCardProps> = ({ item }) => {
  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      whileHover={{
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.04]"
    >
      {/* Glow */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-300">
          <ContactIcon type={item.icon} />
        </div>

        {/* Text */}

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            {item.label}
          </p>

          <p className="mt-1 truncate text-sm font-medium text-neutral-300 transition-colors group-hover:text-white">
            {item.value}
          </p>
        </div>

        {/* Arrow */}

        <span className="ml-auto text-lg text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
          →
        </span>
      </div>
    </motion.a>
  );
};

export default ContactCard;

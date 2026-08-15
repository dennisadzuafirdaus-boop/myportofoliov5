export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "whatsapp" | "email" | "linkedin" | "instagram";
}

export const contactItems: ContactItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Let's talk",
    href: "https://wa.me/6285810497177",
    icon: "whatsapp",
  },

  {
    id: "email",
    label: "Email",
    value: "Send email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dennisadzuafirdaus@gmail.com",
    icon: "email",
  },

  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/dennis-adzua-firdaus",
    icon: "linkedin",
  },

  {
    id: "instagram",
    label: "Instagram",
    value: "Follow me",
    href: "https://www.instagram.com/adzuaaa",
    icon: "instagram",
  },
];

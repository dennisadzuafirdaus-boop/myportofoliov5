export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;

  shortDescription: string;
  description: string;
  contribution: string;

  images: string[];

  technologies: string[];
  features: string[];

  demo?: string;
}

export const projects: Project[] = [
  {
    id: "sistem-pakar-ibu-hamil",
    title: "Sistem Pakar Diagnosis Ibu Hamil",
    category: "Dekstop Aplication",
    year: "2025",

    shortDescription:
      "A web-based expert system designed to help identify possible pregnancy-related conditions using the Forward Chaining method.",

    description:
      "This project is a web-based expert system designed to assist users in identifying possible health conditions during pregnancy. The system applies the Forward Chaining method to process symptoms and generate diagnostic results based on predefined rules.",

    contribution:
      "I was responsible for designing the system, developing the user interface, implementing the Forward Chaining logic, designing the database, and integrating the application with MySQL.",

    images: ["/images/project/appsistempakar.webp"],

    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],

    features: [
      "Expert system diagnosis",
      "Forward Chaining",
      "Symptom management",
      "Disease management",
      "Diagnosis results",
      "Admin dashboard",
      "MySQL database",
    ],
  },

  {
    id: "ecommerce",
    title: "E-Commerce Website",
    category: "E-Commerce",
    year: "2026",

    shortDescription:
      "A modern e-commerce website with product management, shopping cart, and online transaction features.",

    description:
      "An e-commerce application designed to provide users with an easy way to browse products, manage shopping carts, and complete transactions online.",

    contribution:
      "I developed the frontend and backend functionality, designed the database structure, implemented product management, and developed the shopping and transaction flow.",

    images: ["/images/project/ecommers.webp"],

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "JavaScript",
    ],

    features: [
      "Product catalog",
      "Product detail",
      "Shopping cart",
      "Checkout",
      "Authentication",
      "Admin dashboard",
      "Product management",
      "Transaction management",
    ],
  },

  {
    id: "Daseo — Admin Dashboard",
    title: "Daseo — Admin Dashboard",
    category: "Dashboard Admin",
    year: "2026",

    shortDescription:
      "A fully-featured e-commerce admin panel built with React.js and Tailwind CSS, featuring a warm earthy design system, real-time order tracking, product & category management, and sales analytics — all powered by a Laravel REST API.",

    description:
      "Daseo Admin Dashboard is the operational backbone of a Korean fashion e-commerce platform. Designed with a warm earthy palette — cream, sienna, and terracotta — the interface balances aesthetics with functionality, making daily store management feel intuitive rather than sterile.Built with React.js + Vite + Tailwind CSS on the frontend, and connected to a shared Laravel REST API backed by MySQL, the dashboard covers the full admin workflow across 8 core modules: Login, Dashboard overview, Products, Categories, Orders, Customers, Reports, and Settings.",

    contribution:
      "I developed the frontend and backend functionality, designed the database structure, implemented product management, and developed the shopping and transaction flow.",

    images: ["/images/project/Admin-Daseo.png"],

    technologies: [
      "React.js",
      "Vite ",
      "Tailwind CSS",
      "Laravel REST API",
      "MySQL",
      "Axios",
    ],

    features: [
      "Real-time sales metrics and revenue charts on the main dashboard",
      "Full CRUD for products and categories with image management",
      "Order lifecycle tracking from pending to delivered",
      "Customer data management with order history",
      "Role-based access and secure authentication flow",
    ],
    demo: "https://admin.daseoofficial.web.id/",
  },

  {
    id: "Landing Page",
    title: "Daseo — E-Commerce",
    category: "E-Commerce",
    year: "2026",

    shortDescription:
      "A modern Korean fashion storefront built with Vue.js and powered by a Laravel REST API — featuring a bold black & hot pink aesthetic, smooth product browsing, cart & checkout flow, and wishlist functionality.",

    description:
      "Daseo is a Korean fashion e-commerce storefront designed to feel bold, minimal, and editorial — built for a generation that shops with intention. The visual identity leans into a high-contrast palette of deep black (#0D0D0D) with hot pink (#FF2D8B) accents, delivering a brand experience that feels closer to a lookbook than a typical online store.The storefront is built with Vue.js + Vite + Tailwind CSS, communicating with a unified Laravel REST API connected to a MySQL database — the same API that powers the admin dashboard, ensuring consistent, real-time inventory and order data.",

    contribution:
      "I developed the frontend and backend functionality, designed the database structure, implemented product management, and developed the shopping and transaction flow.",

    images: ["/images/project/Daseo-LandingPage.png"],

    technologies: [
      "Vue.js",
      "Vite ",
      "Tailwind CSS",
      "Laravel REST API",
      "MySQL",
    ],

    features: [
      "Homepage with hero section and featured collections",
      "All Products with category filtering and search",
      "Product Detail with image gallery and size selection",
      "Cart & Checkout with order summary",
      "Wishlist with persistent state",
      "About page with brand story",
      "Realtime Payment Gateway Integration",
    ],
    demo: "https://www.daseoofficial.web.id/",
  },

  {
    id: "pos",
    title: "POS Application Web-Base",
    category: "Point of Sale",
    year: "2026",

    shortDescription:
      "A point-of-sale application for managing products, inventory, transactions, and sales.",

    description:
      "A POS application designed to simplify sales transactions and inventory management. The system provides an administrative interface for managing products, stock, and transaction records.",

    contribution:
      "I developed the application architecture, database, product management, stock management, transaction process, and administrative dashboard.",

    images: ["/images/project/pos.webp"],

    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],

    features: [
      "Product management",
      "Inventory management",
      "Sales transactions",
      "Transaction history",
      "Stock monitoring",
      "Admin dashboard",
    ],
  },

  {
    id: "bumilcare",
    title: "SRS BumilCare",
    category: "System Analysis",
    year: "2026",

    shortDescription:
      "A system requirements specification project for a pregnancy health information system.",

    description:
      "This project focuses on analyzing and documenting system requirements for a pregnancy health information system.",

    contribution:
      "I worked on system analysis, requirements gathering, system modeling, documentation, and designing the proposed system workflow.",

    images: ["/images/project/SRS_Bumilcare.webp"],

    technologies: [
      "PHP Native",
      "UML",
      "MySQL",
      "Use Case",
      "Activity Diagram",
      "Database Design",
    ],

    features: [
      "System requirements analysis",
      "Use case modeling",
      "Activity modeling",
      "System documentation",
      "Database planning",
    ],
  },

  {
    id: "system-cms",
    title: "Content Management System",
    category: "Web Application",
    year: "2026",

    shortDescription:
      "A content management system designed to manage website content through an administrative dashboard.",

    description:
      "A CMS application that allows administrators to manage website content through a centralized dashboard.",

    contribution:
      "I designed and developed the CMS interface, database structure, authentication, content management functionality, and administrative dashboard.",

    images: [
      "/images/project/systemcms1.webp",
      "/images/project/systemcms2.webp",
    ],

    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],

    features: [
      "Admin authentication",
      "Dashboard",
      "Content management",
      "CRUD operations",
      "Database management",
      "Responsive interface",
    ],
  },

  {
    id: "ubp",
    title: "UBP Information System",
    category: "Information System",
    year: "2024",

    shortDescription:
      "An information system designed to manage and present structured institutional information.",

    description:
      "An information system project focused on organizing institutional information and providing users with a structured web interface.",

    contribution:
      "I contributed to interface development, database implementation, system functionality, and testing.",

    images: ["/images/project/ubp.webp"],

    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],

    features: [
      "Information management",
      "Database integration",
      "Responsive interface",
      "CRUD functionality",
    ],
  },
];

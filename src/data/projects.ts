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

    demo: "https://your-demo-url.com",
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

    demo: "https://your-demo-url.com",
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

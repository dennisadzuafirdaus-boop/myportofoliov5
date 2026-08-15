import React, { useState } from "react";

import Timeline, { type TimelineEntry } from "../ui/TimeLine";

import ExperienceModal, { type ExperienceFile } from "../ui/ExperienceModal";

import SectionBackground from "../ui/SectionBackground";

/*
|--------------------------------------------------------------------------
| Experience Types
|--------------------------------------------------------------------------
*/

interface ExperienceData {
  title: string;
  position?: string;
  company: string;
  period: string;
  role: string;

  description: string;

  responsibilities: string[];

  images: string[];

  certificates?: ExperienceFile[];

  documents?: ExperienceFile[];
}

/*
|--------------------------------------------------------------------------
| Eka Mulia Images
|--------------------------------------------------------------------------
|
| Pastikan nama file sesuai dengan yang ada di:
| public/images/experience/
|
*/

const ekaMuliaImages = [
  "/images/experience/eka-mulia-1.webp",
  "/images/experience/eka-mulia-2.webp",
  "/images/experience/eka-mulia-3.webp",
  "/images/experience/eka-mulia-4.webp",
  "/images/experience/eka-mulia-5.webp",
  "/images/experience/eka-mulia-6.webp",
];

/*
|--------------------------------------------------------------------------
| Experience Data
|--------------------------------------------------------------------------
*/

const experiences: ExperienceData[] = [
  /*
  |--------------------------------------------------------------------------
  | SMK 37 PGRI JAKARTA
  |--------------------------------------------------------------------------
  */
  {
    title: "Software Engineer",

    position: "Software Engineer",

    company: "SMK PGRI 37 Jakarta | Program Kegiatan KKP",

    period: "October 2024 - January 2025",

    role: "Software Engineer",

    description:
      "Experienced in application and information system development during the practical work program at SMK PGRI 37 Jakarta. I was involved in developing a web-based tuition payment administration information system using native PHP, HTML, CSS, JavaScript, and MySQL. I also designed and managed MySQL databases for student data, payments, and transactions.",

    responsibilities: [
      "Developing a web-based tuition payment administration information system using native PHP, HTML, CSS, JavaScript, and MySQL.",

      "Designing and managing MySQL databases for data on 50+ students, payments, and transactions.",

      "Developing CRUD features to manage student data, tuition payments, and transactions.",

      "Conducted testing and debugging until the system ran stably, reducing logging errors by 40%.",

      "Worked in an 8-person team to complete the project on time.",
    ],

    images: [],

    /*
    |--------------------------------------------------------------------------
    | Sertifikat
    |--------------------------------------------------------------------------
    |
    | Kalau SMK belum memiliki sertifikat khusus,
    | bagian ini boleh tidak digunakan.
    |
    */

    certificates: [],

    /*
    |--------------------------------------------------------------------------
    | Dokumen KKP
    |--------------------------------------------------------------------------
    */

    documents: [
      {
        name: "Form KKP",

        file: "/documents/experience/FORM_KKP.pdf",

        description: "Dokumen Form KKP.",
      },

      {
        name: "Lembar Pengesahan Instansi",

        file: "/documents/experience/LEMBAR_PENGESAHAN_INSTANSI.pdf",

        description: "Lembar pengesahan dari instansi.",
      },

      {
        name: "Lembar Penilaian Instansi",

        file: "/documents/experience/LEMBAR_PENILAIAN_INSTANSI.pdf",

        description: "Dokumen penilaian dari instansi.",
      },

      {
        name: "Surat Keterangan Instansi",

        file: "/documents/experience/SURAT_KETERANGAN_INSTANSI.pdf",

        description: "Surat keterangan pengalaman dari instansi.",
      },

      {
        name: "Surat Permohonan KKP",

        file: "/documents/experience/SURAT_PERMOHONAN_KKP.pdf",

        description: "Surat permohonan kegiatan KKP.",
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | PT. EKA MULIA BHAKTI
  |--------------------------------------------------------------------------
  */

  {
    title: "IT Support",

    position: "IT Support",

    company: "PT Eka Mulia Bhakti | Program Kemnaker Magang Hub",

    period: "24 September 2025 – 23 Mei 2026",

    role: "IT Support",

    description:
      "Gained experience in IT support through the MagangHub program at PT Eka Mulia Bhakti. During the internship, I was involved in supporting hospital information system operations, troubleshooting hardware and applications, monitoring systems, and assisting with data management and verification within the hospital information system.",

    responsibilities: [
      "Troubleshoot computers, printers, and networks for 5+ users in a hospital environment.",

      "Managing user accounts, access rights, and service rate additions within the Tera Medik SIMRS system.",

      "Migrated patient data from the Solvo system to the Tekamedik system for over 1,000 patient records.",

      "Configuring and monitoring the integration of the Orthanc radiology system with a DICOM router to ensure the smooth flow of examination data.",

      "Integrating hospital data with the SatuSehat platform and ensuring the data is successfully transmitted to the server.",

      "Coordinate with various units to resolve IT system and device issues.",
    ],

    images: ekaMuliaImages,

    /*
    |--------------------------------------------------------------------------
    | Sertifikat
    |--------------------------------------------------------------------------
    */

    certificates: [
      {
        name: "Sertifikat MagangHub",

        file: "/documents/experience/sertifikat_magangHub.pdf",

        description: "Sertifikat pengalaman mengikuti program MagangHub.",
      },

      {
        name: "Sertifikat RS Helsa",

        file: "/documents/experience/sertifikatRsHelsa.pdf",

        description: "Sertifikat pengalaman magang di RS Helsa.",
      },
    ],
  },
];

/*
|--------------------------------------------------------------------------
| Experience Section
|--------------------------------------------------------------------------
*/

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceData | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Timeline Data
  |--------------------------------------------------------------------------
  */

  const timelineData: TimelineEntry[] = experiences.map((experience) => ({
    role: experience.role,

    title: experience.period,

    content: (
      <button
        type="button"
        onClick={() => setSelectedExperience(experience)}
        className="group w-full text-left"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-blue-500/5">
          {/* Card Header */}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                {experience.period}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                {experience.title}
              </h3>

              <p className="mt-1 text-sm text-violet-400">
                {experience.company}
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
              View Experience
            </span>
          </div>

          {/* Description */}

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-400">
            {experience.description}
          </p>
        </div>
      </button>
    ),
  }));

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <section id="experience">
      <SectionBackground>
        <div className="relative w-full overflow-hidden py-24">
          {/* Header */}
          <div className="relative z-10 mx-auto mb-16 max-w-4xl px-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Experience
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              My Experience
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
              Some of the experiences I gained while undertaking an internship
              and developing my skills in technology and programming.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative z-10">
            <Timeline data={timelineData} />
          </div>

          {/* Modal */}
          {selectedExperience && (
            <ExperienceModal
              isOpen={true}
              onClose={() => setSelectedExperience(null)}
              title={selectedExperience.title}
              position={selectedExperience.position}
              company={selectedExperience.company}
              period={selectedExperience.period}
              description={selectedExperience.description}
              responsibilities={selectedExperience.responsibilities}
              images={selectedExperience.images}
              certificates={selectedExperience.certificates}
              documents={selectedExperience.documents}
            />
          )}
        </div>
      </SectionBackground>
    </section>
  );
};

export default Experience;

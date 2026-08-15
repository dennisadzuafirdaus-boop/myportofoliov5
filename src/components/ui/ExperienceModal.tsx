import React, { useEffect } from "react";

export interface ExperienceFile {
  name: string;
  file: string;
  description?: string;
}

export interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  position?: string;
  company: string;
  period: string;

  description: string;
  responsibilities: string[];

  images?: string[];

  certificates?: ExperienceFile[];

  documents?: ExperienceFile[];
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  isOpen,
  onClose,
  title,
  position,
  company,
  period,
  description,
  responsibilities,
  images = [],
  certificates = [],
  documents = [],
}) => {
  /*
   * Disable body scroll ketika modal terbuka
   */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /*
   * Tutup modal dengan tombol ESC
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl shadow-black/50"
        onClick={(event) => event.stopPropagation()}
      >
        {/* ================= CLOSE BUTTON ================= */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
        >
          ×
        </button>

        <div className="p-6 md:p-10">
          {/* ================= HEADER ================= */}
          <div className="mb-10 pr-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {period}
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {title}
            </h2>

            {position && (
              <p className="mt-2 text-lg font-semibold text-violet-400">
                {position}
              </p>
            )}

            <p className="mt-1 text-neutral-400">{company}</p>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <section className="mb-10">
            <h3 className="mb-4 text-xl font-bold text-white">
              About the Experience
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="leading-7 text-neutral-400">{description}</p>
            </div>
          </section>

          {/* ================= RESPONSIBILITIES ================= */}
          {responsibilities.length > 0 && (
            <section className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-white">
                Responsibility
              </h3>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <ul className="space-y-4">
                  {responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-6 text-neutral-400"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* ================= DOCUMENTATION ================= */}
          {images.length > 0 && (
            <section className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-white">
                Documentation
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <img
                      src={image}
                      alt={`Dokumentasi ${index + 1}`}
                      loading="lazy"
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= CERTIFICATES ================= */}
          {certificates.length > 0 && (
            <section className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-white">Certificate</h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {certificates.map((certificate, index) => (
                  <a
                    key={index}
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-violet-400/20 bg-violet-500/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
                        🏆
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-semibold text-white transition-colors group-hover:text-violet-300">
                          {certificate.name}
                        </h4>

                        {certificate.description && (
                          <p className="mt-1 text-sm leading-5 text-neutral-400">
                            {certificate.description}
                          </p>
                        )}

                        <span className="mt-3 inline-block text-xs font-medium text-violet-400">
                          View Certificate →
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ================= SUPPORTING DOCUMENTS ================= */}
          {documents.length > 0 && (
            <section>
              <h3 className="mb-4 text-xl font-bold text-white">
                Supporting documents
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {documents.map((document, index) => (
                  <a
                    key={index}
                    href={document.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-blue-400/20 bg-blue-500/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                        📄
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-semibold text-white transition-colors group-hover:text-blue-300">
                          {document.name}
                        </h4>

                        {document.description && (
                          <p className="mt-1 text-sm leading-5 text-neutral-400">
                            {document.description}
                          </p>
                        )}

                        <span className="mt-3 inline-block text-xs font-medium text-blue-400">
                          Open PDF →
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;

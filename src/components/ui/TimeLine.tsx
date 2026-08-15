import React from "react";

export interface TimelineEntry {
  role: string;
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* Garis tengah */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-violet-500/0 md:block" />

      <div className="space-y-12 md:space-y-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={`${item.title}-${index}`}
              className="relative grid grid-cols-1 md:grid-cols-2"
            >
              {/* Titik timeline */}
              <div className="absolute left-1/2 top-8 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-blue-500 shadow-lg shadow-blue-500/50 md:block" />

              {isLeft ? (
                <>
                  {/* Kiri */}
                  <div className="pr-0 md:pr-12">
                    <div className="mb-3 text-left">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                        {item.role}
                      </span>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>

                    {item.content}
                  </div>

                  {/* Kanan kosong */}
                  <div />
                </>
              ) : (
                <>
                  {/* Kiri kosong */}
                  <div />

                  {/* Kanan */}
                  <div className="pl-0 md:pl-12">
                    <div className="mb-3 text-left">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                        {item.role}
                      </span>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>

                    {item.content}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;

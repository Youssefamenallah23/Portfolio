import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { achievements, education, expCards } from "../constants/index1";
import GlowCard from "../components/GlowCard";
import AchievementCard from "../components/AchievementCard";
import EducationCard from "../components/EducationCard";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const progressEl = section.querySelector(".timeline-progress");

    if (progressEl) {
      gsap.fromTo(
        progressEl,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom+=300 bottom",
            scrub: 2,
          },
        }
      );
    }
    gsap.set(progressEl, { scaleY: 0, transformOrigin: "top" });

    // Row entrance animation (keep your existing one)
    section.querySelectorAll(".exp-card-wrapper").forEach((row) => {
      gsap.from(row, {
        y: 300,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full md:mt-40 mt-20 section-padding xl:px-0 relative"
    >
      <div className="w-full h-full md:px-20 px-5 relative">
        <TitleHeader title="My Journey" sub="🧑🏼‍💼 My Career Overview" />

        {/* Sticky centered timeline column */}
        <div className="md:timeline ">
          <div className="md:timeline-progress"></div>
          <div className="md:timeline-glow"></div>
        </div>
        {/* Timeline column */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0 top-[140px] bottom-0 flex justify-center"
        >
          <div className="h-full w-[6px] relative">
            {/* static track (full height) */}
            <div className="timeline-track absolute top-0 bottom-0 mx-auto w-[2px] rounded-full" />

            {/* progress bar (animated with GSAP) */}
            <div className="timeline-progress origin-top absolute top-0 bottom-0 mx-auto w-[2px] rounded-full" />

            {/* glow */}
            <div className="timeline-glow absolute top-0 bottom-0 mx-auto w-6 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-32 relative z-30 xl:space-y-32 space-y-10">
          {expCards.map((card, index) => (
            <div
              key={`exp-${index}`}
              className="exp-card-wrapper flex flex-col xl:flex-row gap-5 xl:gap-10 items-start"
            >
              {/* LEFT */}
              <div className="xl:w-1/3">
                <GlowCard card={card} index={index}>
                  <div>
                    <img src={card.imgPath} alt="experience" />
                  </div>
                </GlowCard>
              </div>

              {/* RIGHT */}
              <div className="xl:w-2/3 max-w-3xl flex items-start">
                {/* logo sits above the line */}
                <div className="timeline-logo mr-3 relative z-40">
                  <img
                    src={card.logoPath}
                    alt="logo"
                    className="w-10 h-10 md:w-16 md:h-16 object-contain"
                  />
                </div>

                <div>
                  <h1 className="font-semibold text-3xl">{card.title}</h1>
                  <p className="my-5 text-white-50">📅 {card.date}</p>
                  <p className="text-[#839cb5] italic">Responsibilities:</p>
                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                    {card.responsibilities.map((item, i) => (
                      <li key={i} className="text-lg leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {achievements.map((achievement, index) => (
            <div
              key={`ach-${index}`}
              className="exp-card-wrapper flex flex-col xl:flex-row gap-5 xl:gap-10 items-start"
            >
              {/* LEFT */}
              <div className="xl:w-1/3">
                <AchievementCard achievement={achievement} index={index} />
              </div>

              {/* RIGHT */}
              <div className="xl:w-2/3 max-w-3xl flex items-start">
                <div className="timeline-logo mr-3 relative z-40">
                  <img
                    src={achievement.logoPath}
                    alt="logo"
                    className="w-10 h-10 md:w-16 md:h-16 object-contain"
                  />
                </div>

                <div className="max-w-2xl">
                  <h1 className="font-semibold text-3xl">
                    {achievement.title}
                  </h1>
                  <p className="my-5 text-white-50">📅 {achievement.date}</p>
                  <p className="text-[#839cb5] italic">
                    Project: {achievement.project}
                  </p>
                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                    {achievement.description.map((item, i) => (
                      <li key={i} className="text-lg leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {education.map((edu, index) => (
            <div
              key={`edu-${index}`}
              className="exp-card-wrapper flex flex-col xl:flex-row gap-5 xl:gap-10 items-stretch"
            >
              {/* LEFT */}
              <div className="xl:w-1/3 flex justify-center xl:justify-start items-center">
                <EducationCard className="w-full" edu={edu} index={index} />
              </div>

              {/* RIGHT */}
              <div className="xl:w-2/3 max-w-3xl flex items-start">
                <div className="timeline-logo mr-3 relative z-40">
                  <img
                    src={edu.eduPath}
                    alt="logo"
                    className="w-10 h-10 md:w-16 md:h-16 object-contain"
                  />
                </div>

                <div className="max-w-2xl">
                  <h1 className="font-semibold text-3xl">{edu.degree}</h1>
                  <p className="my-1 text-white-50">📅 {edu.date}</p>
                  <p className="text-[#839cb5] italic">Details:</p>
                  <ul className="list-disc ms-5 mt-2 flex flex-col gap-3 text-white-50">
                    {edu.details.map((item, i) => (
                      <li key={i} className="text-lg leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

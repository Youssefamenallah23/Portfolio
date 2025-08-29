import { useGSAP } from "@gsap/react";
import Techicon from "../components/models/TechLogos/Techicon";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants/index";
import { gsap } from "gsap";
import LazyTechicon from "../components/models/TechLogos/LazyTechIcon";
const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full md:px-20 px-5 h-full">
        <TitleHeader
          title="Value in Action"
          sub="💡 Skills & Expertise That Drive Results"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-content">
                <div className="tech-card-animated-bg"></div>
                <div className="tech-icon-wrapper">
                  <Techicon model={icon} />
                </div>
                <div className="padding-x w-full z-10">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

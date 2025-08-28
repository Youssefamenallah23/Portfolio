import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100 ",
          },
          delay: (index + 1) * 0.3,
        }
      );
    });
  }, []);
  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*left part*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                href="https://mind-care-ai-mindy.vercel.app/"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src="/images/mindcare.png"
                  alt="mindcare"
                  className="transition-transform duration-300 ease-in-out hover:scale-90"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>
                MindCare IA is a web-based mental well-being platform that aims
                to bridge the gap between those in need of support and the tools
                that can help them
              </h2>
              <p className="text-white-50">
                The project utilizes a variety of tools and frameworks including
                Next.js, TypeScript, Tailwind CSS, React Hook Form, and Clerk
                for secure authentication. Data is managed using Sanity CMS and
                Astra DB
              </p>
            </div>
          </div>
          {/*right part*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb] ">
                <a
                  href="https://care-pulse-sms.vercel.app/"
                  className=" cursor-pointer"
                  target="_blank"
                >
                  <img
                    src="/images/carepulse.png"
                    alt="carepulse"
                    className="transition-transform duration-300 ease-in-out hover:scale-90"
                  />
                </a>
              </div>
              <h2>
                a web app for hospitals with sms notification and admin
                dashboard
              </h2>
            </div>
            <div className="project " ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb] ">
                <img src="/images/comingsoon.png" alt="comingsoon" />
              </div>
              <h2>a web app for automated phone calls</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;

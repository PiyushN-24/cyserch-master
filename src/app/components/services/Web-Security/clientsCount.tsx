'use client'

import { useState, useEffect, useRef } from "react";

export default function WebPenetrationTesting() {
  const [websitesSecured, setWebsitesSecured] = useState(0);
  const [vulnerabilities, setVulnerabilities] = useState(0);
  const [projects, setProjects] = useState(0);
  const [partners, setPartners] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const animateCount = (setter: (value: number) => void, endValue: number, delay: number): void => {
    let current = 0;
    const step = Math.ceil(endValue / 100);
    const interval = setInterval(() => {
      current += step;
      if (current >= endValue) {
        current = endValue;
        clearInterval(interval);
      }
      setter(current);
    }, delay);
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCount(setWebsitesSecured, 300, 50); // Count up to 300+
        animateCount(setVulnerabilities, 500, 30); // Count up to 500+
        animateCount(setProjects, 150, 40); // Count up to 150+
        animateCount(setPartners, 50, 60); // Count up to 50+
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="text-center clintCount sm:mt-[0rem] md:mt-[0rem] mb-12"
    >
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex container p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <h2 className="text-white text-[2rem] font-semibold fadeInUp">
        Trusted by <span className="text-[#19FFDB]">2000+</span> Organizations for Web Penetration Testing
        </h2>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">
          {websitesSecured}+
          </span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
          Websites Secured
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">
            {vulnerabilities}+
          </span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Vulnerabilities Discovered
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{projects}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Penetration Testing Projects Delivered
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">
          {partners}+
          </span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
          Security Technology Partners
          </span>
        </div>
      </div>
    </div>
  );
}

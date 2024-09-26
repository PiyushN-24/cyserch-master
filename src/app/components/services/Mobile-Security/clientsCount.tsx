'use client'

import { useState, useEffect, useRef } from "react";

export default function MobilePenTestingCount() {
  const [mobileAppsSecured, setMobileAppsSecured] = useState(0);
  const [vulnerabilities, setVulnerabilities] = useState(0);
  const [projects, setProjects] = useState(0);
  const [partnerships, setPartnerships] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To track if the animation has been triggered
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define the types for the parameters
  const animateCount = (setter: (value: number) => void, endValue: number, delay: number): void => {
    let current = 0;
    const step = Math.ceil(endValue / 100); // Number of increments
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
    // Type for IntersectionObserverEntry
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true); // Ensure the animation runs only once
        animateCount(setMobileAppsSecured, 30, 50); // Count up to 30+
        animateCount(setVulnerabilities, 200, 30); // Count up to 200+
        animateCount(setProjects, 75, 40); // Count up to 75+
        animateCount(setPartnerships, 20, 60); // Count up to 20+
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3, // Trigger when 30% of the section is visible
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
        Trusted by <span className="text-[#19FFDB]">1500+</span> Organizations for Mobile Penetration Testing
        </h2>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{mobileAppsSecured}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Mobile Applications Secured
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{vulnerabilities}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Mobile Security Vulnerabilities Discovered
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{projects}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
          Mobile Penetration Testing Projects Delivered
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{partnerships}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Mobile Security Technology Partnerships
          </span>
        </div>
      </div>
    </div>
  );
}

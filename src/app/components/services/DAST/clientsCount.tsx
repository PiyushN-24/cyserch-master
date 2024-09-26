'use client'

import { useState, useEffect, useRef } from "react";

export default function DASTCount() {
  const [applicationsTested, setApplicationsTested] = useState(0);
  const [vulnerabilitiesFound, setVulnerabilitiesFound] = useState(0);
  const [testsCompleted, setTestsCompleted] = useState(0);
  const [partners, setPartners] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation function for counting numbers
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
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCount(setApplicationsTested, 300, 50); // Count up to 300+
        animateCount(setVulnerabilitiesFound, 700, 30); // Count up to 700+
        animateCount(setTestsCompleted, 200, 40); // Count up to 200+
        animateCount(setPartners, 30, 60); // Count up to 30+
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
          Trusted by <span className="text-[#19FFDB]">1200+</span> Organizations for Dynamic Application Security Testing
        </h2>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{applicationsTested}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Applications Tested
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{vulnerabilitiesFound}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Vulnerabilities Found
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{testsCompleted}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            DAST Tests Completed
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{partners}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Security Technology Partnerships
          </span>
        </div>
      </div>
    </div>
  );
}
